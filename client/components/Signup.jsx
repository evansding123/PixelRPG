import React, { useRef, useState } from 'react';

import styled from 'styled-components';
import { useAuth } from '../../src/contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom';
import { Container, Form, Header, InfoButton, Error } from '../styles/styles.jsx';







const Signup = (props) =>{

  //const contextType = React.useContext(ThemeContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const {signup, currentUser} = useAuth();
  const history = useHistory();


  async function handleSubmit(e) {
    e.preventDefault();
    if(passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }
    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push('/')
    } catch {
      setError('Failed to create an account');
    }
    // if(currentUser) {
    //   props.callback(currentUser.email)
    // }
    setLoading(false);

  }


  return(
   <>
    <Header>Sign Up</Header>
    {error && <Error>{error}</Error>}

        <Form onSubmit = {handleSubmit}>
          <label htmlFor = 'email'>Email</label>
          <input type="text" id="email" name="email" ref = {emailRef}></input><br></br>
          <label htmlFor = 'password'>Password</label>
          <input type="password" id="password" name="password" ref = {passwordRef}></input><br></br>
          <label htmlFor = 'email'>Password Confirmation</label>
          <input type="password" id="password-confirm" name="password-confirm" ref = {passwordConfirmRef}></input><br></br>
          <InfoButton disabled = {loading} type = 'submit'>Sign Up</InfoButton><br></br>
          <div>Already have an account? <Link to = 'login'>Log In</Link></div>
        </Form>


   </>
  );
}

// LandingPage.contextType = ThemeContext;
export default Signup;