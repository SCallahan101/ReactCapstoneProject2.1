import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Registration from './registrationPage';

class Login extends Component {
  //login menu
  //meet authorization by 64 bits
  //transfer
  render(){
    return(
      <div>
        <form>
          <input className='loginBox' type='text' placeholder='Enter your username' />
          <br/>
          <Link to={'/MainPage/ShortIntro'}><button className='login-btn login-draw-border'>Enter</button></Link>
        </form>
        <Registration />
      </div>
    );
  }
}

export default Login;
