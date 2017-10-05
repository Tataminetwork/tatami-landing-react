import React, { Component } from 'react';
// import map from '../../public/images/map.png';
import Data from '../data.json'
import Person from './Person';

export default class Map extends Component {
  
  constructor() {
    super();
    this.state = {
      people: Data.people,
      content: Data.content,
    };
    console.log('constructor');
    console.log(this.state.people);
  }

  render() {

    const { people } = this.state;
    
    const PeopleComponents = people.map((person) => {
      return <img key={person.avatar} src={person.avatar}/>;
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 map">
            {PeopleComponents}
          </div>
        </div>
    </div>
    );
  }
}
// <img className="map__background" src={map} />