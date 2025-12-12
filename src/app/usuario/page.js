import db from "@/lib/db"
import styles from "./page.module.css";
import Link from "next/link";
import CardUser from "@/components/CardUser/CardUser";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async () => {

   const session = await getServerSession(authOptions);
   if (!session) redirect("/"); // Tela de login

   if (session.user.role !== "admin") {
        // Redirecionar para uma página de erro ou home
        redirect("/nao-autorizado"); 
    }

   const usuarios = await db.query("select * from usuarios")

   return (
      <div className={styles.acessarUsuarios}>
         <header className={styles.header}>
            <Link href="/livros" className={styles.backBtn}>←</Link>
            <h1>Lista de usuários</h1>
         </header>

         <main className={styles.listaDeUsuarios}>
            {
               usuarios.rows.map(
                  a => (
                     <CardUser id={a.id} key={a.nome + 1} nome={a.nome} email={a.email} fotoUrl={a.foto_url}></CardUser>
                  )
               )
            }
         </main>

         <footer className={styles.footer}></footer>
      </div>
   );

}