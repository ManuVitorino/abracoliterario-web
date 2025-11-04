import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Livro from "@/components/Livro/Livro";
import Comentario from "@/components/comentario/Comentario";

export default function PaginaLivro() {

  return (
    <>
        <div className={styles.header}>
            <Link href="/" className={styles.backBtn}>←</Link>
            <h1>Página de livros</h1>
        </div>

        <div className={styles.informacoesGerais}>
            
            <Livro imagemLivro={"/A Hora da Estrela.png "} nomeLivro={"A hora da Estrela - Clarice Lispector"} i></Livro>
            
            <div className={styles.commentsBooks}>
                <p>Comentários:</p>

                <Comentario fotoUsuario={"/foto-boneca.png"} nomeUsuario={"@ManuVit"} comentarioUsuario={"Que livro ótimo!!!"}></Comentario>

                <Comentario fotoUsuario={"/helena.png"} nomeUsuario={"@Clara"} comentarioUsuario={"Que livro sensacional!!!"}></Comentario>
            
            </div>
        </div>
        <div className={styles.footer}></div>
    </>
  );
}
