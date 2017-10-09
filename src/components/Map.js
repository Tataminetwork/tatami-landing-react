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
  }

  handleQuestion(senderIndex,requestId) {
    console.log(senderIndex,requestId);    
  }
 

  render() {
    const { people } = this.state;
    const PeopleComponents = people.map((person, index) => {
      return <Person key={index}
                     index={index}
                     handleQuestion={this.handleQuestion.bind(this)} 
                     person={person}/>;
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col map">
            <img className="map__background" src="images/map.png" />
            {PeopleComponents}
          </div>
        </div>
    </div>
    );
  }
}
