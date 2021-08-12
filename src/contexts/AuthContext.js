import React, { useEffect, useContext, useState  } from 'react'
import { auth } from '../firebase'
import axios from 'axios';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  async function signup(email, password) {
    try {
      const response = await axios.post('/account', {
        email: email,
        password: password
      })
      console.log(response);
    } catch(error) {
      console.log(error);
    }

    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut();
  }


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
      // return function cleanup(){
      //   setLoading(true);
      // }


    })
    return unsubscribe;
  }, [])


  const value = {
    currentUser,
    signup,
    login,
    logout
  }


  return (
    <AuthContext.Provider value = {value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}