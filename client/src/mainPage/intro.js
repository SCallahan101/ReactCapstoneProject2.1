import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Intro extends Component {
  render(){
    return (
      <div className='intro'>
        <h2>Welcome to your own brainstorm central!</h2>
        <p>Basically, this draftboard is here to help you to break down any possible writer blocks that you might have prior to this. There are various psychological assistances such as colors for emotions stimulation, word triggers, visual cues, and background reflections.</p>
        <NavLink to={'/MainPage/Choices'}><button className='btn draw-border'>Click here to start creating some chapters!!</button></NavLink>
      </div>
    )
  }
}

export default Intro;
