import React, { Component } from 'react';
import map from '../assets/images/map.png';
import Person from './Person';

export default class Map extends Component {
  
  constructor() {
    super();
    this.state = {};
  }

  render() {

    const { persons } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 map">
          </div>
        </div>
    </div>
    );
  }
}
// <img className="map__background" src={map} />