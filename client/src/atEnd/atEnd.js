import React, {Component} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {NavLink} from 'react-router-dom';
import EditModal from './editModal';
import DeleteSvg from '../SvgIcons/times-circle-solid.svg';
import EditSvg from '../SvgIcons/keyboard-solid.svg';
import WindowCloseSvg from '../SvgIcons/window-close-regular.svg';

class TheEnd extends Component{
  state = {
    show: false,
    activeChapterNum: '',
    activeTitle: '',
    activeContent: '',
    id: '',
    chapterNum: '',
    title: '',
    content: ''
  };
  openEditModal = e => {
    this.setState({
      show: !this.state.show,
    });
  };

  async deleteChapter(chapterlist){
    if(window.confirm(`Are you sure about delete this "${chapterlist.title}" chapter?`)) {
      fetch('/api/FinalizeTheStory/' + `${chapterlist.id}`, {
        method: 'DELETE',
      })
      .then(res => res.text())
      .then(res => console.log(res));
    //   .then(function(response) {
    //     if (!response.ok) {
    //         throw Error(response.statusText);
    //     }
    //     return response;
    // }).then(function(response) {
    //     console.log("ok");
    // }).catch(function(error) {
    //     console.log(error);
    // });
      // await this.fetch('delete', `/api/FinalizeTheStory/${chapterlist.id}`);
      // this.callApi();
    }
  }
selectedChapter(id, num, title, content, event){
  console.log(id + ' ' + num + ' ' + title + ' ' + content);
  // const activeChapterNum = num;
  // const activeTitle = title;
  // const activeContent = content;
  this.setState({
    activeId: id,
    activeChapterNum: num,
    activeTitle: title,
    activeContent: content
  });
}
handleEditSubmit = async e =>{
  e.preventDefault();
  if(window.confirm(`Are you sure about your edit changes on this chapter?`)) {
    const response = await fetch('/api/FinalizeTheStory/'+ `${this.state.activeId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id: this.state.activeId, chapterNum: this.state.chapterNum, title: this.state.title, content: this.state.content}),
    })
    .then(res => res.text())
    .then(res => console.log(res));
  }
};

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
            <h2>
              The Story
            </h2>
            <div className='progressContainer'>
            <ul className='progressLine'>
              {this.props.chapterlists.map(chapterlist => <li className='progressBox' key={chapterlist.id}>
                  <button className='deleteChapter' onClick={() => this.deleteChapter(chapterlist)}><img src={DeleteSvg} /></button>
                  <div>Chapter: {chapterlist.chapterNum}</div>
                  <div>Title: {chapterlist.title}</div>
                  <div hidden>{chapterlist.content}</div>
                  <button className='editTheChapter' onClick={e => { this.openEditModal(e); }}><img src={EditSvg} value={chapterlist.id, chapterlist.chapterNum, chapterlist.title, chapterlist.content} onClick={this.selectedChapter.bind(this, chapterlist.id, chapterlist.chapterNum, chapterlist.title, chapterlist.content)} /></button>
                </li>)}
            </ul>
            </div>
            <EditModal onClose={this.showModal} show={this.state.show}>
            <form className='editStory' onSubmit={this.handleEditSubmit}>
              <h3 className='draftTitle'>Chapter Draft</h3>
              <div hidden >{this.state.activeId}</div>
              <span>Number: </span>
              <input className='editChapterNumber' type='text' placeholder={this.state.activeChapterNum} value={this.state.chapterNum} onChange={e => this.setState({chapterNum: e.target.value})} name='chapter' />
              <span>Title: </span>
              <input className='editTitleInput' type='text' placeholder={this.state.activeTitle} value={this.state.title} onChange={e => this.setState({title: e.target.value})} name='title' />
              <br />
              <p className='draftContent'>Content</p>
              <textarea className='editStoryBox' placeholder={this.state.activeContent} value={this.state.content} onChange={e => this.setState({content: e.target.value})} name='content'>{this.state.activeTitle}</textarea>
              <button className='editChapterSubmit' type='submit'>Edit it</button>
              <button className='editModalClose-btn' onClick={e => { this.openEditModal(e); }}><img src={WindowCloseSvg}  /></button>
            </form>
            </EditModal>
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
