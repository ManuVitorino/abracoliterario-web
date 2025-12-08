"use client"

import { signOut } from 'next-auth/react';
import "./LogOut.css"; 

export default function LogoutButton() {

    const fazerLogout = () => {
        signOut({ callbackUrl: '/' }); 
    };

    return (
        <button onClick={fazerLogout} className="logout">
            Terminar Sessão
        </button>
    );
}