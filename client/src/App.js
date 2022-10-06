import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios'
import NavBar from './components/NavBar';

function App() {
  useEffect(() => {
    // for demo purposes, hardcoded URL
    axios.get('http://localhost:3000/cats').then(res => {
      console.log(res);
    })
  }, [])

  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
