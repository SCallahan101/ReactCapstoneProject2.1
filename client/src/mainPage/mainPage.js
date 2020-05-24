import React, {Component, createRef} from 'react';
import {Route, Link, Switch, NavLink} from 'react-router-dom';
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


  // handleProgressBtn(e){
  //   this.setState({mobileProgress: !this.state.mobileProgress});
  // }
  // handleSuggestionsBtn(e){
  //   this.setState({mobileSuggestions: !this.state.mobileSuggestions});
  // }

  componentDidMount() {
    const preDataId = localStorage.getItem('author');
    const authorId = preDataId.replace(/['"]+/g, '');
    console.log("At GET request for user's list of chapters: " + authorId);
    setInterval(() => {
      fetch('/api/ChaptersForStory/' + authorId)
      .then(response => response.json())
      .then(data => this.setState({chapterlists: data.chapterlists}));
    }, 4000);
    //This somehow linked with img src...werid me out.//
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
        <div className="invisibleBox">
            <span className="storyPlot-tooltip">This tab is only to show your progress with your storyline. To see inside your chapters then go to the finalize page.</span>
        </div>
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
