import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })

  const handleInputChange = (e) => {
    setUserData(prevState => {
      return {...prevState, [e.target.name]: e.target.value}
    }
  )}

  return (
    <section className="login">
      <div className="container">
        <h2>Sign In</h2>
        <form className="form login__form">
          <p className="form__error-message">This is an error message</p>
          <input 
            type="text" 
            placeholder='Email'
            name='email'
            value={userData.email}
            onChange={handleInputChange}
            autoFocus
            // autoFocus is used to focus on the input field as soon as the page loads
          />

          <input 
            type="password" 
            placeholder='Password'
            name='password'
            value={userData.password}
            onChange={handleInputChange}
          />

          <button type='submit' className="btn primary">Login</button>
        </form>
        <small>Don't have an Account? <Link to="/register">Sign Up</Link></small>
      </div>
    </section>
  )
}

export default Login