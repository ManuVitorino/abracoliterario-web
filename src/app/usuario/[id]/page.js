import db from "@/lib/db";

export default async ({params}) => {
    const usuario = await db.query(
        "select * from usuario where id = "+params.id
    );
    return (
        <>

            <h1> Pagina do usuario:
                {usuario.rows[0].nome}</h1>
            <p> o usuario faz parte do cargo:
                {usuario.rows[0].cargo}</p>
        
        </>
    )
}