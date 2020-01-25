import React, {useState} from 'react';
import {Link} from 'react-router-dom';
// import TheList from './totalProgress';

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
function ListToAdd() {
  const [form, setState] = useState({
    chapter: '',
    title: '',
    content: '',
  });

  const doubleCheckValues = e => {
    e.preventDefault();
    console.log('Chapter: ' + form.chapter, 'Title: ' + form.title);

  };

  const newChapterInfo = e => {
    setState({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return(
    <form className='fillingStory' onSubmit={doubleCheckValues}>
      <p className='thoughts'>Type in your thoughts:</p>
      What chapter is it now? <input className='chapterNumber' type='text' value={form.chapter} onChange={newChapterInfo} name='chapter' />
      <br />
      Type your title: <input className='titleInput' type='text' value={form.title} onChange={newChapterInfo} name='title' />
      <br />
      <p className='thoughts'>Type in your thoughts:</p>
      <textarea className='storyBox' value={form.content} onChange={newChapterInfo} name='content'>Go crazy!</textarea>
      <button type='submit'>Add to your progress list: </button>
      <Link to={'/MainPage/Choices'}>Go Back</Link>
      <span> </span>
      <Link to={'/MainPage/WrapItUp'}>Done with my story!</Link>
    </form>
  );
};


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
