import React, { Component } from 'react';
import Data from '../data.json';

export default class Person extends Component {

  constructor(props) {
    super(props);
    this.userLanguage = 'en';
    this.request = Data.content[this.props.person.requestId];
    this.showRequestBubble = true;
    this.showResponseBubble = true;
    this.responseId = 0;
    this.response = Data.content[this.responseId];
  }
  render() {
    return (
      <div className="map-item">
        <img className="map-item__avatar" src={this.props.person.avatar}/>
        <div className={'map-item__bubble ' + this.request.color + ' ' + this.props.person.bubbleClass}>
          <span dangerouslySetInnerHTML={{__html: this.request.request[this.userLanguage]}}></span>
          <img className="map-item__bubble__lang-image" src={this.request.flag}/>
        </div>
        <div className={'map-item__bubble map-item__bubble__response ' + this.response.color + ' ' + this.props.person.bubbleClass}> 
          <i className="fa fa-volume-up"></i>
          <span dangerouslySetInnerHTML={{__html: this.response.response}}></span>
        </div>
    	</div>
    );
  }
}
