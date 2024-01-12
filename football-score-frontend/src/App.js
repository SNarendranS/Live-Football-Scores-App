import React, {  useState } from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar  from './components/navbar';
import Login from './authentication/login';
import Scores from './components/scores';
import Logout from './authentication/logout';
import Standings from './components/standings';
import Leagues from './components/leagues';
import Register from './authentication/register';
import FavTeams from './components/favTeams';
import Home from './components/Home';




function App() {
  let [username,setUsername]=useState('')
  return (
    <BrowserRouter>
      <Navbar username={username}/>
        <hr/>
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login setUsername={setUsername}/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/favteams" element={<FavTeams/>} />
          <Route path="/scores" element={<Scores/>} />
          <Route path="/standings/:id" element={<Standings/>} />
          <Route path="/leagues/"element={<Leagues/>} />
          <Route path="/logout" element={<Logout setUsername={setUsername}/>}></Route>
        </Routes>
        <hr/>
    </BrowserRouter>

  );
}

export default App;
