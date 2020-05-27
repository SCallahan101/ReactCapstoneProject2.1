import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import WindowCloseSvg from '../SvgIcons/window-close-regular.svg';
import swal from 'sweetalert';
import ModalBox from './modal';

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
    })
    .then(data => {
      swal("Confirmed!", "Your new additional chapter has been added to your Storyline!", "success");
      this.setState({
        chapterNum: '',
        title: '',
        show: false
      });
    })
    .catch((error) => {
      console.error("Error: ", error);
      swal("ERROR!", "Something amissing or wrong input: " + error, "error");
    });
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
      <div className='chapterModalContainer'>
        <button className='modal outside-btn' onClick={e => { this.showModal(e); }}>Fill out chapter information</button>
        <ModalBox onClose={this.showModal} show={this.state.show}>
        <form className='fillingStory' onSubmit={this.handleSubmit}>
          <label htmlFor="chapterNumber" hidden>Chapter Number:</label>
          <input className='chapterNumber' type='text' aria-label="type-in-chapter-number" aria-required="true" placeholder='Chapter-nth?' value={this.state.chapterNum} onChange={e => this.setState({chapterNum: e.target.value})} name='chapter' />
          <br />
          <label htmlFor="titleInput" hidden>Create Title:</label>
          <input className='titleInput' type='text' aria-label="create-a-title" aria-required="true" placeholder='Type your title' value={this.state.title} onChange={e => this.setState({title: e.target.value})} name='title' />
          <br />
          <label htmlFor="storyBox" hidden>Create Content:</label>
          <textarea className='storyBox'  aria-label="create-your-chapter-story" aria-required="true" placeholder='Type your story down here!' value={this.setState.content} onChange={e => this.setState({content: e.target.value})} name='content'></textarea>
          <button className='chapterSubmit' type='submit'>Add Chapter </button>
          <button className='modal inside-btn' onClick={e => { this.showModal(e); }}><img src={WindowCloseSvg} alt="X-mark-cancel"/></button>
          <span> </span>
        </form>
        </ModalBox>
      </div>
    )
  }
}

export default ListToAdd;
