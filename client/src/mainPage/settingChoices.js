import React, {Component} from 'react';
import {Redirect} from 'react-router';
// import shuffle from 'shuffle-array';
// import hexIcon from '../hexagon.png';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import Carousel from 'nuka-carousel';


// let arraySciFiPics = [
//   {name:'sciFiPic0', src: 'https://wallpaperaccess.com/full/166017.jpg'},
//   {name:'sciFiPic1', src: 'http://s1.picswalls.com/thumbs2/2015/10/11/sci-fi-backgrounds_111319989_283.jpg'},
//   {name:'sciFiPic2', src: 'https://thewritingchimp.files.wordpress.com/2015/09/240691.jpg'},
//   {name:'sciFiPic3', src: 'https://weburbanist.com/wp-content/uploads/2016/07/SUNDAYS-644x320.png'},
//   {name:'sciFiPic4', src: 'https://wallpaperaccess.com/full/693873.jpg'},
//   {name:'sciFiPic5', src: 'https://images3.alphacoders.com/152/thumb-350-152779.jpg'},
//   {name:'sciFiPic6', src: 'https://wallup.net/wp-content/uploads/2018/09/28/954003-fantasy-adventure-kingdom-kingdoms-art-artwork-artistic.jpg'},
//   {name:'sciFiPic7', src: 'https://cdna.artstation.com/p/assets/images/images/000/275/000/large/Sorcery_Concept05.jpg?1414573487'},
//   {name:'sciFiPic8', src: 'https://cache.desktopnexus.com/thumbseg/1584/1584053-bigthumbnail.jpg'},
//   {name:'sciFiPic9', src: 'https://wallpapercave.com/wp/wp2773676.jpg'},
//   {name:'sciFiPic10', src: 'https://wallup.net/wp-content/uploads/2018/10/04/675384-sci-fi-battle-fighting-war-art-artwork-warrior-futuristic.jpg'},
//   {name:'sciFiPic11', src: 'https://i.pinimg.com/originals/eb/f4/cf/ebf4cf899f9b3a13f5e85dda13773345.jpg'},
//   {name:'sciFiPic12', src: 'https://i.pinimg.com/originals/5b/e5/ce/5be5ce754b095ce4aef65f650c75c982.jpg'},
//   {name:'sciFiPic13', src: 'https://wallpapercave.com/wp/wiO239E.jpg'},
//   {name:'sciFiPic14', src: 'https://wallpapercave.com/wp/8NBg7aT.jpg'},
//   {name:'sciFiPic15', src: 'http://getwallpapers.com/wallpaper/full/d/b/7/965932-mythical-background-1920x1080-for-mac.jpg'},
//   {name:'sciFiPic16', src: 'http://getwallpapers.com/wallpaper/full/d/c/f/966045-large-mythical-background-1920x1200-macbook.jpg'},
//   {name:'sciFiPic17', src: 'https://www.itl.cat/pngfile/big/3-38627_romantic-love-couple-wallpaper-hd-design-inspiration-boy.jpg'}
// ];
class SettingChoices extends Component {
  constructor(props){
    super(props);
    this.state={
      slidesToShow: 3,
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
    let arraySciFiPics = [
    'https://wallpaperaccess.com/full/166017.jpg',
    'http://s1.picswalls.com/thumbs2/2015/10/11/sci-fi-backgrounds_111319989_283.jpg',
    'https://thewritingchimp.files.wordpress.com/2015/09/240691.jpg',
    'https://weburbanist.com/wp-content/uploads/2016/07/SUNDAYS-644x320.png',
    'https://wallpaperaccess.com/full/693873.jpg',
    'https://images3.alphacoders.com/152/thumb-350-152779.jpg',
    'https://wallup.net/wp-content/uploads/2018/09/28/954003-fantasy-adventure-kingdom-kingdoms-art-artwork-artistic.jpg',
    'https://cdna.artstation.com/p/assets/images/images/000/275/000/large/Sorcery_Concept05.jpg?1414573487',
    'https://cache.desktopnexus.com/thumbseg/1584/1584053-bigthumbnail.jpg',
    'https://wallpapercave.com/wp/wp2773676.jpg',
      'https://wallup.net/wp-content/uploads/2018/10/04/675384-sci-fi-battle-fighting-war-art-artwork-warrior-futuristic.jpg',
      'https://i.pinimg.com/originals/eb/f4/cf/ebf4cf899f9b3a13f5e85dda13773345.jpg',
      'https://i.pinimg.com/originals/5b/e5/ce/5be5ce754b095ce4aef65f650c75c982.jpg',
      'https://wallpapercave.com/wp/wiO239E.jpg',
      'https://wallpapercave.com/wp/8NBg7aT.jpg',
      'http://getwallpapers.com/wallpaper/full/d/b/7/965932-mythical-background-1920x1080-for-mac.jpg',
      'http://getwallpapers.com/wallpaper/full/d/c/f/966045-large-mythical-background-1920x1200-macbook.jpg',
      'https://www.itl.cat/pngfile/big/3-38627_romantic-love-couple-wallpaper-hd-design-inspiration-boy.jpg'
    ];

    // shuffle(arraySciFiPics);
    const thePickedImg = this.state.src;
    console.log('Double Checking: ' + thePickedImg);
    const {redirect} = this.state;
    if(redirect) {
      return <Redirect to={{ pathname:'/MainPage/CreateChapter', state: { referrer: thePickedImg } }} />;

    }
    return (
      <div className='testContainer'>
      <div className='titleHex'> Explore your Storyline Setting Choice </div>
      <div className='hexsContainer'>
      <Carousel slidesToShow={this.state.slidesToShow}>
      {arraySciFiPics.map((value) => {
        return (
          <div className='hexBox'>
            <img className="hexagon" src={value} alt='hexagon icon' onClick={() => this.handleClick(value)}/>
          </div>
        )
      })}
      </Carousel >
      </div>
      </div>
    );
  }
}

export default SettingChoices;
