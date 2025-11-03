import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function ListaDeDesejos() {
  return (
    <>
        <div className={styles.header}>
            <Link href="/" className={styles.backBtn}>←</Link>
            <h1>Lista de Desejos</h1>
        </div>

        <div className={styles.booksGrid}>
            <img 
                src="/clara dos anjos.png" 
                className={styles.imgBooks} 
                alt="Livro 1" />
            <img 
                src="/camara secreta.png"
                className={styles.imgBooks} 
                alt="Livro 2" />
            <img
                src="/as vantagens de ser invisivel.png"
                className={styles.imgBooks}
                alt="Livro 3"
            />
            <img 
                src="/helena.png" 
                className={styles.imgBooks}
                alt="Livro 4" />
            <img 
                src="/o sol é pra todos.png" 
                className={styles.imgBooks}
                alt="Livro 5" />
            <img
                src="/cancao para ninar menino grande.png"
                className={styles.imgBooks}
                alt="Livro 6"
            />
            <img 
                src="/quaresma.png" 
                className={styles.imgBooks}
                alt="Livro 7" />
            <img 
                src="/enigma do principe.png" 
                className={styles.imgBooks}
                alt="Livro 8" />
        </div>
        <div className={styles.footer}></div>
    </>
  );
}
