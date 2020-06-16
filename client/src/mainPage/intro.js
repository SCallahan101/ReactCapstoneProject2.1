import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Intro extends Component {
  render(){
    return (
      <div className='intro'>
        <h2>Welcome to your own brainstorm central!</h2>
        <p>Why should you use this site to help you to overcome thought blocks? Cause why not? Often things come to you naturally if you let your brain just work itself. That's where the subconscious stimulations come in.</p>
        <NavLink to={'/MainPage/Choices'}><button className='btn draw-border'>Click here to start creating some chapters!!</button></NavLink>
      </div>
    )
  }
}

export default Intro;
