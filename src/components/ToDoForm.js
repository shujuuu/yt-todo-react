import React from "react";
import shortid from 'shortid'

class ToDoForm extends React.Component {
    //1. add todo
    state = {
        text: "",
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //submit form and create new to do
        //keep at parents
        this.props.onSubmit({
            //pass three properties
            //value
            //isComplete?
            //id for each item in array -> install and import third-party library -> npm install shortid
            text: this.state.text,
            isComplete: false,
            id: shortid.generate()
        });

        //empty field when submit
        this.setState({
            text: ""
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="text" value={this.state.text} onChange={this.handleChange} placeholder="what you doing today" />
                <button onClick={this.handleSubmit}>add todos</button>
            </form>
        )
    }
}


export default ToDoForm;