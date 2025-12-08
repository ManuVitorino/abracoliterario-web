import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Livro from "@/components/Livro/Livro";
import Comentario from "@/components/Comentario/Comentario";

export default async function PaginaLivro({ params }) {

    const { id } = await params;

    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/livros/${id}`, { //Next_url
        cache: 'no-store' 
    });

    const livro = await response.json();

    return (
        <div className={styles.pageLivroContainer}>
            <div className={styles.header}>
                <Link href="/livros" className={styles.backBtn}>←</Link>
                <h1>Página de livros</h1>
            </div>

            <div className={styles.informacoesGerais}>
                
                <Livro
                    idLivro = {`${livro.id}`}
                    imagemLivro={`${livro.capa_url}`} 
                    nomeLivro={`${livro.titulo} - ${livro.autor}`}
                    descricaoLivro={`${livro.sinopse}`}
                ></Livro>
                
                <div className={styles.commentsBooks}>
                    <p>Comentários:</p>

                    <Comentario fotoUsuario={"/foto-boneca.png"} nomeUsuario={"@ManuVit"} comentarioUsuario={"Que livro ótimo!!!"}></Comentario>

                    <Comentario fotoUsuario={"/helena.png"} nomeUsuario={"@Clara"} comentarioUsuario={"Que livro sensacional!!!"}></Comentario>
                
                </div>
            </div>
            <div className={styles.footer}></div>
        </div>
    );
}
