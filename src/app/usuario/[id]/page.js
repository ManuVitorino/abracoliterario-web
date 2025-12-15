import db from "@/lib/db";
import styles from './page.module.css'
import Link from "next/link";
import Image from "next/image";
import { DeleteUser } from "@/components/DeleteUser/DeleteUser";

export default async function UsuarioPage ({params}) {

    const { id } = await params;

    const usuarios = await db.query(
        `select * from usuarios where id = ${id}`
    );

    const usuario = usuarios.rows[0];

    return (
        <div className={styles.usuarioContainer}>
            <header className={styles.header}>
                <Link href="/usuario" className={styles.backBtn}>←</Link>
                <h1> Página do usuário</h1>
            </header>
            

            <main className={styles.dadosGerais}>
                <div className={styles.informacoes}>
                    <Image 
                        src={usuario.foto_url} 
                        className={styles.foto} 
                        alt="Foto de perfil"
                        width={150}
                        height={150}
                    ></Image>
                    <p className={styles.nome}>{usuario.nome}</p>
                    <p className={styles.nome}>{usuario.email}</p>
                    
                    <DeleteUser userId={usuario.id}></DeleteUser>

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
            <div className={styles.footer}></div>
        </div>
    )
}