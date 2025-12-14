import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import db from "@/lib/db";

//Fazer a busca do usuário para utilização futura
async function getUserByEmail(email) {
  try{
    const result = await db.query(
      "SELECT id, nome, email, senha, role, foto_url FROM usuarios WHERE email = $1",
      [email]
    );
    return result.rows[0] || null;

  } catch (error) {
    console.error("Erro ao buscar usuário por email:", error);
    return null;
  }
}

//Criação de sessão que será um JWT assinado e que será guardado em cookie httpOnly

const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    session: { strategy: "jwt" },
    providers: [ // Trata-se de como o usuário pode entrar (Google, Facebook, e-mail/senha, enre outros).

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),

        CredentialsProvider({
            name: "Credenciais",
            credentials: {
                email: { label: "E-mail", type: "email" },
                senha: { label: "Senha", type: "password" }
            },
            async authorize(credentials) {
                const { email, senha } = credentials;
                const user = await getUserByEmail(email);
                if (!user || !user.senha) return null;
                const ok = await compare(senha, user.senha);
                if (!ok) return null;
                // O objeto que for retornado vai para o token/session
                return { 
                    id: user.id, 
                    name: user.nome, 
                    email: user.email, 
                    role: user.role,
                    foto_url: user.foto_url
                };
            }
        })

    ],

    /*
    Callbacks: Funções que o nextAuth utiliza em certos momentos do fluxo de autenticação, os quais permitem personalizar o JWT, a sessão, como o login vai funcionar...
    */
    callbacks: {
        // Vamos colocar role e id no JWT para informar os papeis do usuário
        async jwt({ token, user, account, profile }) {
            // Primeira vez que loga por OAuth
            // Antes era: if (account && profile && !user)
            if (account?.provider === "google") {
                // É precio vincular ou auto-criar um usuário no banco (opcional)
                const existing = await getUserByEmail(profile.email);
                
                if (existing) {
                    token.role = existing.role;
                    token.id = existing.id;
                    token.name = existing.nome;
                    token.foto_url = existing.foto_url;
                } else {
                    const fotoPadrao = profile.picture || "https://aqwzkvq0zraom5bg.public.blob.vercel-storage.com/foto-padrao.png";
                    // Exemplo: cria como "cliente"
                    const res = await db.query(
                        "INSERT INTO usuarios (nome, email, role, foto_url) VALUES ($1, $2, $3, $4) RETURNING id, role, foto_url, nome",
                        [profile.name ?? "Usuário", profile.email, "cliente", fotoPadrao]
                    );
                    token.id = res.rows[0].id;
                    token.role = res.rows[0].role;
                    token.foto_url = res.rows[0].foto_url;
                    token.name = res.rows[0].nome;
                }
            }

            if (user) {
                token.id = user.id;
                token.role = user.role;
                token.name = user.name;
                token.foto_url = user.foto_url;
            }

            /* Re-busca */
            if (token.id) {
                const latestUser = await getUserByEmail(token.email); 
                // Usamos o email do token para buscar no banco
                
                if (latestUser) {
                    // Atualiza o token com os dados mais recentes do banco
                    token.name = latestUser.nome;
                    token.foto_url = latestUser.foto_url;
                    token.role = latestUser.role; // (Garante que a role está atualizada também)
                    // Não é necessário atualizar token.id, pois ele não muda
                }
            }

            return token;
        },
        // É necessário para coloca dados úteis na sessão (disponível no cliente)
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.role = token.role;
                session.user.name = token.name ?? session.user.name;
                session.user.foto_url = token.foto_url;
            }
            return session;
        }
    },
    pages: {
        // Aqui vc coloca a sua página de login customizada
        signIn: "/login"
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
export { authOptions }; // para usar em APIs protegidas
