import React from 'react';
import Login from './login';
import './welcome.css';

export default function Welcome(props) {
  return(
    <div className='welcomeBox'>
      <h1>Welcome to Sci-Fi Writing Draftboard!</h1>
      <Login />
    </div>
  )
}


//<SignUp /> save it for later after clear up.
