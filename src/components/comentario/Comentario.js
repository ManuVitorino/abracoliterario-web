import React from 'react'
import './Comentario.css'

const Comentario = ({fotoUsuario, nomeUsuario, comentarioUsuario}) => {
  return (
    <div className="comment">

        <div className="secaoFoto">
            <img src={`${fotoUsuario}`} className="fotoUsuario"></img>
        </div>

        <div className="secaoComentario">
            <p className="nomeUsuario">{nomeUsuario}</p>
            <p className="comentarioFeito">{comentarioUsuario}</p>
        </div>

        <div className="secaoOpcoes">
            <button className="opcoes">:</button>
        </div>

    </div>
  )
}

export default Comentario