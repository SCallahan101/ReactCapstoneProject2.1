import React, {Component} from 'react';
import ListToAdd from './addChapterForm';


class createTheStory extends Component {
  render(){
    return (
      <div>
        <img className='BackgroundImageSetting' src={this.props.location.state.referrer} alt='various background image'/>
        <ListToAdd />
      </div>
    );
  }
}
// <form className='fillingStory'>
//   <p className='thoughts'>Type in your thoughts:</p>
//   What chapter is it now? <input className='chapterNumber' type='text'></input>
//   <br />
//   Type your title: <input className='titleInput' type='text'></input>
//   <br />
//     <p className='thoughts'>Type in your thoughts:</p>
//   <textarea className='storyBox'>Go crazy!</textarea>
//   <p className='addSubmit'> Add to your progress list: <input type='submit' /></p>
// </form>

export default createTheStory;
