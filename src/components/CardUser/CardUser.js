import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './CardUser.css'


const CardUser = ({id, nome, email, fotoUrl}) => {
  return (
    <Link href={`/usuario/${id}`} className="cardUser">
        <Image src={fotoUrl} alt='Foto de perfil' width={60} height={60}></Image>
        <p><strong>Nome: </strong>{`${nome}`}</p>
        <p>{`${email}`}</p>
    </Link>
  )
}

export default CardUser