import Link from 'next/link';
import styles from './page.module.css'; 

export default function NaoAutorizado() {

    return (
        <div className={styles.naoAutorizado}>
            <header className={styles.header}>
                <h1>Acesso Negado</h1>
            </header>
            
            <main className={styles.content}>
                <p>Você não tem permissão para acessar esta página.</p>
                <p>O recurso que você tentou acessar é restrito a administradores</p>
                
                <div className={styles.actions}>
                    <Link href="/livros" className={styles.homeLink}>
                        Voltar para a Página Inicial
                    </Link>
                </div>
            </main>

            <footer className={styles.footer}></footer>
        </div>
    );
}