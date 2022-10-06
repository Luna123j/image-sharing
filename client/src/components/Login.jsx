import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
const Login = (props) => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    password: '',
    errors: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    userInfo = setUserInfo({
      [name]: value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    const { username, email, password } = userInfo;
    const user = {
      username: username,
      email: email,
      password: password
    }

    axios.post('http://localhost:3001/login', { user }, { withCredentials: true })
      .then(response => {
        if (response.data.logged_in) {
          props.handleLogin(response.data)
          redirect()
        } else {
          userInfo = setUserInfo({
            errors: response.data.errors
          })
        }
      })
      .catch(error => console.log('api errors:', error))
  };

  const redirect = () => {
    props.history.push('/')
  }

  const handleErrors = () => {
    return (
      <div>
        <ul>
          {userInfo.errors.map(error => {
            return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    )
  };
  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          type="text"
          name="username"
          value={userInfo.username}
          onChange={handleChange}
        />
        <input
          placeholder="email"
          type="text"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          value={userInfo.password}
          onChange={handleChange}
        />
        <button placeholder="submit" type="submit">
          Log In
        </button>
        <div>
          or <Link to='/signup'>sign up</Link>
        </div>

      </form>
    </div>
  );

}
export default Login;