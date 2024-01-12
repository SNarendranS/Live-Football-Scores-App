import { useEffect, useState } from "react";
import HomeService from "../services/homeService";
import {useNavigate } from "react-router-dom";
import '../home.css'

function Home() {
  let [news, setNews] = useState([]);
  let [error,setError]=useState();
  const navigate=useNavigate()

  const getScores=async ()=>{
    try {
        const response = await HomeService.news();
        setNews(response.data.articles)
      } catch (error) {
        console.log(error);
        setError(error.message)
      }
    }

    useEffect(() => {
    getScores()
    }, [])

    return(<>
        <h1 class="h1">Live Football Scores</h1><br></br>
        <p class="p">register/login to view live scores and standings</p>
        <button class="button" onClick={()=>navigate('/login')}>get started</button><br></br>
        {error}
        <div class="wrapper">
            {news.map(s=>{return(
                <div class="card">
                    <h4>{s.source.name}</h4>
                    <h2>{s.title}</h2>
                    <h5>{s.publishedAt}</h5>
                    <img src={s.urlToImage} width="90px" height="90px" alt={s.title} /><br />
                    <p>{s.content}</p>
                    <h6>{s.author}</h6>
                </div>
            )})}
        </div>
    </>)
}

export default Home