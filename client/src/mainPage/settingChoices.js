import React, {Component, createRef} from 'react';
import {Redirect} from 'react-router';
import Carousel from 'nuka-carousel';

class SettingChoices extends Component {
  constructor(props){
    super(props);
    this.state={
      slidesToShow: 3,
      enableKeyboardControls: true,
      redirect: false,
      src: '',
    };
    this.myRef = createRef();
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    console.log(this.myRef.current?.clientWidth);
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
    {id: '1B', src: 'https://wallpaperaccess.com/full/166017.jpg', alt: "space-planets-background"},
    {id: '2B', src: 'http://s1.picswalls.com/thumbs2/2015/10/11/sci-fi-backgrounds_111319989_283.jpg', alt: "futuristic-city-overlook"},
    {id: '3B', src:'https://thewritingchimp.files.wordpress.com/2015/09/240691.jpg', alt: "robots-raid"},
    {id: '4B', src:'https://weburbanist.com/wp-content/uploads/2016/07/SUNDAYS-644x320.png', alt: "slum-city"},
    {id: '5B', src:'https://wallpaperaccess.com/full/693873.jpg', alt: "mythical-snake"},
    {id: '6B', src:'https://images3.alphacoders.com/152/thumb-350-152779.jpg', alt: "nature-background"},
    {id: '7B', src:'https://wallup.net/wp-content/uploads/2018/09/28/954003-fantasy-adventure-kingdom-kingdoms-art-artwork-artistic.jpg', alt: "overlook-castle"},
    {id: '8B', src:'https://cdna.artstation.com/p/assets/images/images/000/275/000/large/Sorcery_Concept05.jpg?1414573487', alt: "inside-tomb"},
    {id: '9B', src:'https://cache.desktopnexus.com/thumbseg/1584/1584053-bigthumbnail.jpg', alt: "fairy-land"},
    {id: '10B', src:'https://wallpapercave.com/wp/wp2773676.jpg', alt: "spirits-land"},
    {id: '11B', src:'https://wallup.net/wp-content/uploads/2018/10/04/675384-sci-fi-battle-fighting-war-art-artwork-warrior-futuristic.jpg', alt: "war-frontline"},
    {id: '12B', src:'https://i.pinimg.com/originals/eb/f4/cf/ebf4cf899f9b3a13f5e85dda13773345.jpg', alt: "zombies-march"},
    {id: '13B', src:'https://i.pinimg.com/originals/5b/e5/ce/5be5ce754b095ce4aef65f650c75c982.jpg', alt: "tales-of-two-cities"},
    {id: '14B', src:'https://wallpapercave.com/wp/wiO239E.jpg', alt: "spaceship"},
    {id: '15B', src:'https://wallpapercave.com/wp/8NBg7aT.jpg', alt: "alien-homeworld"},
    {id: '16B', src:'http://getwallpapers.com/wallpaper/full/d/b/7/965932-mythical-background-1920x1080-for-mac.jpg', alt: "swamp-town"},
    {id: '17B', src:'http://getwallpapers.com/wallpaper/full/d/c/f/966045-large-mythical-background-1920x1200-macbook.jpg', alt: "mythical-monsters-fight"},
    {id: '18B', src:'https://www.itl.cat/pngfile/big/3-38627_romantic-love-couple-wallpaper-hd-design-inspiration-boy.jpg', alt: "two-lovers"}
    ];

    const thePickedImg = this.state.src;
    console.log('Double Checking: ' + thePickedImg);
    const {redirect} = this.state;
    if(redirect) {
      return <Redirect to={{ pathname:'/MainPage/CreateChapter', state: { referrer: thePickedImg } }} />;
    }
    return (
      <div className='testContainer'>
        <div className='titleHex'>Please select your background to start create your chapter.</div>
        <div className='hexsContainer' ref={this.myRef}>
          <Carousel slidesToShow={this.state.slidesToShow} wrapAround={this.state.wrapAround}>
      {arraySciFiPics.map((value) => {
        return (
          <div className='hexBox' key={value.id}>
            <img className="hexagon" src={value.src} alt={value.alt} onClick={() => this.handleClick(value.src)}/>
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
