import React from 'react'
import Image from 'next/image'
import './Comentario.css'

const Comentario = ({fotoUsuario, nomeUsuario, comentarioUsuario}) => {
  return (
    <div className="comment">

        <div className="secaoFoto">
            <Image 
                src={`${fotoUsuario}`} 
                className="fotoUsuario" 
                alt="Foto do usuário" 
                width={50} 
                height={50}> 
            </Image>
        </div>

        <div className="secaoComentario">
            <p className="nomeUsuario">{nomeUsuario}</p>
            <p className="comentarioFeito">{comentarioUsuario}</p>
        </div>

        <div className="secaoOpcoes">
            <button className="opcoes">
                <Image 
                    src='/tres-pontos.png' 
                    alt='Imagem de três pontos' 
                    width={20} 
                    height={20}>
                </Image>
            </button>
        </div>

    </div>
  )
}

export default Comentario