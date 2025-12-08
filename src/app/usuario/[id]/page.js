import db from "@/lib/db";
import styles from './page.module.css'
import Link from "next/link";

export default async ({params}) => {

    const { id } = await params;

    const usuarios = await db.query(
        `select * from usuarios where id = ${id}`
    );

    const usuario = usuarios.rows[0];

    return (
        <div className={styles.usuarioContainer}>
            <header className={styles.header}>
                <h1> Pagina do usuario</h1>
            </header>
            

            <main className={styles.dadosGerais}>
                <div className={styles.informacoes}>
                    <img src="/foto-de-perfil-teste.png" className={styles.foto} alt="Foto de perfil"></img>
                    <p className={styles.nome}>{usuario.nome}</p>
                    <p className={styles.nome}>{usuario.email}</p>
                </div>
                <div className={styles.acoesLivros}>
                    <div className={styles.acoes1}>
                    <div className={styles.metaLeitura}>
                    <p>Meta de leitura</p>
                    <p>{"1/10"}</p>
                    </div>
                </div>
                <div className={styles.acoes1}>
                    <Link className={styles.links} href="#">Histórico de livros</Link>
                    <Link className={styles.links} href="#">Avaliação de livros</Link>
                    <Link className={styles.links} href="#">Lista de desejos</Link>
                </div>
            
                </div>
            </main>       
        </div>
    )
}