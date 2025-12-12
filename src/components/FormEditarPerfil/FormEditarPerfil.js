"use client"

import React from 'react'
import './FormEditarPerfil.css'
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const FormEditarPerfil = ({usuario, userId}) => {

    const router = useRouter();
    const { update } = useSession();

    const [nome, setNome] = useState(usuario.nome);     
    const [foto, setFoto] = useState(usuario.foto_url);         
    const [arquivoFoto, setArquivoFoto] = useState(null);

    const handleFotoUpload = (event) => {
        const file = event.target.files[0];
    
        if (file) {
            setArquivoFoto(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setFoto(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("nome", nome);
        formData.append("foto", arquivoFoto);

        if (arquivoFoto) {
            formData.append("foto", arquivoFoto);
        }

        const res = await fetch(`/api/usuario/${userId}`, {
            method: "PUT",
            body: formData,
        });

        const data = await res.json();
        
        if(res.ok) {
            alert("Perfil atualizado!")
            await update();
            router.refresh()
        } else {
            alert("Erro ao atualizar perfil!")
            console.error(data.error || "Erro desconhecido");
        }

        
    };


    return (
        <form className="formContainer" onSubmit={handleSubmit}>
        
        <label htmlFor="fotoUpload" className="fotoUpload">
          <input 
            type="file"
            id="fotoUpload"
            accept="image/*"
            className="inputHidden"
            onChange={handleFotoUpload}
          />

          {!foto || foto && <span className="plusSign">+</span>}
          {foto && <img src={foto} alt="Preview" className="previewImg" />}
        </label>

        <input 
          className="inputTexto"
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <button className="salvarBtn" type="submit">Salvar alterações</button>

      </form>
    )
}

export default FormEditarPerfil