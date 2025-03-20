import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Signup from './Pages/SignUp/Signup'
import Login from './Pages/Login/Login'
import Admin from './Pages/Admin/Admin';
import Dashboard from './Pages/Dashboard/Dashboard';
import Events from './Pages/Events/Events';
import Leaderboard from './Pages/Leaderboard/Leaderboard';
import Members from './Pages/Members/Members';
import Clubs from './Pages/Clubs/Clubs';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/events" element={<Events />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/members" element={<Members />} />
      <Route path="/clubs" element={<Clubs />} />
    </Routes>
  )
}

export default App
