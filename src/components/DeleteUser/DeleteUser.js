"use client";
import './DeleteUser.css'

export const DeleteUser = ({ userId }) => {

  const handleDelete = async () => {
    if (!confirm("Deseja realmente excluir este usuário?")) return;

    try {
      await fetch(`/api/usuario/${userId}`, { method: "DELETE" });
      window.location.href = "/usuario";
    } catch (err) {
      console.error(err);
      alert("Erro ao deletar usuário");
    }
  };

  return (

    <button onClick={handleDelete} className="excluirUser">
      Excluir Usuário
    </button>

  );
};
