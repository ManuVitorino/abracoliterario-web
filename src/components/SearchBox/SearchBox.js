"use client";

import './SearchBox.css'
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBox() {

  const router = useRouter();
  const searchParams = useSearchParams();

  const q = searchParams.get("q") ?? "";

  function handleSubmit(e) {
    e.preventDefault(); 
    const formData = new FormData(e.currentTarget);
    const query = formData.get("q");

    router.push(`/livros?q=${query}`);
  }

  return (
    <form className="searchBox" onSubmit={handleSubmit}>
      <input
        type="text"
        name="q"
        placeholder="Buscar livros..."
        defaultValue={q}
      />
      <button type="submit">
          <img src='/lupa-pesquisa.png' alt='Imagem de lupa'></img>
      </button>
    </form>
  );
}
