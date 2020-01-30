import React, {Component} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
// import hexIcon from '../hexagon.png';
import './mainPage.css';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import SettingChoices from './settingChoices';
import Intro from './intro';
import createTheStory from '../createTheStory/createTheStory';
import TheEnd from '../atEnd/atEnd';
import TheList from '../createTheStory/totalProgress';
import SuggestionsList from './ideaSuggestions';
// import 'react-tabs/style/react-tabs.css';

class TheMain extends Component {
  render(){
    return (
      <div className='MainDashboard'>
        <section className='progressBar'>
          <div className='chapterStories'>
            Progress
          </div>
      <TheList />
        </section>
        <section className='StoryMakingContainer'>
          <Switch>
            <Route path='/MainPage/ShortIntro' component={Intro} />
            <Route path='/MainPage/Choices' component={SettingChoices} />
            <Route path='/MainPage/CreateChapter' component={createTheStory} />
            <Route path='/MainPage/WrapItUp' component={TheEnd} />
          </Switch>
        </section>
        <section className='ideaSuggestionsBar'>
          <div className='boxOfSuggestions'>
            ??? List of Ideas ???
          </div>
          <SuggestionsList />
        </section>
      </div>
    );
  }
}

export default TheMain;
