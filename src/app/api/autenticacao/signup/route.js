import db from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"; // É necessário colocar a biblioteac para hashear a senha

export async function POST(request) {
  try {
    
    //Dados a serem cadastrados
    const { nome, email, senha, role = "cliente" } = await request.json();
    console.log("Recebi do frontend:", nome, email, senha);

    //validação de segurança(campos vazios)
    if (!nome || !email || !senha) {
      return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });
    }

    //validação de segurança(ususário já existente)
    const existe = await db.query(
      "SELECT id FROM usuarios WHERE email = $1",
      [email]
    );
    if (existe.rowCount > 0) {
      return NextResponse.json(
        { error: "E-mail já cadastrado" }, 
        { status: 409 }
      );
    }

    //Criptografia da senha 
    const senhaHash = await bcrypt.hash(senha, 12); // custo 12 é bom, como visto a

    const fotoPadrao = "https://aqwzkvq0zraom5bg.public.blob.vercel-storage.com/foto-padrao.png"

    //Cadastrando novo usuário
    await db.query(
      "INSERT INTO usuarios (nome, email, senha, role, foto_url) VALUES ($1, $2, $3, $4, $5)",
      [nome, email, senhaHash, role, fotoPadrao]
    );

    return NextResponse.json(
      { message: "Usuário criado com sucesso!", email }, 
      { status: 201 }
    );
    
  } catch (error) {
    console.error("Erro ao adicionar usuário:", error.message, error.stack);
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
  }

}
