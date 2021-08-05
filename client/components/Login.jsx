import React, { useRef, useState } from 'react';
import {ThemeContext} from './App.jsx';
import styled from 'styled-components';
import { useAuth } from '../../src/contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom';






const Login = (props) =>{

  //const contextType = React.useContext(ThemeContext);
  const [emailRef, setEmailRef] = useState('');
  const [passwordRef, setPasswordRef] = useState('');
  const { login } = useAuth();


  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleEmail = (e) => {
    setEmailRef(e.target.value);
  }

  const handlePassword = (e) => {
    setPasswordRef(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('')
      setLoading(true)
      await login(emailRef, passwordRef)
      history.push('/')
    } catch {
      setError('Failed to log in');
    }
    // if(currentUser) {
    //   props.callback(currentUser.email)
    // }
    setLoading(false);

  }


  return(
   <>
    <h2>Log In</h2>

    {error && <h6>{error}</h6>}
      <form onSubmit = {handleSubmit}>
        <label htmlFor = 'email'>Email</label>
        <input onChange = {handleEmail} type="text" id="email" name="email" value = {emailRef}></input><br></br>
        <label htmlFor = 'password'>Password</label>
        <input onChange = {handlePassword} type="password" id="password" name="password" value = {passwordRef}></input><br></br>
        <label htmlFor = 'email'>Password Confirmation</label>
        <button disabled = {loading} type = 'submit'>Log In</button>
      </form>
    <div>Need an account? <Link to = 'signup'>Sign Up</Link></div>
   </>
  );
}

// LandingPage.contextType = ThemeContext;
export default Login;