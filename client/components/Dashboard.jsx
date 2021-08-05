import React, { useRef, useState } from 'react';
import { useAuth } from '../../src/contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom';



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
    <h2>Profile</h2>
    {error && <h6>{error}</h6>}<br></br>
    <strong>Email:</strong> {currentUser.email} <br></br>
    <Link to = 'update-profile' >Update Profile</Link><br></br>
    <button onClick = {handleLogout}>Log Out</button>
    </>
  )


}



export default Dashboard;