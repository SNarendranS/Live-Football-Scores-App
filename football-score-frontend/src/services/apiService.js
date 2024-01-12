import axios from 'axios'

const putFavTeams=(teams)=>{
    const token=localStorage.getItem('token')
    return axios.post('http://127.0.0.1:8081/favteams',{headers:{'Authorization':'Bearer '+ JSON.parse(token)}},teams)
}

const getFavTeams=()=>{
    const token=localStorage.getItem('token')
    return axios.get('http://127.0.0.1:8081/favteams',{headers:{'Authorization':'Bearer '+ JSON.parse(token)}})
}

const getScores=()=>{
    const token=localStorage.getItem('token')
    return axios.get('http://127.0.0.1:8081/live/scores',{headers:{'Authorization':'Bearer '+ JSON.parse(token)}})
}

const getStandings=(id)=>{
    let lID=id
    const token=localStorage.getItem('token')
     let a=axios.get(`http://127.0.0.1:8081/live/standings/${id}`,{headers:{'Authorization':'Bearer '+ JSON.parse(token)}})
     console.log(a)
     return a
}

const getLeagues=()=>{
    const token=localStorage.getItem('token')
    return axios.get('http://127.0.0.1:8081/live/league',{headers:{'Authorization':'Bearer '+ JSON.parse(token)}})
}

const APIService={
    putFavTeams,getFavTeams,getScores,getStandings,getLeagues
}

export default APIService