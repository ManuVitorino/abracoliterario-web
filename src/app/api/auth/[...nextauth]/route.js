import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import db from "@/lib/db";

//Fazer a busca do usuário para utilização futura
async function getUserByEmail(email) {
  try{
    const result = await db.query(
      "SELECT id, nome, email, senha, role FROM usuarios WHERE email = $1",
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
                return { id: user.id, name: user.nome, email: user.email, role: user.role };
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
            if (account && profile && !user) {
                // É precio vincular ou auto-criar um usuário no banco (opcional)
                const existing = await getUserByEmail(profile.email);
                
                if (existing) {
                    token.role = existing.role;
                    token.id = existing.id;
                    token.name = existing.nome;
                } else {
                    // Exemplo: cria como "cliente"
                    const res = await db.query(
                        "INSERT INTO usuarios (nome, email, role) VALUES ($1, $2, $3) RETURNING id, role",
                        [profile.name ?? "Usuário", profile.email, "cliente"]
                    );
                    token.id = res.rows[0].id;
                    token.role = res.rows[0].role;
                }
            }

            if (user) {
                token.id = user.id;
                token.role = user.role;
                token.name = user.name;
            }
            return token;
        },
        // É necessário para coloca dados úteis na sessão (disponível no cliente)
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.role = token.role;
                session.user.name = token.name ?? session.user.name;
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
