import React from 'react'
import './Livro.css'

const Livro = ({imagemLivro, nomeLivro }) => {
  return (
    <div className="bookFiles">

        <div className="secao1">
            <img src={`${imagemLivro}`} alt={`Capa do livro ${nomeLivro}`} className="imgBooks"></img>
                  
            <div className="infoBook">{nomeLivro}</div>
        </div> 

        {/*Download do PDF do livro - Finalizar*/}
        <input 
            type="file"
            id="pdfInput"
            accept="pdf"
            className="hiddenPDF"
        ></input>

        <label htmlFor="pdfInput" className="pdfButton"> Livro em PDF 🔗</label>

    </div>
  )
}

export default Livro