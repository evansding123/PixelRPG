import React, { useRef, useState } from 'react';
import { useAuth } from '../../src/contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom';
import { Container, Form, Header, InfoButton, Error } from '../styles/styles.jsx';




const Dashboard = (props) => {

  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();


  const handleLogout = async () => {
    setError('');
    try {
      await logout()
      history.push('/login')
    } catch {
      setError('Failed to log out');
    }
  }

  return(
    <>
    <Header>Profile</Header>
    {error && <Error>{error}</Error>}<br></br>
    <strong>Email:</strong> {currentUser.email} <br></br>
    <Link to = 'update-profile' >Update Profile</Link><br></br>
    <InfoButton onClick = {handleLogout}>Log Out</InfoButton>
    </>
  )


}



export default Dashboard;