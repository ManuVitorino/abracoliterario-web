import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
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
        <Link href="#" className={styles.linksSidebar}>Histórico de Livros</Link>
        <Link href="#" className={styles.linksSidebar}>Avaliação de Livros</Link>
        <Link href="/listadedesejos" className={styles.linksSidebar}>Lista de Desejos</Link>
        <Link href="/adicionarLivro" className={styles.linksSidebar}>Adicionar Livro</Link>
      </aside>

      {/* Grade de livros */}
      <main className={styles.booksGrid}>
        <div className={styles.bookCard}>
          <img
            src="/as vantagens de ser invisivel.png"
            alt="As vantagens de Ser Invisível"
          />
          <p>As vantagens de Ser Invisível</p>
        </div>
        <div className={styles.bookCard}>
          <img
            src="/clara dos anjos.png"
            alt="Clara dos Anjos"
          />
          <p>Clara dos Anjos</p>
        </div>
        <div className={styles.bookCard}>
          <img
            src="/os sete maridos de HG.png"
            alt="Os Sete Maridos de Evelyn Hugo"
          />
          <p>Os Sete Maridos de Evelyn Hugo</p>
        </div>
        <div className={styles.bookCard}>
          <img
            src="/cancao para ninar menino grande.png"
            alt="Canção Para Ninar Menino Grande"
          />
          <p>Canção Para Ninar Menino Grande</p>
        </div>
        <div className={styles.bookCard}>
          <img
            src="/Prisioneiro de Azkaban.png"
            alt="Prisioneiro de Azkaban"
          />
          <p>Prisioneiro de Azkaban</p>
        </div>
        <div className={styles.bookCard}>
          <img
            src="/A Hora da Estrela.png"
            alt="A Hora da Estrela"
          />
          <p>A Hora da Estrela</p>
        </div>
        <div className={styles.bookCard}>
          <img src="/Tudo é Rio.png" alt="Tudo é Rio" />
          <p>Tudo é Rio</p>
        </div>

        <div className={styles.bookCard}>
          <img
            src="/Não é como nos Filmes.png"
            alt="Não é como Nos Filmes"
          />
          <p>Não é como Nos Filmes</p>
        </div>

        <div className={styles.bookCard}>
          <img src="/helena.png" alt="Helena" />
          <p>Helena</p>
        </div>

        <div className={styles.bookCard}>
          <img src="/Olhos D´gua.png" alt="Olhos D´gua" />
          <p>Olhos D´gua</p>
        </div>
      </main>
    </div>

    {/* Rodapé */}
    <footer className={styles.footer}></footer>
    </>
  );
}
