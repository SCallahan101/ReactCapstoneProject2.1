import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Registration from './registrationPage';
import OpenEye from '../SvgIcons/eye-regular.svg';
import CloseEye from '../SvgIcons/eye-slash-regular.svg';

class Login extends Component {
  constructor(){
    super();
    this.state={
      passwordIsMasked: true,
    }
  }
  togglePeek = (e) =>{
    e.preventDefault();
    this.setState(prevState => ({ passwordIsMasked: !prevState.passwordIsMasked}));
};
  render(){
    const {passwordIsMasked} = this.state;
    return(
      <div>
        <form>
          <input className='loginUsername' type='text' placeholder='Enter your username' />
          <input className='loginPw' type={passwordIsMasked ? 'password' : 'text'} placeholder='Enter your password' />
          <button className='togglePeek'onClick={this.togglePeek} ><img src={OpenEye} /></button>
          <br/>
          <Link to={'/MainPage/ShortIntro'}><button className='login-btn login-draw-border'>Enter</button></Link>
        </form>
        <Registration />
      </div>
    );
  }
}

export default Login;
