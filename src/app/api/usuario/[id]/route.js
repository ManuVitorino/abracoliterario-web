import { NextResponse } from "next/server";
import db from "@/lib/db";
import { put } from "@vercel/blob";

export async function GET(req, { params }) {
  try {
    const { id } = await params;
    const result = await db.query("SELECT * FROM usuarios WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: "Usuário não foi encontrado" },
        { status: 404 }
      );
    }

    const usuario = result.rows[0];

    return NextResponse.json(usuario, { status: 200 });
  } catch (error) {
    console.log("Erro ao buscar usuário:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}


export async function DELETE(req, { params }) {
  try {
    const { id } = await params;

    const result = await db.query("SELECT * FROM usuarios WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: "Usuário não encontrado" },
        { status: 404 });
    }

    await db.query("DELETE FROM usuarios WHERE id = $1", [id]);

    return NextResponse.json(
      {
        message: "Usuário removido com sucesso",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Erro ao remover usuário:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}


export async function PUT(req, { params }) {
  try {
    const { id } = params;

    const formData = await req.formData();
    const nome = formData.get("nome");
    const arquivoFoto = formData.get("foto");

    let foto_url = null;

    if (arquivoFoto && arquivoFoto.size > 0) {
      const filename = `foto_${nome.toLowerCase().replace(/[^a-z0-9]/g, '-')}_${Date.now()}.${arquivoFoto.name.split('.').pop()}`;
      const blob = await writeBlob(arquivoFoto, { access: "public", name: filename });
      foto_url = blob.url;
      console.log("URL da foto gerada:", foto_url);
    }

    const existe = await db.query("SELECT * FROM usuarios WHERE id = $1", [id]);
    if (existe.rows.length === 0) {
      return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 });
    }

    const fotoFinal = foto_url || existe.rows[0].foto_url;

    await db.query(
      "UPDATE usuarios SET nome = $1, foto_url = $2 WHERE id = $3",
      [nome, fotoFinal, id]
    );

    return NextResponse.json({ message: "Usuário atualizado com sucesso" }, { status: 200 });
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}