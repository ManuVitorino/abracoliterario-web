import React from 'react'
import Link from 'next/link'
import './CardUser.css'


const CardUser = ({id, nome, email}) => {
  return (
    <Link href={`/usuario/${id}`} className="cardUser">
        <img src='/foto-padrao.png' alt='Foto de perfil'></img>
        <p><strong>Nome: </strong>{`${nome}`}</p>
        <p>{`${email}`}</p>
    </Link>
  )
}

export default CardUser