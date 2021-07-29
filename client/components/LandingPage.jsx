import React from 'react';
import {ThemeContext} from './App.jsx';


const LandingPage = (props) =>{

  const contextType = React.useContext(ThemeContext);


  return(
   <div>{contextType}</div>
  );
}

// LandingPage.contextType = ThemeContext;
export default LandingPage;