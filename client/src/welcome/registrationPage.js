import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {FormErrors} from './formErrors';
import { v4 as uuidv4 } from 'uuid';
import swal from 'sweetalert';
import OpenEye from '../SvgIcons/eye-regular.svg';

class Registration extends Component {
  constructor(){
    super();
    this.state={
      passwordIsMasked: true,
      open: false,
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      userId: "",
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
  togglePeek = (e) =>{
    e.preventDefault();
    this.setState(prevState => ({ passwordIsMasked: !prevState.passwordIsMasked}));
};
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
    fieldValidationErrors.password = passwordValid ? '' : ' need 9 characters or more';
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
  const NewUserID = uuidv4();
  const response = await fetch('/api/storytellers/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({username: this.state.username, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, userId: NewUserID}),
  })
  .then(async response => {
    const data = await response.json();
    if(!response.ok){
      const error = (data && data.message) || response.status;
      return Promise.reject(error);
    } else {
      swal("Congratulations!", "Your account registration has successfully submitted!", "success");
    }
    this.setState({
      open: false,
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      userId: ''
    });
  })
  .catch(error =>{
    console.error('THere was an error!', error);
    // alert(error);
    swal("Issue occurred!", "Error: " + error, "error");
  });
};
  render(){
    const {passwordIsMasked} = this.state;
    return(
      <div className='registrationBoard'>
        <button className='registration-btn reg-draw-border' role="button" onClick={(e) => this.togglePanel(e)}>Create a Storyteller Account</button>
        <br />
        {this.state.open ? (
          <form className='registrationForm' onSubmit={this.handleSubmit}>
            <FormErrors formErrors={this.state.formErrors} />
            <div className={`${this.errorClass(this.state.formErrors.password)}`}></div>
            <label htmlFor="username reg-box" hidden>Create username:</label>
            <input className='username reg-box' type='text'  aria-label="create-username" aria-required="true" placeholder='Create your username' name='username' value={this.state.username} onChange={e => this.setState({username: e.target.value})}/>
            <div className='passwordContainer'>
                <label htmlFor="password reg-box" hidden>Create password:</label>
                <input className='password reg-box' type={passwordIsMasked ? 'password' : 'text'}  aria-label="create-password" aria-required="true" placeholder='Create your password' name='password' value={this.state.password} onChange={this.handleChange} />
                <span className='togglePeekReg'onClick={this.togglePeek} ><img src={OpenEye}  alt="toggle-eye"/></span>
            </div>
            <br />
            <label htmlFor="firstName reg-box" hidden>First name:</label>
            <input className='firstName reg-box' type='text'  aria-label="type-in-first-name" aria-required="true" placeholder='Your first name?' name='firstName' value={this.state.firstName} onChange={e => this.setState({firstName: e.target.value})}/>
            <label htmlFor="lastName reg-box" hidden>Last name:</label>
            <input className='lastName reg-box' type='text'  aria-label="type-in-last-name" aria-required="true" placeholder='Your last name?' name='lastName' value={this.state.lastName} onChange={e => this.setState({lastName: e.target.value})}/>
            <br />
            <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`} >
            <label htmlFor="email reg-box" hidden>Email:</label>
            <input className='email reg-box' type='email'  aria-label="type-in-your-email" aria-required="true" placeholder='Your Email?' name='email' value={this.state.email} onChange={this.handleChange} />
            </div>
            <button type='submit' className='register-btn reg-draw-border' role="button" disabled={!this.state.formValid}>Register</button>
            <button type='button' className='register-btn reg-draw-border' role="button" onClick={(e) => this.togglePanel(e)}>Cancel</button>
          </form>
        ): null}
      </div>
    );
  }
}

export default Registration;
