import React from 'react'
import Link from 'next/link'
import './CardLivro.css'


const CardLivro = ({id, titulo, urlCapa}) => {
  return (
    <Link href={`/livros/${id}`} className="bookCard">
            <img src={`${urlCapa}`}
                alt={`Capa do livro ${titulo}`}>  
            </img>
        <p>{`${titulo}`}</p>
    </Link>
  )
}

export default CardLivro