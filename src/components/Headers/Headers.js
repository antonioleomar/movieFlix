import React from 'react'
import { Link } from 'react-router-dom'
import './headers.css'


function Headers(){

    return(
        <header className="headers">
            <Link className="name" to="/">MovieFLIX</Link>
            <Link className="home"  to="/">Página Inicial</Link>
            <Link className="filme"  to="/favorito">Favoritos</Link>           
        </header>
    )
}

export default Headers