const axios = require('axios');

const score=async (req, res) => {
    try {
      const response = await axios.get(`${process.env.SCORES_URL}${process.env.API_KEY}`);
      const liveScores = response.data.result;
      const processedScores = liveScores.map(score => ({
        countryName: score.country_name,
        leagueName: score.league_name,
        homeTeam: score.event_home_team,
        awayTeam: score.event_away_team,
        time:score.event_time,
        halftimeResult: score.event_halftime_result,
        finalResult: score.event_final_result,
        date:score.event_date,
        stadium:score.event_stadium,
        leagueLogo:score.league_logo,
        countryLogo:score.country_logo,
        homeLogo:score.home_team_logo,
        awayLogo:score.away_team_logo,
        goalScorers:score.goalscorers
      }));
      res.json(processedScores);
    } catch (error) {
      console.error('Error fetching live scores:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

const standings=async (req, res) => {
  try {
    leagueId=req.params.id
    const response = await axios.get(`${process.env.STANDINGS_URL}&leagueId=${leagueId}&APIkey=${process.env.API_KEY}`);
    const liveStandings = response.data.result;
    const processedStandings = liveStandings.total.map(team => ({
      position: team.standing_place,
      teamName: team.standing_team,
      played:team.standing_P,
      won:team.standing_W,
      draw:team.standing_D,
      lost:team.standing_L,
      goalsFor:team.standing_F,
      goalsAgainst:team.standing_A,
      goalDiff:team.standing_GD,
      points:team.standing_PTS,
      logo:team.team_logo
    }));
    res.json(processedStandings);
  } catch (error) {
    console.error('Error fetching live standings:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
} 

const allLeagues=async (req, res) => {
  try {
    const response = await axios.get(`${process.env.LEAGUES_URL}&APIkey=${process.env.API_KEY}`);
    const leagues = response.data.result;
    const processedLeague = leagues.map(league => ({
      leagueId:league.league_key,
      leagueName:league.league_name,
      countryId:league.country_key,
      countryName:league.country_name,
      leagueLogo:league.league_logo,
      countryLogo:league.country_logo
    }));
    const sortedLeagues = processedLeague.sort((l1, l2) => l1.countryName.localeCompare(l2.countryName));
    res.json(sortedLeagues);
  } catch (error) {
    console.error('Error fetching leagues :', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


const getTeams=async (req, res) => {  
  try {
    const id=req.params.id
    const response = await axios.get(`${process.env.TEAMS_URL}&teamId=${id}&APIkey=${process.env.API_KEY}`);
    const teams = response.data.result;
    const processedTeam = teams.map(team => ({
      teamId:team.team_key,
      teamName:team.team_name,
      players:team.players,
      teamLogo:team.team_logo_logo,
      coaches:team.coaches

    }));
    const sortedTeam = processedTeam.sort((l1, l2) => l1.teamName.localeCompare(l2.teamName));
    res.json(sortedTeam);
  } catch (error) {
    console.error('Error fetching Teams :', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


module.exports={score,standings,allLeagues,getTeams}