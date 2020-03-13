import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {FormErrors} from './formErrors';
// import MainPage from '../mainPage/mainPage';

class Registration extends Component {
  constructor(){
    super();
    this.state={
      open: false,
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      formErrors:{username: '', password: '', email: ''},
      usernameValid: false,
      passwordValid: false,
      emailValid: false
    }
    this.togglePanel =  this.togglePanel.bind(this);
  }
  togglePanel(e){
    this.setState({open: !this.state.open})
  }
//   handleChange = e => {
//   this.setState({
//     [e.target.name]: e.target.value
//   });
// }
handleChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  this.setState({[name]: value},
  () => {this.validateField(name, value) });
}
validateField(fieldName, value){
  let fieldValidationErrors = this.state.formErrors;
  let usernameValid = this.state.usernameValid;
  let passwordValid = this.state.passwordValid;
  let emailValid = this.state.emailValid;

  switch(fieldName){
    case 'username':
    usernameValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    usernameValid = value.length > 8;
    fieldValidationErrors.email = usernameValid ? '' : ' is invalid';
    break;
    case 'password':
    passwordValid = value.length > 8;
    fieldValidationErrors.password = passwordValid ? '' : ' is too short';
    break;
    case 'email':
    emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    fieldValidationErrors.email = emailValid ? '' : ' is invalid';
    break;
    default:
    break;
  }
  this.setState({formErrors: fieldValidationErrors,
                 emailValid: emailValid,
                 passwordValid: passwordValid
               }, this.validateForm);
}
validateForm(){
  this.setState({formValid: this.state.emailValid && this.state.passwordValid});
}
errorClass(error){
  return(error.length === 0 ? '' : 'has error');
}
handleSubmit = async e =>{
  e.preventDefault();
  const response = await fetch('/api/storytellers/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({username: this.state.username, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email}),
  });
  this.setState({
    open: false,
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: ''
  });
};
  render(){
    return(
      <div className='registrationBoard'>
        <button className='registration-btn reg-draw-border' onClick={(e) => this.togglePanel(e)}>New Storyteller</button>
        <br />
        {this.state.open ? (
          <form className='registrationForm' onSubmit={this.handleSubmit}>
            <input className='username reg-box' type='text' placeholder='Create your username' name='username' value={this.state.username} onChange={e => this.setState({username: e.target.value})}/>
            <br />
            <div className={`${this.errorClass(this.state.formErrors.password)}`}></div>
            <input className='password reg-box' type='text' placeholder='Create your password' name='password' value={this.state.password} onChange={this.handleChange} />
            <br />
            <input className='firstName reg-box' type='text' placeholder='Your first name?' name='firstName' value={this.state.firstName} onChange={e => this.setState({firstName: e.target.value})}/>
            <br />
            <input className='lastName reg-box' type='text' placeholder='Your last name?' name='lastName' value={this.state.lastName} onChange={e => this.setState({lastName: e.target.value})}/>
            <br />
            <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`} >
            <input className='email reg-box' type='email' placeholder='Your Email?' name='email' value={this.state.email} onChange={this.handleChange} />
            </div>
            <br />
            <button type='submit' className='register-btn reg-draw-border' disabled={!this.state.formValid}>Register</button>
            <FormErrors formErrors={this.state.formErrors} />
          </form>
        ): null}
      </div>
    );
  }
}

        // <Link to={'/'}><button className='login-btn login-draw-border'>Back to Login</button></Link>

export default Registration;
