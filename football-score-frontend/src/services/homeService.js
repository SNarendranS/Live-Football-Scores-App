import axios from 'axios'


const news=()=>{

    return axios.get('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=d28d69c3e32e479f93ccce8b894c0f08')
}

const HomeService={
    news
}

export default HomeService