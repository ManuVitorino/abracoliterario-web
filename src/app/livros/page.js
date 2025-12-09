import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import CardLivro from "@/components/CardLivro/CardLivro";
import SearchBox from "@/components/SearchBox/SearchBox";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import db from "@/lib/db";

export default async function Home( {searchParams} ) {

    const session = await getServerSession(authOptions); 
    if (!session) redirect("/"); // Tela de login

    const params = await searchParams;
    const q = params.q || "";

    let livros;

    if (q) {
        livros = await db.query(
            "SELECT * FROM livro WHERE LOWER(titulo) LIKE LOWER($1)",
            [`%${q}%`]
        );
    } else {
        livros = await db.query("SELECT * FROM livro");
    }

    const livro = livros.rows;

  return (
    <div className={styles.homeContainer}>
    
        <header className={styles.header}>
          <div className={styles.userSection}>

            <span className={styles.welcome}>Olá, {session.user.name}!</span>

            <SearchBox></SearchBox>

          </div>

          <div className={styles.logo}>
            {/* Colocar logo oficial depois */}
            <img className={styles.logo} src="/logo_abraco_literario.png" alt="Logo Abraço Literário" />
          </div>

        </header>

        <div className={styles.container}>
          
          {/* Menu lateral */}
          <aside className={styles.sidebar}>

            <Link href="/adicionarLivro" className={styles.linksSidebar}>Adicionar livro</Link>

            <Link href="/usuario" className={styles.linksSidebar}>Acessar usuarios</Link>

            <Link href="/perfil" className={styles.linksSidebar}>Seu perfil</Link>

          </aside>

          {/* Grade de livros */}
          <main className={styles.booksGrid}>

            {livro.map(l => (
                <CardLivro id={l.id} key={l.id + 1} titulo={l.titulo} urlCapa={l.capa_url}></CardLivro>
            ))}

          </main>
        </div>

        <footer className={styles.footer}></footer>
    </div>
  );
}
