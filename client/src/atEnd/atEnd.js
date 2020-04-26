import React, {Component} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {NavLink} from 'react-router-dom';
import EditModal from './editModal';
import DeleteSvg from '../SvgIcons/times-circle-solid.svg';
import EditSvg from '../SvgIcons/keyboard-solid.svg';
import WindowCloseSvg from '../SvgIcons/window-close-regular.svg';
import "./atEnd.css";

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
    if(window.confirm(`Are you sure about delete this "${chapterlist.title} ${chapterlist.id}" chapter?`)) {
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
      <div className='endContainer'>
        <Tabs>
          <TabList>
            <Tab>Your Story</Tab>
            <Tab>Facts</Tab>
            <Tab>Next Action</Tab>
          </TabList>
          <TabPanel>
            <h2 className='endTitle'>
              The Story
            </h2>
            <div className='progressContainer'>
            <ul className='progressLine'>
              {this.props.chapterlists.map(chapterlist => <li className='progressBox' key={chapterlist.id}>
                  <button className='deleteChapter' onClick={() => this.deleteChapter(chapterlist)}><img src={DeleteSvg} /></button>
                  <div>Chapter: {chapterlist.chapterNum}</div>
                  <div>Title: {chapterlist.title}</div>
                  <div hidden>{chapterlist.content}</div>
                  <button className='editTheChapter' onClick={e => { this.openEditModal(e); }}>
                  <span className='edit-tooltip'>Edit</span>
                    <img src={EditSvg} value={chapterlist.id, chapterlist.chapterNum, chapterlist.title, chapterlist.content} onClick={this.selectedChapter.bind(this, chapterlist.id, chapterlist.chapterNum, chapterlist.title, chapterlist.content)} />
                  </button>
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
            <div className='factsContainer'>
              <div className='factsList'>
                  <button className="factsDropBtn">Color Psychology</button>
                  <div className='factsContent'>
                    <p>Different colors evoke different emotions.</p>
                    <p>Colors can even play tricks on your mind.</p>
                    <p>Colors can trigger deep childhood memories.</p>
                    <p>Color affects taste.</p>
                    <p>Colors can affect energy and blood pressure.</p>
                  </div>
              </div>
              <div className='factsList'>
                  <button className="factsDropBtn">Subconscious Mind</button>
                  <div className='factsContent'>
                    <p>The complex of mental activities within an individual that proceed without his awareness.</p>
                    <p>It picks up information and passing to the conscious through images, feelings, sensations, dream and reflexes. </p>
                    <p>The subconscious mind plays a complex, pervasive role in how you perceive the world.</p>
                  </div>
              </div>
              <div className='factsList'>
                  <button className="factsDropBtn">Words Trigger</button>
                  <div className='factsContent'>
                    <p>A trigger word is any word that inspires someone to act.</p>
                    <p>we, as people, are attracted to certain words and phrases.</p>
                    <p>Trigger words are those that cause ourselves to feel strong emotions because of previous experiences.</p>
                  </div>
              </div>
              <div className='factsList'>
                  <button className="factsDropBtn">Visual Cues</button>
                  <div className='factsContent'>
                    <p>Captivating images helps the person to mitigate the boredom and simulate the person.</p>
                    <p>Half of the human brain is directly or indirectly devoted to processing visual information.</p>
                    <p>Humans have a remarkable ability to remember pictures.</p>
                  </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className='ending-container'>
            <NavLink to='/' activeClassName='exitLink'><button className='btn draw-border next-action'>Exit back to Front Page</button></NavLink>
            <br />
            <NavLink to='/MainPage/Choices'activeClassName='backStart'><button className='back-track-btn btn draw-border next-action'>Back to Chapter Creation Page</button></NavLink>
            <br />
            <h3>- Links for some deep thoughts -</h3>
            <a href='https://www.standoutbooks.com/3-golden-rules-writing-science-fiction-book/' className='link-btn btn draw-border next-action'>3-Golden Rules</a>
            <br />
            <a href='https://hobbylark.com/writing/how-to-write-a-science-fiction-short-story' className='link-btn btn draw-border next-action'>Sci-Fi information Oasis</a>
            <br />
            <a href='https://www.writersdigest.com/online-editor/write-science-fiction-novel-series-6-tips' className='link-btn btn draw-border next-action'>6 TIPS</a>
            <br />
            <a href='https://www.wikihow.com/Write-Science-Fiction' className='link-btn btn draw-border next-action'>Your Favorite WikiHow!</a>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}


export default TheEnd;
