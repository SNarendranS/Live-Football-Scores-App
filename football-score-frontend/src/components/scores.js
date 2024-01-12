import { useEffect, useState } from "react";
import APIService from "../services/apiService";
import '../score.css'

function Scores() {
  let [score, setScore] = useState([]);
  let [error,setError]=useState();

  const getScores=async ()=>{
    try {
        const response = await APIService.getScores();
        setScore(response.data)
      } catch (error) {
        console.log(error);
        setError(error.message)
      }
}

useEffect(() => {
  getScores()
  const intervalId = setInterval(() => {
    getScores()
  }, 60000)

  return () => clearInterval(intervalId);
}, [])

return (
  <center>
    {score.map((s) => {
      return (
        <div className="containerScorer match" key={s.id}>
          <div className="match-details">
            <p className="score-info">
              {s.leagueName}
              <img src={s.leagueLogo} width="20" height="20" /> - {s.countryName}
              <img src={s.countryLogo} width="20" height="20" />
            </p>
            <p className="stadium-info">
              {`${s.stadium}` == null || `${s.stadium}` == undefined || `${!s.stadium}`
                ? 'No stadium info'
                : `${s.stadium}`}
            </p>
            <p className="date-time-info">
              {s.date} {s.time}
            </p>
            <p className="team-info">{s.homeTeam}
              <img src={s.homeLogo} width="20" height="20" />
            </p>
            <p className="result-info">{s.finalResult}</p>
            <p className="team-info">
              {s.awayTeam}
              <img src={s.awayLogo} width="20" height="20" />
            </p>
          </div>
        </div>
      );
    })}
  </center>
);
}
export default Scores;




