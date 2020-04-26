import React from 'react';
import Login from './login';
import './welcome.css';

export default function Welcome(props) {
  return(
    <div className='introContainer'>
    <div className='welcomeBox'>
      <h1 className='welcomeTitle'>Welcome to Sci-Fi Writing Draftboard!</h1>
      <Login />
    </div>
    </div>
  )
}


//<SignUp /> save it for later after clear up.
