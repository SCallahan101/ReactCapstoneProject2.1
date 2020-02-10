import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Intro extends Component {
  render(){
    return (
      <div className='intro'>
        <h2>Welcome to your own brainstorm central!</h2>
        <p>Basically, this draftboard is here to help you to write your own epic journey of Sci-Fi book. The idea is to reduce the possible of writer blocks by offering you hints, suggestions, ideas, or unconcousiness assistance.</p>
        <NavLink to={'/MainPage/Choices'}><button className='btn draw-border'>Let start creating some chapters!!</button></NavLink>
      </div>
    )
  }
}

export default Intro;
