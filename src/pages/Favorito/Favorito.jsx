import React from 'react'
import './favorito.css'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'

function Favorito(){

    //useState:
    const [filmes, setFilmes] = useState([]) //variável com a lista de filmes salvos

    //useEffect:
    useEffect(()=>{

        const minhaLista = localStorage.getItem('@leo') //pegando a lista no localStorage através da chave. O formato é uma String, sem array
        setFilmes(JSON.parse(minhaLista) || []) //passar minhaLista para array, caso esteja vazia, cria um array vazio

    }, [])

    
    //Funções:
    function excluirFilme(filmeID){
        
        let filtroFilmes = filmes.filter((item)=>{    //Filtra o filme a ser excluido, retirando-o da lista
            return(item.id !== filmeID)
        })

        setFilmes(filtroFilmes) //Resetar os filmes retirando o excluído
        localStorage.setItem('@leo', JSON.stringify(filtroFilmes))  //converte array em string e seta o localstorage
        toast.success("Filme excluído com sucesso")
    }
    
    

    //Componente:
    return(
        <div className='filmes-favoritos'>
            <h1>Minha lista de filmes favoritos</h1>

            <ul>
                {filmes.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                            <button onClick={()=>{excluirFilme(item.id)}}>Excluir</button>
                        </li>
                    )
                })}
            </ul>
        
        </div>
    )
}

export default Favorito;