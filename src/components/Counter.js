import React from "react";

//Note: state property lives in class component only, not function
export default class Counter extends React.Component {

    //defaul function of react. know if object is mounted
    componentWillUnmount() {
        console.log('unmounting');
    }
    componentDidMount() {
        console.log('mounting');
    }


    //usual way to create constructor
    //if initial state is dependent on props
    constructor(props) {
        super(props);
        this.state = { count: 0 }
        // this.state = {
        //     count: props.initialCount
        // }
    }

    //Note: if only to initialize, constructor can be ignored
    // state = {
    //     count: 0,
    // }

    //wont work with this type of function
    // handleButtonClick() {
    //     // console.log("button clicked");
    //     console.log(this.state.count); 
    // }

    //Note: will work with this type of function
    //will bind the data from above
    incrementButton = () => {
        //not recommended, mutating function
        // this.state.count += 1;

        //Note: recommended setState function, pass in an obj with new state
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
        // console.log("render function called")
        return (
            <div >
                <div > count: {
                    this.state.count
                }
                </div>
                <button onClick={this.decrementButton} > decrement </button>
                <button onClick={this.incrementButton} > increment </button>
            </div>
        )
    }
}