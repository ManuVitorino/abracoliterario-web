import React from 'react'
import Link from 'next/link'
import './CardUser.css'


const CardUser = ({id, nome, email}) => {
  return (
    <Link href={`/usuario/${id}`} className="cardUser">
        <p>{`Nome: ${nome}`}</p>
        <p>{`Email: ${email}`}</p>
    </Link>
  )
}

export default CardUser