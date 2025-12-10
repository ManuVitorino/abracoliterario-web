"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Cadastro() {

  const router = useRouter();

  const addUsuario = async (usuario) => {
      const response = await fetch('/api/autenticacao/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
             body: JSON.stringify(usuario)
      })

      if(response.ok) {
          alert("Cadastro realizado com sucesso!");
          router.push("/");
      } else {
          alert("Erro ao cadastrar cliente!");
      }

  };

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); 

    if (email === "" || senha === "" || nome === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Realização de cadastro
    addUsuario({nome, email, senha})
    
    // Limpar o formulário após o sucesso
    setNome('');
    setEmail('');
    setSenha('');
  };

  return (
    <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.cadastroContainer}>
            <h1 className={styles.tituloCad}>Cadastre-se</h1>

            <p className={styles.descricaoCad}>
            Crie sua conta e descubra como a leitura <br />
            pode empoderar sua voz de cidadão.
            </p>

            <input className={styles.inputs} type="nome" id="nome" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />

            <input className={styles.inputs} type="email" id="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />

            <input className={styles.inputs} type="password" id="senha" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />

            <button className={styles.buttonCad} type="submit">Cadastre-se</button>
        </form>
        <div className={styles.secaoLogo}>
            <h3>Seja bem-vindo!</h3>
            <p className={styles.texto}>Construindo uma cidadania</p>
            <p className={styles.texto}>ativa através da leitura!</p>
            <img src="/logo_abraco_literario.png" alt="Imagem de boneca" className={styles.logoAbraco} />
        </div>
    </div>
  );
}
