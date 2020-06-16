import React, {Component, createRef} from 'react';
import {Route, Link, Switch, NavLink} from 'react-router-dom';
import './mainPage.css';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import SettingChoices from './settingChoices';
import Intro from './intro';
import createTheStory from '../createTheStory/createTheStory';
import TheEnd from '../atEnd/atEnd';
import TheList from '../createTheStory/totalProgress';
import SuggestionsList from './ideaSuggestions';
import swal from 'sweetalert';

class TheMain extends Component {
  constructor(props){
    super(props);
    const container = createRef();
    const secondContainer = createRef();
    this.state = {
      chapterlists: [],
      mobileProgress: false,
      mobileSuggestions: false
    };
    this.handleProgressBtn = this.handleProgressBtn.bind(this);
    this.handleSuggestionsBtn = this.handleSuggestionsBtn.bind(this);
  }
  handleProgressBtn = () => {
    this.setState(state => {
      return {
        mobileProgress: !state.mobileProgress
      };
    });
  };
  handleSuggestionsBtn = () => {
    this.setState(state => {
      return {
        mobileSuggestions: !state.mobileSuggestions
      };
    });
  };
  componentDidMount() {
    swal({
      title: "Guidance: Columns",
      text: "On your left, a non-clickable column showing your storyline progress as a visual cue. On your right, the column with full of the word triggers to help you imagine a theme for individual chapters. You can click the top button to recycle word themes.",
      icon: "info",
      button: "Next",
  })
  .then(() => {
      swal({
        title: "Guidance: Main Box",
        text: "When you see the multiple pictures by the next slide. It is your setting choices to help you to visualize your chapter's story. When the picked picture pops up to full size. There will be a bottom button where you can feed your chapter information. Then you either do some more chapters or finalize your story.",
        icon: "info",
        button: "Let go!",
      })
    });
    const preDataId = localStorage.getItem('author');
    const authorId = preDataId.replace(/['"]+/g, '');
    console.log("At GET request for user's list of chapters: " + authorId);
    setInterval(() => {
      fetch('/api/ChaptersForStory/' + authorId)
      .then(response => response.json())
      .then(data => this.setState({chapterlists: data.chapterlists}));
    }, 4000);
  }

  loggedOut(){
    localStorage.clear();
    console.log('Clear out the Storage');
  }
  render(){
    const {chapterlists} = this.state;
    return (
      <div className='MainDashboard'>
        <NavLink to='/' activeClassName='logoutLink'><button className='logout-btn draw-border' onClick={() => this.loggedOut()}>Quick Logout</button></NavLink>
        <div className="dropdown-bar mobile-progressBar" ref={this.container}>
          <button className="dropbtn mobile-border" onClick={this.handleProgressBtn}>Storyline</button>
        {this.state.mobileProgress && (
          <div className="dropdown-progress">
            <TheList chapterlists={chapterlists} />
          </div>
        )}
        </div>
        <section className='StoryMakingContainer'>
        <section className='progressBar'>
          <div className='chapterStories'>
            Story Draft
          </div>
          <TheList chapterlists={chapterlists} />
        </section>
          <Switch>
            <Route path='/MainPage/ShortIntro' component={Intro} />
            <Route path='/MainPage/Choices' component={SettingChoices} />
            <Route path='/MainPage/CreateChapter' component={createTheStory} />
            <Route path='/MainPage/WrapItUp' render={(props) => <TheEnd {...props} chapterlists={chapterlists} />} />
          </Switch>
          <section className='ideaSuggestionsBar'>
            <SuggestionsList />
          </section>
        </section>
        <div className="dropdown-bar mobile-suggestionsBar" ref={this.secondContainer}>
          <button className="dropbtn mobile-border" onClick={this.handleSuggestionsBtn}>Words Thought</button>
        {this.state.mobileSuggestions && (
          <div className="dropdown-suggestions">
              <SuggestionsList />
          </div>
        )}
        </div>
      </div>
    );
  }
}

export default TheMain;
