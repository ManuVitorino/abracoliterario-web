"use client"
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

export default function Login () {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'error'
    const [errorMessage, setErrorMessage] = useState('');

    const router = useRouter();

    const { data: session } = useSession();

    useEffect(() => {
        // Já está logado
        if (session) router.replace("/livros");
    }, [session, router]);

    const authUsuario = async (email, senha) => {

        // 1. Inicio do loading
        setStatus('loading');
        setErrorMessage('');

        const response = await signIn("credentials", {
            redirect: false,
            email: email,
            senha: senha,
        });

        if (response?.ok) {
            setStatus('sucess');
            router.push("/livros");
            router.refresh();
        } else {
            // 2. Define o status de erro
            setStatus('error');
            setErrorMessage("Credenciais inválidas. Tente novamente.");
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (status === 'loading') return;

        if (email === "" || senha === "") {
            setErrorMessage("Por favor, preencha todos os campos.");
            setStatus('error');
            return;
        }
    
        await authUsuario(email, senha);

    };

    const handleGoogleLogin = () => {
        if (status === 'loading') return;
        setStatus('loading'); // Opcional: define o estado de carregamento antes do redirecionamento
        signIn("google");
    };

    return (
        <div className={styles.pageLoginContainer}>
          <form onSubmit={handleSubmit} className={styles.loginContainer}>
              <h1 className={styles.tituloLog}>Seja Bem-Vindo</h1>
              <p  className={styles.descricaoLog}>
                Construindo uma cidadania <br />
                ativa através da leitura
              </p>

              {status === 'error' && errorMessage && (
                <div className={styles.errorMessage}>
                    {errorMessage}
                </div>
              )}

              <input className={styles.inputs} type="email" id="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input className={styles.inputs} type="password" id="senha" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />

              <Link href="#" className={styles.link}>Esqueceu a senha?</Link>

              <button 
                  type="submit" 
                  disabled={status === 'loading'} 
                  className={styles.buttonLog}
              >
                 {status === 'loading' ? 'Acessando...' : 'Login'}
              </button>

              <button 
                  type="button" 
                  onClick={handleGoogleLogin} 
                  className={styles.buttonLog}
                  disabled={status === 'loading'}
              >
                  Continuar com o Google
              </button>

              <p className={styles.naoTemConta}>Não tem conta?</p>
              <Link href="/cadastro" className={styles.linkCadastro}>
                Cadastre-se  
              </Link>
          </form>

          <img 
            src="/logo_abraco_literario.png" 
            alt="Logo abraço literário" 
            className={styles.logoAbraco}
            width={350}
            height={350}
          />
          
        </div>
    );
}