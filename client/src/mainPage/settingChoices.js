import React, {Component} from 'react';
import {Redirect} from 'react-router';
import shuffle from 'shuffle-array';
// import hexIcon from '../hexagon.png';

let arraySciFiPics = [
  {name:'sciFiPic0', src: 'https://wallpaperaccess.com/full/166017.jpg'},
  {name:'sciFiPic1', src: 'http://s1.picswalls.com/thumbs2/2015/10/11/sci-fi-backgrounds_111319989_283.jpg'},
  {name:'sciFiPic2', src: 'https://thewritingchimp.files.wordpress.com/2015/09/240691.jpg'},
  {name:'sciFiPic3', src: 'https://weburbanist.com/wp-content/uploads/2016/07/SUNDAYS-644x320.png'},
  {name:'sciFiPic4', src: 'https://wallpaperaccess.com/full/693873.jpg'},
  {name:'sciFiPic5', src: 'https://images3.alphacoders.com/152/thumb-350-152779.jpg'},
  {name:'sciFiPic6', src: 'https://wallup.net/wp-content/uploads/2018/09/28/954003-fantasy-adventure-kingdom-kingdoms-art-artwork-artistic.jpg'},
  {name:'sciFiPic7', src: 'https://cdna.artstation.com/p/assets/images/images/000/275/000/large/Sorcery_Concept05.jpg?1414573487'},
  {name:'sciFiPic8', src: 'https://cache.desktopnexus.com/thumbseg/1584/1584053-bigthumbnail.jpg'},
  {name:'sciFiPic9', src: 'https://wallpapercave.com/wp/wp2773676.jpg'},
  {name:'sciFiPic10', src: 'https://wallup.net/wp-content/uploads/2018/10/04/675384-sci-fi-battle-fighting-war-art-artwork-warrior-futuristic.jpg'},
  {name:'sciFiPic11', src: 'https://i.pinimg.com/originals/eb/f4/cf/ebf4cf899f9b3a13f5e85dda13773345.jpg'},
  {name:'sciFiPic12', src: 'https://i.pinimg.com/originals/5b/e5/ce/5be5ce754b095ce4aef65f650c75c982.jpg'},
  {name:'sciFiPic13', src: 'https://wallpapercave.com/wp/wiO239E.jpg'},
  {name:'sciFiPic14', src: 'https://wallpapercave.com/wp/8NBg7aT.jpg'},
  {name:'sciFiPic15', src: 'http://getwallpapers.com/wallpaper/full/d/b/7/965932-mythical-background-1920x1080-for-mac.jpg'},
  {name:'sciFiPic16', src: 'http://getwallpapers.com/wallpaper/full/d/c/f/966045-large-mythical-background-1920x1200-macbook.jpg'},
  {name:'sciFiPic17', src: 'https://www.itl.cat/pngfile/big/3-38627_romantic-love-couple-wallpaper-hd-design-inspiration-boy.jpg'}
];
class SettingChoices extends Component {
  constructor(props){
    super(props);
    this.state={
      redirect: false,
      src: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (imgSrc) => {
    console.log('the img that picked by the user: ' + imgSrc);
    this.setState({redirect: true, src: imgSrc});
  }
  render(){
    shuffle(arraySciFiPics);
    const thePickedImg = this.state.src;
    console.log('Double Checking: ' + thePickedImg);
    const {redirect} = this.state;
    if(redirect) {
      return <Redirect to={{ pathname:'/MainPage/CreateChapter', state: { referrer: thePickedImg } }} />;

    }
    return (
      <div className='hexsContainer'>
        <div className='msgBox'>
          <h2 className='settingMessage'>Choose your setting for this chapter!</h2>
        </div>
        <div className='hexBox hex1'>
          <img className="hexagon alt-1 top base" src={arraySciFiPics[0].src} alt='hexagon icon' onClick={() => this.handleClick(arraySciFiPics[0].src)}  />
        </div>
        <div className='hexBox hex2'>
          <img className="hexagon alt-2 top" src={arraySciFiPics[1].src} alt='hexagon icon' onClick={() => this.handleClick(arraySciFiPics[1].src)}/>
        </div>
        <div className='hexBox hex3'>
          <img className="hexagon alt-3 top" src={arraySciFiPics[2].src} alt='hexagon icon' onClick={() => this.handleClick(arraySciFiPics[2].src)}/>
        </div>
        <div className='hexBox hex4'>
          <img className="hexagon alt-4 bottomLeft" src={arraySciFiPics[3].src} alt='hexagon icon' onClick={() => this.handleClick(arraySciFiPics[3].src)}/>
        </div>
        <div className='hexBox hex5'>
          <img className="hexagon alt-5 bottomRight" src={arraySciFiPics[4].src} alt='hexagon icon' onClick={() => this.handleClick(arraySciFiPics[4].src)}/>
        </div>
      </div>
    );
  }
}

export default SettingChoices;
