import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/ToDoList'


class App extends Component {
  state = { count: 0 };

  // building to do list
  render() {
    return (
      <div>
        <ToDoList />
      </div>
    )
  }
}

export default App;