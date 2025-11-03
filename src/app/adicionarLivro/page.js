"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";

export default function ListaDeDesejos() {

  const [titulo, setTitulo] = useState('');
  const [sinopse, setSinopse] = useState('');
  const [capa, setCapa] = useState('');
  const [pdfLivro, setPdfLivro] = useState('');

  const handleCapaUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCapa(reader.result); // Atualiza o estado com a imagem carregada
      };
      reader.readAsDataURL(file); // Lê o arquivo como uma URL de dados
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 

    const novoLivro = () => {
        titulo,
        sinopse,
        capa,
        pdfLivro
    }

    setNome('');
    setEmail('');
    setSenha('');
  };

  return (
    <>
        <div className={styles.header}>
            <Link href="/" className={styles.backBtn}>←</Link>
            <h1>Adicionar livros</h1>
        </div>

        <form className={styles.addBookForm} onSubmit={handleSubmit}>
            <div className={styles.bookFiles}>
                
                <label htmlFor="capaUpload" className={styles.capaUpload}>

                <input 
                    type="file" 
                    id="capaUpload"
                    name="imagem"
                    accept="image/*"
                    className={styles.capaHidden}
                    onChange={handleCapaUpload}
                ></input>

                <span className={styles.prewiewCapa}>{capa ? "" : "+"}</span>
                {capa && <img src={capa} alt="Uploaded" />}
                </label>

                {/*<img src="/A Hora da Estrela.png" alt="Capa do livro" className={styles.imgBooks}></img>*/}

                <input 
                    type="file"
                    id="pdfInput"
                    accept="pdf"
                    className={styles.hiddenPDF}
                ></input>

                <label htmlFor="pdfInput" className={styles.pdfButton}> Livro em PDF 🔗</label>

            </div>
            <div className={styles.bookData}>
                <input className={styles.nameBook} type="text" placeholder="Adicionar titulo e autor..."></input>
                <textarea className={styles.sinopseBook} placeholder="Adicionar sinopse..."></textarea>
            </div>
        </form>
        <div className={styles.footer}></div>
    </>
  );
}
