"use client";

import './SearchBox.css'
import Image from 'next/image';
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
          <Image src='/lupa-pesquisa.png' alt='Imagem de lupa' height={25} width={25}></Image>
      </button>
    </form>
  );
}
