import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter2'


class App extends Component {

  // lifting state
  // keep state inside app
  // benefit: communicate + synchronize across component
  // AKA all component on screens will be the same

  state = { count: 0 }

  incrementButton = () => {
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state);
  }

  decrementButton = () => {
    this.setState({
      count: this.state.count - 1
    })

    console.log(this.state);
  }

  render() {
    return (
      <div>
        {/* passing in functions */}
        <Counter
          count={this.state.count}
          incrementButton={this.incrementButton}
          decrementButton={this.decrementButton} />

        <Counter
          count={this.state.count}
          incrementButton={this.incrementButton}
          decrementButton={this.decrementButton} />
      </div>
    );
  }
}

export default App;