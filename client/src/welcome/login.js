import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import MainPage from '../mainPage/mainPage';

class Login extends Component {
  //login menu
  //meet authorization by 64 bits
  //transfer
  render(){
    return(
      <div>
        <Link to={'/MainPage/ShortIntro'}><button className='login-btn login-draw-border'>Enter</button></Link>
      </div>
    );
  }
}

export default Login;
