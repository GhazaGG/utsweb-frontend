import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
      if (username === "admin" && password === "admin"){
          setError('')
          navigate('/')
          localStorage.setItem('loggedIn', 'true');
      }else{
          setError("username atau password salah");
      }
  }

  // const handleLogout = () => {
  //     setLoggedIn(false);
  //     setUsername('');
  //     setPassword('');
  // }


  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={handleLogin}>
              <div className="field">
                <label className='label'>Username*</label>
                <div className="control">
                  <input type="text" className='input'
                  value={username} onChange={(e)=> setUsername(e.target.value)} placeholder='Username' />
                </div>
              </div>
              <div className="field">
                <label className='label'>Password*</label>
                <div className="control">
                  <input type="password" className='input'
                  value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Password' />
                </div>
              </div>
              <div className="field">
                <button type='submit' className='button is-success'>Login</button>
              </div>
            </form>
        </div>
    </div>
)
}

export default Login