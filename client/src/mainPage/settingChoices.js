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
  {name:'sciFiPic10', src: 'https://wallup.net/wp-content/uploads/2018/10/04/675384-sci-fi-battle-fighting-war-art-artwork-warrior-futuristic.jpg'}
];
class SettingChoices extends Component {
  constructor(props){
    super(props);
    this.state={
      redirect: false,
      src: '',
    };
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
      <div>
        <img className="hexagon top base" src={arraySciFiPics[0].src} alt='hexagon icon' onClick={() => this.handleClick(arraySciFiPics[0].src)}  />
        <img className="hexagon top" src={arraySciFiPics[1].src} alt='hexagon icon' onClick={() => this.handleClick(arraySciFiPics[1].src)}/>
        <img className="hexagon top" src={arraySciFiPics[2].src} alt='hexagon icon' onClick={() => this.handleClick(arraySciFiPics[2].src)}/>
        <img className="hexagon bottomLeft" src={arraySciFiPics[3].src} alt='hexagon icon' onClick={() => this.handleClick(arraySciFiPics[3].src)}/>
        <h2 className='settingMessage'>Choose your setting for this chapter!</h2>
        <img className="hexagon bottomRight" src={arraySciFiPics[4].src} alt='hexagon icon' onClick={() => this.handleClick(arraySciFiPics[4].src)}/>
      </div>
    );
  }
}

export default SettingChoices;
