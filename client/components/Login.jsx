import React, { useRef, useState } from 'react';
import {ThemeContext} from './App.jsx';
import styled from 'styled-components';
import { useAuth } from '../../src/contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom';
import { Container, Form, Header, InfoButton, Error } from '../styles/styles.jsx';







const Login = (props) =>{

  //const contextType = React.useContext(ThemeContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();


  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();



  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push('/')
    } catch {
      setError('Failed to log in');
    }
    // if(currentUser) {
    //   props.callback(currentUser.email)
    // }

    //setLoading(false);

  }


  return(
   <>
    <Header>Log In</Header>
    {error && <Error>{error}</Error>}
      <Form onSubmit = {handleSubmit}>
        <label htmlFor = 'email'>Email</label>
        <input type="text" id="email" name="email" ref = {emailRef}></input><br></br>
        <label htmlFor = 'password'>Password</label>
        <input type="password" id="password" name="password" ref = {passwordRef}></input><br></br>
        <InfoButton disabled = {loading} type = 'submit'>Log In</InfoButton><br></br>
        <div>Need an account? <Link to = 'signup'>Sign Up</Link></div>
      </Form>

   </>
  );
}

// LandingPage.contextType = ThemeContext;
export default Login;