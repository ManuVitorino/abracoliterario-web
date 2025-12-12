import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import FormEditarPerfil from "@/components/FormEditarPerfil/FormEditarPerfil";

export default async function EditarPerfil() {

    const session = await getServerSession(authOptions);
    if (!session) redirect("/"); // Tela de login

    const id = session.user.id;

    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/usuario/${id}`, {
        cache: "no-store",
    });

    const usuario = await response.json();

    return (
        <div className={styles.perfilContainer}>
            <header className={styles.header}>
                <Link href="/perfil" className={styles.backBtn}>←</Link>
                <h1>Editar perfil</h1>
            </header>

            <FormEditarPerfil usuario={usuario} userId={id}></FormEditarPerfil>

            <footer className={styles.footer}></footer>
        </div>
    );
}
