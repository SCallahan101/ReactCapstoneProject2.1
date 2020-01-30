import React, {Component} from 'react';
// import chaptersData from '../chaptersData';
// import {API_BASE_URL} from '../clientServerRoom/config';

class TheList extends Component {
  constructor(props){
    super(props);
    this.state = {
      chapterlists: []
    };
  }
  componentDidMount() {
    fetch('/api/ChaptersForStory/all')
    .then(response => response.json())
    .then(data => this.setState({chapterlists: data.chapterlists}));
  }
  render(){
    const {chapterlists} = this.state;
    return(
      <ul className='coverList'>
        {chapterlists.map(chapterlist =>
          <li className='chapter' key={chapterlist._id}>
            <div>Chapter: {chapterlist.chapterNum}</div>
            <div>Title: {chapterlist.title}</div>
          </li>
        )}
      </ul>
    );
  }
}


// const progressList = [
//   {chapter: 1,
//    title: 'The Coming',
//    content:'',
//  },
//   {chapter: 2,
//    title: 'Death is here',
//    content: '',
//  },
// ];
// const progressList = chaptersData;
//
// const TheList = () => (
//   <ul className='coverList'>
//     {progressList.map(item => (
//       <li className='chapter'>
//         <div>Chapter: {item.chapter}</div>
//         <div>Title: {item.title}</div>
//       </li>
//     ))}
//   </ul>
// );

export default TheList;
