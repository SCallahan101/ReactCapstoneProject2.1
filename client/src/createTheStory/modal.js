import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ModalBox extends Component {

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
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
