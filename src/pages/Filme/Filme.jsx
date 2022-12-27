import React from 'react'
import { useState, useEffect } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import '../../services/api'
import api from '../../services/api'
import './filme.css'

import { toast } from 'react-toastify'

function Filme(){

    //useParams
    const {id} = useParams()

    //useState
    const [filme, setFilme] = useState({})
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    //useEffect
    useEffect(()=>{
        async function loadFilme(){
            await api
            .get(`/movie/${id}`,{
                params:{
                    api_key:'c4d22fbd88fe8bd834846ffca85f64c2',
                    language: 'pt-BR',
                }
            })
            .then((response)=>{
                setFilme(response.data) //dados do objeto da api
                setLoading(false)
            })
            .catch(()=>{
               navigate("/")
            })
        }

        loadFilme()

    }, [])


    if(loading === true){
        return(
            <div className='carregando'>
                <h2>Carregando detalhes...</h2>
                <div className='new-load'></div>
            </div>
        )
    }

    //Funções
    function salvarFilme(){
        const minhaLista = localStorage.getItem("@leo") //código do localStorage

        let filmesSalvos = JSON.parse(minhaLista) || [] // verifica se tem algo no localStore, caso não cria array vazio

        const hasFilme = filmesSalvos.some((filmeSalvo)=> filmeSalvo.id === filme.id) // Verifica se o filme salvo já existe no localStorage

        if(hasFilme === true){           
            toast.warn("Esse filme já existe na lista!")            
        }
        else{
            filmesSalvos.push(filme)
            localStorage.setItem('@leo', JSON.stringify(filmesSalvos))           
            toast.success("Filme salvo com sucesso!")
        }
    }


    return(
        <div className='detalhes-filme'>
            <h1>{filme.title}</h1>
            <h2>Filme com id = {id}</h2>            
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <h3>Avaliação</h3>
            <span>{filme.vote_average}</span>
            <div className='area-buttons'>
                <button onClick={salvarFilme}>Salvar</button>
                <button>                    
                    <a target='blank' href={`https://www.youtube.com/results?search_query=${filme.title} trailer`}>Trailer</a>
                </button>
            </div>
          
        </div>
    )
}
export default Filme;