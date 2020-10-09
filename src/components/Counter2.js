import React from "react";


export default class Counter extends React.Component {
    // to lift the state = put all function on parent component
    //state + functions

    // constructor(props) {
    //     super(props);
    //     this.state = { count: 0 }
    // }

    // incrementButton = () => {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    //     console.log(this.state);
    // }

    // decrementButton = () => {
    //     this.setState({
    //         count: this.state.count - 1
    //     })

    //     console.log(this.state);
    // }
    render() {
        return (
            <div>
                <div> count: {this.props.count}</div>
                <button onClick={this.props.decrementButton} > decrement </button>
                <button onClick={this.props.incrementButton} > increment </button>
            </div>
        )
    }
}