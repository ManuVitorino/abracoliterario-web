import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import FormAddLivro from "@/components/FormAddLivro/FormAddLivro";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function AdicionarLivro() {

  const session = await getServerSession(authOptions);
   if (!session) redirect("/"); // Tela de login

   if (session.user.role !== "admin") {
        // Redirecionar para uma página de erro ou home
        redirect("/nao-autorizado"); 
    }

  return (
    <div className={styles.adicionarLivroContainer}>
        <div className={styles.header}>
            <Link href="/livros" className={styles.backBtn}>←</Link>
            <h1>Adicionar livros</h1>
        </div>

        <FormAddLivro></FormAddLivro>

        <div className={styles.footer}></div>
    </div>
  );
}
