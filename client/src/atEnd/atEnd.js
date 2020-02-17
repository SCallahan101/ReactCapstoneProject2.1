import React, {Component} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {NavLink} from 'react-router-dom';

class TheEnd extends Component{
  render(){
    return(
      <div>
        <Tabs>
          <TabList>
            <Tab>Your Story</Tab>
            <Tab>Comparison Stats</Tab>
            <Tab>Exit</Tab>
          </TabList>
          <TabPanel>
            <p>
              The Story
            </p>
            <div className='progressContainer'>
            <ul className='progressLine'>
              {this.props.chapterlists.map(chapterlist => <li className='progressBox' key={chapterlist._id}>
                  <div>Chapter: {chapterlist.chapterNum}</div>
                  <div>Title: {chapterlist.title}</div>
                </li>)}
            </ul>
            </div>
          </TabPanel>
          <TabPanel>
            <p>
               Overall Stats with other users
            </p>
              <div className='statsContainer'>
                <div className='statsBars'></div>
                <div className='statsBars'></div>
                <div className='statsBars'></div>
                <div className='statsBars'></div>
                <div className='statsBars'></div>
              </div>
          </TabPanel>
          <TabPanel>
            <NavLink to='/' activeClassName='exitLink'><button className='btn draw-border'>Exit back to Front Page</button></NavLink>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}


export default TheEnd;
