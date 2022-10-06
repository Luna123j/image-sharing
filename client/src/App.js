import React, { Component } from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios'
import NavBar from './components/NavBar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }
  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in',
      { withCredentials: true })
      .then(response => {
        if (response.data.logged_in) {
          this.handleLogin(response)
        } else {
          this.handleLogout()
        }
      })
      .catch(error => console.log('api errors:', error))
  };

  useEffect(() => {
    // for demo purposes, hardcoded URL
    axios.get('http://localhost:3000/cats').then(res => {
      console.log(res);
    })
  }, [])

  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
          <Switch>
            <Route exact path='/' component={<Home />}/>
            <Route exact path='/login' component={<Login />}/>
            <Route exact path='/signup' component={<Signup />}/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;

