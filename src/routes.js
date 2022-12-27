import {BrowserRouter, Routes, Route } from 'react-router-dom'

import Filme from './pages/Filme/Filme'
import Home from '../src/pages/Home/Home'
import Headers from './components/Headers/Headers'
import Erro from './pages/Erro/Erro'
import Favorito from './pages/Favorito/Favorito'


function RoutesApp(){

    return(

        <BrowserRouter>

            <Headers/>

            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/home' element={ <Home/> }/>
                <Route path='/filme' element={ <Filme/> }/>
                <Route path='/favorito' element={ <Favorito/>}/>
                <Route path='/filme/:id' element={<Filme/>}/>
                <Route path='*' element={<Erro/>}/>
            </Routes>
        
        </BrowserRouter>
    )
}
export default RoutesApp;