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
      username: '',
      password: ''
    }
  }
  togglePeek = (e) =>{
    e.preventDefault();
    this.setState(prevState => ({ passwordIsMasked: !prevState.passwordIsMasked}));
};
handleSubmit = e => {
  e.preventDefault();
  console.log(`${this.state.username} / ${this.state.password}`);
    fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({username: this.state.username, password: this.state.password}),
  });
  // console.log(`${this.state.loginUsername} + ' ' + ${this.state.loginPw}`);
};
  render(){
    const {passwordIsMasked} = this.state;
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input className='loginUsername' type='text' placeholder='Enter your username' value={this.state.username} onChange={e => this.setState({username: e.target.value})}/>
          <input className='loginPw' type={passwordIsMasked ? 'password' : 'text'} placeholder='Enter your password' value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>
          <button className='togglePeek'onClick={this.togglePeek} ><img src={OpenEye} /></button>
          <br/>
          <input type='submit' />
        </form>
        <Registration />
      </div>
    );
  }
}

export default Login;
