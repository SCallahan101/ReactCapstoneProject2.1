import React, {Component} from 'react';

class TheList extends Component {
  render(){
    const obj = this.props.chapterlists
    .sort((a, b) => (a.chapterNum > b.chapterNum) ? 1: -1)
    .map(chapterlist =>
      <li className='chapter' key={chapterlist.id}>
        <div>Chapter: {chapterlist.chapterNum}</div>
        <div>Title: {chapterlist.title}</div>
      </li>
    );
    return(
      <ul className='coverList'>
        {obj}
      </ul>
    );
  }
}

export default TheList;
