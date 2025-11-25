import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import CardLivro from "@/components/CardLivro/CardLivro";

async function getLivros() {

    //Mudar essa URL quando fazer deploy pro Vercel
    const response = await fetch('http://localhost:3000/api/livros', { 
        cache: 'no-store' 
    });

    if (!response.ok) {
        throw new Error(`Falha ao carregar livros: ${response.status}`);
    }

    return response.json();
}

export default async function Home() {

    let livros = [];

    try {
        livros = await getLivros();
    } catch (error) {
        console.error("Erro no Server Component:", error);
    }

  return (
    <>
    {/* Topo */}
    <header className={styles.header}>
      <div className={styles.userSection}>
        {/* Não tem foto de perfil */}
        {/* <img src="perfil.jpg" alt="Foto de perfil" className={styles.profilePic} /> */}
        <span className={styles.welcome}>Oi, Manu!</span>
        <div className={styles.searchBox}>
          <input type="text" placeholder="Buscar livros..." />
          <button>🔍</button>
        </div>
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
        <Link href="#" className={styles.linksSidebar}>Avaliação de Livros</Link>

      </aside>

      {/* Grade de livros */}
      <main className={styles.booksGrid}>

        {livros.map(l => (
            <CardLivro id={l.id} key={l.id + 1} titulo={l.titulo} urlCapa={l.capa_url}></CardLivro>
        ))}

      </main>
    </div>

    {/* Rodapé */}
    <footer className={styles.footer}></footer>
    </>
  );
}
