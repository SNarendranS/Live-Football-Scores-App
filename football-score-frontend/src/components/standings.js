import React, { useEffect, useState } from 'react';
import APIService from "../services/apiService";
import { Link,useParams } from 'react-router-dom';
import '../table.css'


function Standings(){
  const { id } = useParams()  ;
    let [standings, setStandings] = useState([]);
    let [error,setError]=useState('')
    
    const getStandings=async (id)=>{
      try {
          const response = await APIService.getStandings(id);
          console.log(response.data);
          setStandings(response.data)

        } catch (error) {
          console.log(error);
          setError(error.message)
        }
  }
  useEffect(()=>{
    getStandings(id);
  },[])
    return( <>
    {error}
    <b><Link to="/leagues" className='nav-link'>back to Leagues</Link></b>


    <h2>Standings</h2>
    <div class="table-wrapper">
      <table class="fl-table">
      <thead>
        <tr>
            <th>Position</th>
            <th>Team</th>
            <th>Played</th>
            <th>Won</th>
            <th>Draw</th>
            <th>Lost</th>
            <th>GD</th>
            <th>Points</th>
        </tr>
        </thead>
        <tbody>
        {standings.map(s=>{return(<tr>
    <td>{s.position}</td>
    <td>{s.teamName}  <img width="20" height="20" src={!(s.logo)!=null?`${s.logo}`:``} alt=''/></td>
    <td>{s.played}</td>
    <td>{s.won}</td>
    <td>{s.draw}</td>
    <td>{s.lost}</td>
    <td>{s.goalDiff}</td>
    <td>{s.points}</td>
      </tr>)})}
        </tbody>
      </table>
    </div>

    </>);

  }
export default Standings