import React, { Component } from 'react';
import './App.css';
import ImageSlider from './components/ImageSlider';

class App extends Component {
  state = {
    visible: true
  }

  render() {

    //conditional statement

    //3. using if statement 
    //wont render anything down cos return
    // if (!this.state.visible) {
    //   return <div>display nothing</div>
    // }

    //change variable
    let slider = this.state.visible ? <ImageSlider /> : <div>a image sldier is hidden</div>;
    if (!this.state.visible) {
      slider = <div>some text to redefine slider</div>
    }

    //2. toggle ternary
    const buttonText = this.state.visible ? "hide" : "show";
    // const slider = this.state.visible ? <ImageSlider /> : <div>a image sldier is hidden</div>;

    return (
      //1. using inline ternary
      <div className="App">
        {/* <ImageSlider /> */}
        {/* {this.state.visible ? <ImageSlider /> : null} */}
        {slider}
        <button onClick={() => { this.setState({ visible: !this.state.visible }) }}>
          {buttonText}
        </button>
      </div>
    );
  }
}

export default App;