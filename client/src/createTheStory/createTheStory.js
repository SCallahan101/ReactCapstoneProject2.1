import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import ListToAdd from './addChapterForm';
import BackButton from '../SvgIcons/angle-left-solid.svg';
import Finalize from '../SvgIcons/angle-double-right-solid.svg';

class createTheStory extends Component {
  render(){
    return (
      <div className="chapCreationContainer">
        <img className='BackgroundImageSetting' src={this.props.location.state.referrer} alt='various background image'/>
        <div className='pathwayContainer'>
          <NavLink to={'/MainPage/Choices'} activeClassName='previousPage' >
            <button className='goPrevious modal-btn'>
              <span className='back-tooltip'>Previous</span>
              <img src={BackButton} alt="left-arrow-previous"/>
            </button>
          </NavLink>
          <ListToAdd />
          <NavLink to={'/MainPage/WrapItUp'} activeClassName='finalizeStory' >
            <button className='finishUp modal-btn '>
            <span className='finalize-tooltip'>Finalize Your Story</span>
              <img src={Finalize} alt="double-right-arrows-finalize"/>
            </button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default createTheStory;
