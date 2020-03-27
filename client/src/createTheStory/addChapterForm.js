// import React, {useState} from 'react';
import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import WindowCloseSvg from '../SvgIcons/window-close-regular.svg';

import ModalBox from './modal';
// import TheList from './totalProgress';
class ListToAdd extends Component {
  state = {
    chapterNum: '',
    title: '',
    content: '',
  };

  componentDidMount(){
    this.callApi()
    .then(res => this.setState({response: res.express}))
    .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/api/ChaptersForStory/all');
    const body = await response.json();
    if(response.status !== 200) throw Error(body.message);
    return body;
  };
  handleSubmit = async e =>{
    e.preventDefault();
    const localAuthor = localStorage.getItem('author');
    const idAuthor = localAuthor.replace(/['"]+/g, '');
    console.log('Phase: ' + idAuthor);
    // console.log(idAuthor.replace(/['"]+/g, ''));
    const response = await fetch('/api/ChaptersForStory/all', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({userId: idAuthor, chapterNum: this.state.chapterNum, title: this.state.title, content: this.state.content}),
    });
    const body = await response.text();
    this.setState({responseToPost: body});
    console.log(this.state.responseToPost);
  // on bottom of html list <p>{this.state.responseToPost}</p>
  };
  state = {
    show: false
  };
  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };
  render(){
    return (
      <div>
      <button className='modal outside-btn' onClick={e => { this.showModal(e); }}>Create new chapter</button>
      <ModalBox onClose={this.showModal} show={this.state.show}>
      <form className='fillingStory' onSubmit={this.handleSubmit}>
        <input className='chapterNumber' type='text' placeholder='Chapter-nth?' value={this.state.chapterNum} onChange={e => this.setState({chapterNum: e.target.value})} name='chapter' />
        <br />
        <input className='titleInput' type='text' placeholder='Type your title' value={this.state.title} onChange={e => this.setState({title: e.target.value})} name='title' />
        <br />
        <textarea className='storyBox' value={this.setState.content} onChange={e => this.setState({content: e.target.value})} name='content'>Go crazy!</textarea>
        <button className='chapterSubmit' type='submit'>Add Chapter </button>
        <button className='modal inside-btn' onClick={e => { this.showModal(e); }}><img src={WindowCloseSvg} /></button>
        <span> </span>
      </form>
      </ModalBox>
      </div>
    )
  }
}







// const progressChapters = [
//   {chapter: 3,
//    title: 'End',
//    content:'',
//  },
//   {chapter: 4,
//    title: 'Nowhere',
//    content: '',
//  },
// ];
// function ListToAdd() {
//   const [form, setState] = useState({
//     chapter: '',
//     title: '',
//     content: '',
//   });
//
//   const doubleCheckValues = e => {
//     e.preventDefault();
//     console.log('Chapter: ' + form.chapter, 'Title: ' + form.title);
//
//   };
//
//   const newChapterInfo = e => {
//     setState({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//   };
//
//   return(
//     <form className='fillingStory' onSubmit={doubleCheckValues}>
//       <p className='thoughts'>Type in your thoughts:</p>
//       What chapter is it now? <input className='chapterNumber' type='text' value={form.chapter} onChange={newChapterInfo} name='chapter' />
//       <br />
//       Type your title: <input className='titleInput' type='text' value={form.title} onChange={newChapterInfo} name='title' />
//       <br />
//       <p className='thoughts'>Type in your thoughts:</p>
//       <textarea className='storyBox' value={form.content} onChange={newChapterInfo} name='content'>Go crazy!</textarea>
//       <button type='submit'>Add to your progress list: </button>
//       <Link to={'/MainPage/Choices'}>Go Back</Link>
//       <span> </span>
//       <Link to={'/MainPage/WrapItUp'}>Done with my story!</Link>
//     </form>
//   );
// };


export default ListToAdd;

// function ListToAdd() {
//   const [form, setState] = useState({
//     chapter: '',
//     title: '',
//     content: '',
//   });
//
//   const doubleCheckValues = e => {
//     e.preventDefault();
//     console.log('Chapter: ' + form.chapter, 'Title: ' + form.title);
//
//   };
//
//   const newChapterInfo = e => {
//     setState({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//   };
//
//   return(
//     <form className='fillingStory' onSubmit={doubleCheckValues}>
//       <p className='thoughts'>Type in your thoughts:</p>
//       What chapter is it now? <input className='chapterNumber' type='text' value={form.chapter} onChange={newChapterInfo} name='chapter' />
//       <br />
//       Type your title: <input className='titleInput' type='text' value={form.title} onChange={newChapterInfo} name='title' />
//       <br />
//       <p className='thoughts'>Type in your thoughts:</p>
//       <textarea className='storyBox' value={form.content} onChange={newChapterInfo} name='content'>Go crazy!</textarea>
//       <button type='submit'>Add to your progress list: </button>
//       <Link to={'/MainPage/Choices'}>Go Back</Link>
//       <span> </span>
//       <Link to={'/MainPage/WrapItUp'}>Done with my story!</Link>
//     </form>
//   );
// };
