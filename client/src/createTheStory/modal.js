import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ModalBox extends Component {

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  // state = {
  //   show: false
  // };
  // showModal = e => {
  //   this.setState({
  //     show: true
  //   });
  // };
  render(){
    if(!this.props.show){
      return null;
    }
    return (
      <div className='formContainer'>
        <div>
        {this.props.children}
        </div>
      </div>
    );
  }
}
export default ModalBox;
