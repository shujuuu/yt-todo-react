import React, { Component } from 'react';
import './App.css';
// import MyForm from './components/Form';
import RandomUser from './components/RandomUser';

class App extends Component {
  state = {
    visible: true
  }

  render() {
    return (
      <div className="App"><RandomUser /></div>
    );
  }
}

export default App;