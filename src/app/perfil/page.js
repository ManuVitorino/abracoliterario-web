import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/LogOut/LogOut";

export default async function Perfil() {

    const session = await getServerSession(authOptions);
    if (!session) redirect("/"); // Tela de login

    return (
        <div className={styles.perfilContainer}>
            <header className={styles.header}>
                <h1>Seu perfil</h1>
            </header>

            <main className={styles.dadosGerais}>
                <div className={styles.informacoes}>
                    <img src="/foto-de-perfil-teste.png" className={styles.foto} alt="Foto de perfil"></img>
                    <p className={styles.nome}>Nome: {session.user.name}</p>
                    <p className={styles.nome}>Email: {session.user.email}</p>
                    <p className={styles.nome}>Função: {session.user.role}</p>

                    <LogoutButton></LogoutButton>

                </div>
            </main>    

            <footer className={styles.footer}></footer>
        </div>
    );
}
