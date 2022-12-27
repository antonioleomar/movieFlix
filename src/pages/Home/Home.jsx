import React from 'react'
import {useState, useEffect} from 'react'
import api from '../../services/api'
import {Link} from 'react-router-dom'
import './home.css'


function Home(){

    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true) //"carregando..."

    useEffect(()=>{
        async function loadFilme(){ //async = espera por algo
            const response = await api.get('/movie/now_playing', {  //await
                params:{
                  api_key:'c4d22fbd88fe8bd834846ffca85f64c2',
                  language: 'pt-BR',
                  page:1
                }
            })
           setFilmes(response.data.results.slice(0,10)) //só listar 10 filmes
           setLoading(false)
        }

        loadFilme()

    }, [])

    if(loading === true){
        return(
            <div className='loading'>
                <h2>Carregando...</h2>
            </div>
        )
    }


    return(       
        <div className='lista-filmes'>
            {filmes.map((filme)=>{
                return(

                    <article key={filme.id}>

                        <strong>{filme.title}</strong>
                        <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                        <Link to={`/filme/${filme.id}`}>Acessar</Link>

                    </article>
                )
            }                
            )}
        </div>       
    )
}
export default Home