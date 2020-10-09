import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter'

class App extends Component {
  state = {
    visible: true
  }

  render() {
    return (
      //componenet life cycle -> data does not keep when remounted to page
      //work around for that is using css displays or visibility property
      <div className="App">
        {/* {this.state.visible ? <Counter /> : null} */}
        {/* <div style={this.state.visible ? {} : { display: 'none' }}><Counter /></div> */}
        <div className={this.state.visible ? "visible" : "hidden"}> <Counter /></div>
        <button onClick={() => { this.setState({ visible: !this.state.visible }) }}>toggle visibility of counter component
        </button>
      </div>
    );
  }
}

export default App;