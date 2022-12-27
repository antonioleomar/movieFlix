import axios from 'axios'
//BASE DA URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=c4d22fbd88fe8bd834846ffca85f64c2


const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
})
export default api