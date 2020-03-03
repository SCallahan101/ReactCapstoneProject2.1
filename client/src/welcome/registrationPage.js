import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
// import MainPage from '../mainPage/mainPage';

class Registration extends Component {
  constructor(){
    super();
    this.state={
      open: false
    }
    this.togglePanel =  this.togglePanel.bind(this);
  }
  togglePanel(e){
    this.setState({open: !this.state.open})
  }
  render(){
    return(
      <div className='registrationBoard'>
        <button className='registration-btn reg-draw-border' onClick={(e) => this.togglePanel(e)}>Registration</button>
        <br />
        {this.state.open ? (
          <form className='registrationForm'>
            <input className='userName reg-box' type='text' placeholder='Create your username' />
            <br />
            <input className='firstName reg-box' type='text' placeholder='Your first name?' />
            <br />
            <input className='lastName reg-box' type='text' placeholder='Your last name?' />
            <br />
            <button type='submit' className=''>Register</button>
          </form>
        ): null}
      </div>
    );
  }
}

        // <Link to={'/'}><button className='login-btn login-draw-border'>Back to Login</button></Link>

export default Registration;
