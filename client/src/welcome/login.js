import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
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
handleSubmit = async e => {
  e.preventDefault();
  console.log(`From the form before FETCH: ${this.state.username} / ${this.state.password}`);
    const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({username: this.state.username, password: this.state.password})
  }).then((response) => {
    return response.json();
  }).then((loggedInData) => {
    const authorID = JSON.stringify(loggedInData.userID);
    const token = JSON.stringify(loggedInData.authToken);
    console.log('Post-log test:' + authorID + ' ' + token);
    localStorage.setItem('author', authorID);
    localStorage.setItem('userToken', token);
    // this.props.history.push('/MainPage/ShortIntro');
  }).then(() => {
    this.props.history.push('/MainPage/ShortIntro');
  }).catch((err) => {
      console.log(err);
  });

  // response.then(res => {
  //   if(response.ok){
  //     return res.json();
  //   }
  //   return res.json().then(err => {
  //     Promise.reject(err);
  //   })
  // })
  // .then(token => {
  //   localStorage.setItem('userToken', token);
  //   this.props.history.push('/MainPage/ShortIntro')
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
  // console.log(`${this.state.loginUsername} + ' ' + ${this.state.loginPw}`);
};
  render(){
    const {passwordIsMasked} = this.state;
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input className='loginUsername' type='text' placeholder='Enter your username' value={this.state.username} onChange={e => this.setState({username: e.target.value})}/>
          <div className='passwordContainer'>
          <input className='loginPw' type={passwordIsMasked ? 'password' : 'text'} placeholder='Enter your password' value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>
          <span className='togglePeek'onClick={this.togglePeek} ><img src={OpenEye} /></span>
          </div>
          <br/>
          <button type='submit' className='login-btn login-draw-border'>Login</button>
        </form>
        <Registration />
      </div>
    );
  }
}

export default withRouter(Login);
