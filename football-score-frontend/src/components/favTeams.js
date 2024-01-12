import { useEffect, useState } from "react";
import APIService from "../services/apiService";

function FavTeams() {
  let [teams, setTeams] = useState([]);
  let [error,setError]=useState('')
  const getFavTeams=async ()=>{
    try {
        const response = await APIService.getFavTeams();
        console.log(response.data);
        setTeams(response.data)
      } catch (error) {
        console.log(error);
        setError(error.message)
      }
}
useEffect(()=>{
    getFavTeams();
},[])
  return( <>
  {error}
<center>
  {teams.map(team=>{return(<><b color="white" style={{border:"solid"}}>{`${team.teams}`}</b><br/><br></br></>)})}
  </center></>);
}
export default FavTeams;
//hello