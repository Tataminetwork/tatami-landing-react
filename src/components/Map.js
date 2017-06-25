import React, { Component } from 'react';
import map from '../assets/images/map.png';
import Person from './Person';

export default class Map extends Component {
  
  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll(),
    };
  }

  render() {

    const { persons } = this.state;

    const PersonComponents = persons.map((todo) => {
        return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 map">
            {mapItems}
          </div>
        </div>
    </div>
    );
  }
}
// <img className="map__background" src={map} />