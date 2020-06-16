import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import Registration from './registrationPage';
import OpenEye from '../SvgIcons/eye-regular.svg';
import CloseEye from '../SvgIcons/eye-slash-regular.svg';
import swal from 'sweetalert';

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
componentDidMount(){
  swal({
  title: "Hello Writer!",
  text: "This site is for writers who having those pesky thought blocks. The solution would be providing you with several subconscious stimulations while creating your story.",
  icon: "info",
   button: "Next",
})
.then(() => {
    swal({
      title: "Materials",
      text: "The site will be providing you with color psychology, theme word triggers, background pictures for your chapter setting, and visual cue of your story progress.",
      icon: "info",
       button: "I am ready to start!",
    })
  });
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
  }).then(() => {
    this.props.history.push('/MainPage/ShortIntro');
  }).catch((err) => {
      console.log(err);
      swal("Login Failed", "Please check your Username and/or Password again", "error");
  });
};
  render(){
    const {passwordIsMasked} = this.state;
    return(
      <div>
        <div>
          <p>Demo Account:</p>
          <span>Username: TestUser01 | Password: TestUser01</span>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="loginUsername" hidden>Type your Username:</label>
          <input className='loginUsername' type='text'  aria-label="enter-your-existed-username" aria-required="true" placeholder='Enter your username' value={this.state.username} onChange={e => this.setState({username: e.target.value})}/>
          <div className='passwordContainer'>
            <label htmlFor="loginPw" hidden>Type your Password:</label>
            <input className='loginPw' type={passwordIsMasked ? 'password' : 'text'}  aria-label="enter-your-existed-password" aria-required="true" placeholder='Enter your password' value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>
            <span className='togglePeek'onClick={this.togglePeek} ><img src={OpenEye} alt="toggle-eye"/></span>
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
