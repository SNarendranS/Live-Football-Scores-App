import React, { useEffect, useState } from 'react';
import APIService from "../services/apiService";
import { Link,useParams } from 'react-router-dom';
import '../table.css'

function Leagues(){

    let [leagues, setLeagues] = useState([]);
    let [error,setError]=useState('')
    const getLeagues=async ()=>{
      try {
          const response = await APIService.getLeagues();
          console.log(response.data);
          setLeagues(response.data)
        } catch (error) {
          console.log(error);
          setError(error.message)
        }
  }
  useEffect(()=>{
    getLeagues();
  },[])
    return( <>
    {error}

<h2>Leagues</h2>
    <div class="table-wrapper">
      <table class="fl-table">
        <thead>
          <th>League Name</th>
          <th>League Logo</th>
          <th>Country Name</th>
          <th>Country Logo</th>
        </thead>
        <tbody>
          {leagues.map(l=>{return(<tr><td><Link to={`/standings/${l.leagueId}`} key={l.leagueId}>{l.leagueName}</Link></td>
          <td><img width="20" height="20" src={!(l.leagueLogo)!=null?`${l.leagueLogo}`:``} alt=''/></td>
          <td>{l.countryName}</td>
          <td><img width="30" height="20" src={(l.countryLogo)!=null?`${l.countryLogo}`:``} alt=''/></td></tr>)})}
        </tbody>
      </table>
</div>
</>);
  }
export default Leagues


