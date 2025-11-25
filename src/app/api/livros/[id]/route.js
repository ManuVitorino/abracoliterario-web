import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } = await params;
    const result = await db.query("SELECT * FROM livro WHERE id = $1", [
      id,
    ]);

    if (!result) {
      return NextResponse.json(
        { error: "Livro não encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.log("Erro ao buscar livro:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}