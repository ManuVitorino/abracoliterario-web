import db from "@/lib/db";
import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

export async function GET() {
    try{
        const result = await db.query("SELECT * FROM livro");
        return NextResponse.json(result.rows)
    } catch (error) {
        console.log("Erro ao buscar livros", error)
        return NextResponse.json(
            {error: "Internal Server Error"},
            {status: 500}
        )
    }
}

export async function POST(req) {
    try {

        const formData = await req.formData();

        const titulo = formData.get('titulo');
        const autor = formData.get('autor');
        const sinopse = formData.get('sinopse');
        const arquivoCapa = formData.get('capa'); 

        let capa_url = null;

        // 2. Fazer o Upload para o Vercel Blob
        if (arquivoCapa && arquivoCapa.size > 0) {
            
            const filename = `capa_${titulo.toLowerCase().replace(/[^a-z0-9]/g, '-')}_${Date.now()}.${arquivoCapa.name.split('.').pop()}`;
            
            const blob = await put(filename, arquivoCapa, {
                access: 'public', // Torna a imagem acessível via URL
            });

            capa_url = blob.url; // URL do arquivo no Vercel Blob
            console.log("URL da capa gerada:", capa_url);
        }

        const result = await db.query(
        "INSERT INTO livro (titulo, autor, sinopse, capa_url) VALUES ($1, $2, $3, $4) RETURNING *", [titulo, autor, sinopse, capa_url])

        console.log("Resultado da inserção:", result)

        return NextResponse.json(result.rows[0], { status: 201 })
    } catch (error) {
        console.log("Erro ao adicionar novo livro", error);
        return NextResponse.json(
            { error: 'Internal Server Error' }, 
            { status: 500 }
        )
    }
}