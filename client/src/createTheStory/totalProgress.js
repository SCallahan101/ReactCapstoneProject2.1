import React, {Component} from 'react';
// import chaptersData from '../chaptersData';
// import {API_BASE_URL} from '../clientServerRoom/config';

class TheList extends Component {
  constructor(props){
    super(props);
    this.state = {
      chapters: [],
      error: null,
      loading: false
    };
  }
  componentDidMount() {
    this.loadBoard();
  }
  loadBoard(){
    this.setState({
      error: null,
      loading: true
    });
    return fetch(`${API_BASE_URL}/board`)
      .then(res => {
        if(!res.ok){
            return Promise.reject(res.statusText);
        }
          return res.json();
      })
      .then(testProgress =>
          this.setState({
            chapters: testProgress.chapters,
            loading: false
          })
)
.catch(err =>
  this.setState({
    error:'Could not load testProgress',
    loading: false
  })
);
}
addChapter(chapterNum, title, content){
  this.setState({
    chapters: [...this.state.chapters, {chapterNum, title, content}]
  });
}
render(){
  let body;
  if(this.state.error){
    body = (
      <div className='message message-error'>{this.state.error}</div>
    );
  } else if (this.state.loading){
    body = (
      <div className='message message-default'>Loading testProgress...</div>
    );
  }else {
    const body = this.state.chapters.map((chapter, index) => (
      <li className='chapter' key={index}>
        <div>Chapter: {chapter.chapterNum}</div>
        <div>Title: {chapter.title}</div>
      </li>
    ));
  }
  return(
    <ul className='coverList'>
      {body}
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
