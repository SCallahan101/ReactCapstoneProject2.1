import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import TheMain from './mainPage/mainPage';
import Welcome from './welcome/welcome';
import Registration from './welcome/registrationPage';
import Particles from 'react-particles-js';
import './App.css';
import ReactDOM from 'react-dom';

class App extends Component {
  render(){
  return (
    <div className='App'>
      <header role="banner">
        <h1 className='TopBoard'>DraftBoard</h1>
      </header>
      <main className='mainFrameApp' role="main">
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/MainPage' component={TheMain} />
        </Switch>
      </main>
      <Particles className="Particles" role="img" aria-label="colorful background"
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
