import React, {Component} from 'react';
// import chaptersData from '../chaptersData';
// import {API_BASE_URL} from '../clientServerRoom/config';

class TheList extends Component {
  // constructor(props){
  //   super(props);
  //   console.log(props);
  // }
  // componentDidMount() {
  //   fetch('/api/ChaptersForStory/all')
  //   .then(response => response.json())
  //   .then(data => this.setState({chapterlists: data.chapterlists}));
  // }
  render(){
    // const {chapterlists} = this.props.chapterlists;
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
