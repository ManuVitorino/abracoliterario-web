"use client"
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Login () {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleSubmit = (event) => {
    event.preventDefault(); 

    if (email === "" || senha === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  } else {
    alert("Tentando fazer login...");
  }
    
    // Quando tiver lógica backend:
    // Ex: realizarCadastro(nome, email, senha);
    
    // Limpar o formulário após o sucesso
    setEmail('');
    setSenha('');
  };

    return (
        <>
          <form onSubmit={handleSubmit} className={styles.loginContainer}>
              <h1 className={styles.tituloLog}>Seja Bem-Vindo</h1>
              <p  className={styles.descricaoLog}>
                Construindo uma cidadania <br />
                ativa através da leitura
              </p>

              <input className={styles.inputs} type="email" id="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input className={styles.inputs} type="password" id="senha" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />

              <Link href="#" className={styles.link}>Esqueceu a senha?</Link>

              {/*No futuro deverá direcionar a página livros*/}
              <button type="submit" className={styles.buttonLog}>Login</button>

              <p className={styles.naoTemConta}>Não tem conta?</p>
              <Link href="/cadastro" className={styles.linkCadastro}>
                Cadastre-se  
              </Link>
          </form>

          <img src="/foto-boneca.png" alt="" className={styles.fotoBoneca} />
        </>
    );
}