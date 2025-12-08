import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import FormAddLivro from "@/components/FormAddLivro/FormAddLivro";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
//import { useState } from "react";

export default async function AdicionarLivro() {

  const session = await getServerSession(authOptions);
   if (!session) redirect("/"); // Tela de login

   if (session.user.role !== "admin") {
        // Redirecionar para uma página de erro ou home
        redirect("/nao-autorizado"); 
    }

  /*
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [sinopse, setSinopse] = useState('');
  const [capa, setCapa] = useState('');
  const [arquivoCapa, setArquivoCapa] = useState(null)
  //const [pdfLivro, setPdfLivro] = useState('');
  
  const handleCapaUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setArquivoCapa(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setCapa(reader.result); // Atualiza o estado com a imagem carregada
      };
      reader.readAsDataURL(file); // Lê o arquivo como uma URL de dados
    }
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("autor", autor);
    formData.append("sinopse", sinopse);
    formData.append("capa", arquivoCapa);

    const response = await fetch('/api/livros', { 
        method: 'POST',
        body: formData,
    });

    const data = await response.json();
    console.log('Livro adicionado com sucesso:', data);
    alert('Livro adicionado com sucesso!');

    setTitulo('');
    setAutor('');
    setSinopse('');
    setCapa('');
    setArquivoCapa(null);
  };
  */

  return (
    <div className={styles.adicionarLivroContainer}>
        <div className={styles.header}>
            <Link href="/livros" className={styles.backBtn}>←</Link>
            <h1>Adicionar livros</h1>
        </div>

        <FormAddLivro></FormAddLivro>

        {/*
        <form className={styles.addBookForm} onSubmit={handleSubmit}>
            <div className={styles.bookFiles}>
                
                <label htmlFor="capaUpload" className={styles.capaUpload}>

                <input 
                    type="file" 
                    id="capaUpload"
                    name="capa"
                    accept="image/*"
                    className={styles.capaHidden}
                    onChange={handleCapaUpload}
                ></input>

                <span className={styles.prewiewCapa}>{capa ? "" : "+"}</span>
                {capa && <img src={capa} alt="Uploaded" />}
                </label>

                <input 
                    type="file"
                    id="pdfInput"
                    accept="pdf"
                    className={styles.hiddenPDF}
                ></input>

                <label htmlFor="pdfInput" className={styles.pdfButton}> Livro em PDF 🔗</label>

            </div>
            <div className={styles.bookData}>
                <input 
                  className={styles.nameBook}
                  name="titulo"
                  type="text" 
                  placeholder="Adicionar titulo"
                  value={titulo} 
                  onChange={(e) => setTitulo(e.target.value)}
                ></input>
                <input 
                  className={styles.nameBook}
                  name="autor"
                  type="text" 
                  placeholder="Adicionar autor"
                  value={autor} 
                  onChange={(e) => setAutor(e.target.value)}
                ></input>
                <textarea 
                  className={styles.sinopseBook}
                  name="sinopse" 
                  placeholder="Adicionar sinopse..."
                  value={sinopse} 
                  onChange={(e) => setSinopse(e.target.value)}
                ></textarea>
                <button className={styles.crateProject} type="submit">Adicionar</button>
            </div>
        </form>
        */}

        <div className={styles.footer}></div>
    </div>
  );
}
