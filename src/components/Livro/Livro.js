import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './Livro.css'

const Livro = ({idLivro, imagemLivro, nomeLivro, descricaoLivro }) => {
  return (
    <div className="bookFiles">

        <div className="secao1">
            <Image src={`${imagemLivro}`} alt={`Capa do livro ${nomeLivro}`} className="imgBooks" height={250} width={170}></Image>
                  
            <div className="infoBook">{nomeLivro}</div>
        </div> 

        {/*Download do PDF do livro - Finalizar*/}
        <input 
            type="file"
            id="pdfInput"
            accept="pdf"
            className="hiddenPDF"
        ></input>

        <p className='descriptionBook'>
            {descricaoLivro}
        </p>

        <label htmlFor="pdfInput" className="pdfButton"> Livro em PDF 🔗</label>
    
    </div>
  )
}

export default Livro