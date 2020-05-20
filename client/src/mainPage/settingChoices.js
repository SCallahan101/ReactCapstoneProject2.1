import React, {Component, createRef} from 'react';
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
      // wrapAround: true,
      enableKeyboardControls: true,
      redirect: false,
      src: '',
    };
    this.myRef = createRef();
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    console.log(this.myRef.current?.clientWidth);
    // console.log(window.innerWidth);
    setInterval(() => {
      if(this.myRef.current?.clientWidth <= 460){
        this.setState({slidesToShow: 1});
      } else if(this.myRef.current?.clientWidth <= 682){
        this.setState({slidesToShow:2});
      } else{
        this.setState({slidesToShow: 3});
      }
    }, 200);
  }

  handleClick = (imgSrc) => {
    console.log('the img that picked by the user: ' + imgSrc);
    this.setState({redirect: true, src: imgSrc});
  }
  render(){
    let arraySciFiPics = [
    {id: '1B', src: 'https://wallpaperaccess.com/full/166017.jpg'},
    {id: '2B', src: 'http://s1.picswalls.com/thumbs2/2015/10/11/sci-fi-backgrounds_111319989_283.jpg'},
    {id: '3B', src:'https://thewritingchimp.files.wordpress.com/2015/09/240691.jpg'},
    {id: '4B', src:'https://weburbanist.com/wp-content/uploads/2016/07/SUNDAYS-644x320.png'},
    {id: '5B', src:'https://wallpaperaccess.com/full/693873.jpg'},
    {id: '6B', src:'https://images3.alphacoders.com/152/thumb-350-152779.jpg'},
    {id: '7B', src:'https://wallup.net/wp-content/uploads/2018/09/28/954003-fantasy-adventure-kingdom-kingdoms-art-artwork-artistic.jpg'},
    {id: '8B', src:'https://cdna.artstation.com/p/assets/images/images/000/275/000/large/Sorcery_Concept05.jpg?1414573487'},
    {id: '9B', src:'https://cache.desktopnexus.com/thumbseg/1584/1584053-bigthumbnail.jpg'},
    {id: '10B', src:'https://wallpapercave.com/wp/wp2773676.jpg'},
    {id: '11B', src:'https://wallup.net/wp-content/uploads/2018/10/04/675384-sci-fi-battle-fighting-war-art-artwork-warrior-futuristic.jpg'},
    {id: '12B', src:'https://i.pinimg.com/originals/eb/f4/cf/ebf4cf899f9b3a13f5e85dda13773345.jpg'},
    {id: '13B', src:'https://i.pinimg.com/originals/5b/e5/ce/5be5ce754b095ce4aef65f650c75c982.jpg'},
    {id: '14B', src:'https://wallpapercave.com/wp/wiO239E.jpg'},
    {id: '15B', src:'https://wallpapercave.com/wp/8NBg7aT.jpg'},
    {id: '16B', src:'http://getwallpapers.com/wallpaper/full/d/b/7/965932-mythical-background-1920x1080-for-mac.jpg'},
    {id: '17B', src:'http://getwallpapers.com/wallpaper/full/d/c/f/966045-large-mythical-background-1920x1200-macbook.jpg'},
    {id: '18B', src:'https://www.itl.cat/pngfile/big/3-38627_romantic-love-couple-wallpaper-hd-design-inspiration-boy.jpg'}
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
      <div className='hexsContainer' ref={this.myRef}>
      <Carousel slidesToShow={this.state.slidesToShow} wrapAround={this.state.wrapAround}>
      {arraySciFiPics.map((value) => {
        return (
          <div className='hexBox' key={value.id}>
            <img className="hexagon" src={value.src} alt='hexagon icon' onClick={() => this.handleClick(value)}/>
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
