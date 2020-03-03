import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import TheMain from './mainPage/mainPage';
import Welcome from './welcome/welcome';
import Registration from './welcome/registrationPage';
import Particles from 'react-particles-js';
import './App.css';
import ReactDOM from 'react-dom'


// <Route path='/FinalizeStoryAndStats' component={} />
// <Route component={NotFoundPage} />

class App extends Component {
  render(){
  return (
    <div className='App'>
      <header>
        <h1 className='TopBoard'>Your Sci-Fi StoryBoard</h1>
      </header>
      <main className='mainFrameApp'>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/MainPage' component={TheMain} />
        </Switch>
      </main>
      <Particles className="Particles"
      params={{
         "particles": {
          "number": {
            "value": 90
           },
           "color": { "value": "#000000" },
           "line_linked": {
             "distance": 120,
             "opacity": .8,
             "width": 1.2},
          "size": {
            "value": 4
           }
           },
           "interactivity": {
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                  }
                 }
                }
              }} />
    </div>
  );
};
}

export default App;
