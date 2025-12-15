import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './CardLivro.css'


const CardLivro = ({id, titulo, urlCapa}) => {
  return (
    <Link href={`/livros/${id}`} className="bookCard">
            <Image 
                src={`${urlCapa}`}
                alt={`Capa do livro ${titulo}`}
                width={110}
                height={170}
            ></Image>
        <p>{`${titulo}`}</p>
    </Link>
  )
}

export default CardLivro