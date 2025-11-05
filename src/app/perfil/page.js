import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Perfil() {
  return (
    <>
    {/* Topo */}
    <header className={styles.header}>
        <button className={styles.configsProfile}>:</button>
    </header>

    <main className={styles.dadosGerais}>
        <div className={styles.informacoes}>
            <img src="/foto-de-perfil-teste.png" className={styles.foto} alt="Foto de perfil"></img>
            <p className={styles.nome}>@Maria Joaquina</p>
            <Link className={styles.editarPerfil} href="#">Editar perfil ⚙️</Link>
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

    {/* Rodapé */}
    <footer className={styles.footer}></footer>
    </>
  );
}
