import React from 'react';
import Login from './login';
import './welcome.css';
// import SignUp from './newUsers/newUsers';

export default function Welcome(props) {
  return(
    // add login and new users buttons
    <div className='welcomeBox'>
      <h1>Welcome to Sci-Fi Writing Draftboard!</h1>
      <Login />
    </div>
  )
}


//<SignUp /> save it for later after clear up.
