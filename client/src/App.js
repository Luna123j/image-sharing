import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';

function App() {
  const [userStatus, setUserStatus] = useState({
    isLoggedIn: false,
    user: {}
  })

  const handleLogin = (data) => {
    userStatus = setUserStatus({
      isLoggedIn: true,
      user: data.user
    })
  }

  const handleLogout = () => {
    userStatus = setUserStatus({
      isLoggedIn: false,
      user: {}
    })
  }

  const loginStatus = () => {
    axios.get('http://localhost:3001/logged_in',
      { withCredentials: true })
      .then(response => {
        if (response.data.logged_in) {
          handleLogin(response)
        } else {
          handleLogout()
        }
      })
      .catch(error => console.log('api errors:', error))
  };


  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/login' element={<Login handleLogin={handleLogin} />} />
          <Route path='/signup' element={<Signup handleLogin={handleLogin} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

