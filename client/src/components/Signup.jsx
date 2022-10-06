import React, { useState } from 'react';
import axios from 'axios'
const Signup = (props) => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
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
    const { username, email, password, password_confirmation } = userInfo;
    let user = {
      username: username,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }

    axios.post('http://localhost:3001/users', { user }, { withCredentials: true })
      .then(response => {
        if (response.data.status === 'created') {
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
        <ul>{userInfo.errors.map((error) => {
          return <li key={error}>{error}</li>
        })}
        </ul>
      </div>
    )
  };

  return (
    <div>
      <h1>Sign Up</h1>
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
        <input
          placeholder="password confirmation"
          type="password"
          name="password_confirmation"
          value={userInfo.password_confirmation}
          onChange={handleChange}
        />

        <button placeholder="submit" type="submit">
          Sign Up
        </button>

      </form>
    </div>
  );
}

export default Signup;