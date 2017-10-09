import React, { Component } from 'react';
import Data from '../data.json';

export default class Person extends Component {

  constructor(props) {
    super(props);
    this.userLanguage = 'en';
    this.person = this.props.person;
    this.request = Data.content[this.person.requestId];
    this.responseId = 0;
    this.response = Data.content[this.responseId];
    
    this.state = {
      fade: true,
      shake: false,
      showRequestBubble: false,
      showResponseBubble: false
    };

    this.style = {
      top: this.person.top,
      left: this.person.left,
      width: this.person.width,
      opacity: 0
    };

    setTimeout(()=>{
      const style = this.style;
      style.opacity = 1;
      this.setState({
        style,
      });
    }, Math.floor(Math.random() * 900) + 1 )
    
  }

  clickOnPerson(e) {
    this.setState({ showRequestBubble: true, fade: false });
    this.props.handleQuestion(this.props.index,this.person['requestId']);
  }

  render() {
    return (
      <div className={'map-item ' + (this.state.fade ? '--fade' : '') + ' ' + (this.state.shake ? '--shake': '')} style={this.style}>
        <img onClick={this.clickOnPerson.bind(this)} className="map-item__avatar" src={this.person.avatar}/>
        <div className={'map-item__bubble ' + (this.state.showRequestBubble ? '' : '--hidden') + ' ' + this.request.color + ' ' + this.person.bubbleClass}>
          <span dangerouslySetInnerHTML={{__html: this.request.request[this.userLanguage]}}></span>
          <img className="map-item__bubble__lang-image" src={this.request.flag}/>
        </div>
        <div className={'map-item__bubble map-item__bubble__response ' + (this.state.showResponseBubble ? '' : '--hidden') + ' ' + this.response.color + ' ' + this.person.bubbleClass}> 
          <i className="fa fa-volume-up"></i>
          <span dangerouslySetInnerHTML={{__html: this.response.response}}></span>
        </div>
    	</div>
    );
  }
}
