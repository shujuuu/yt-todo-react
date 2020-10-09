import React from "react";

//exercise 4 state
const initialState = {
    username: "",
    email: "",
    password: "",
    nameErr: "",
    emailErr: "",
    pwdErr: ""
}
class MyForm extends React.Component {
    //exercise 1-3 state
    //controlled field, save what user types with state
    // state = {
    //     name: "",
    //     diary: "",
    //     isSunny: false,
    //     mood: "Exciting"
    // }

    //exercise 4
    state = initialState;

    //exercise 1 functions
    //get all change event, which includes value
    //update the state object
    // handleInput = (event) => {
    //     // console.log(event.target.value);
    //     this.setState({ name: event.target.value });
    // }
    // handleTextarea = (event) => {
    //     this.setState({ diary: event.target.value });
    // }
    // handleChecked = (event) => {
    //     this.setState({ isSunny: event.target.checked });
    // }
    // handleSelect = (event) => {
    //     this.setState({ mood: event.target.value });
    // }
    // handleClick = () => {
    //     console.log(this.state);
    // }

    //exercise 2 functions
    //optimizing everything into one function
    //takes in 2 extra parameter, property name, is it checked
    // handleAllChange = (event, theProperty, isChecked) => {
    //     this.setState({ [theProperty]: isChecked ? event.target.checked : event.target.value });
    // }
    // handleClick = () => {
    //     console.log(this.state);
    // }


    //exercise 3 function
    //optimize further
    //pass the property of name as props
    // handleAllChange = (event, theProperty, isChecked) => {
    //     const isCheckbox = event.target.type === 'checkbox';
    //     this.setState({ [event.target.name]: isCheckbox ? event.target.checked : event.target.value });
    // }
    // handleClick = (event) => {
    //     console.log(this.state);
    //     //when sumit is triggered, form is defaulted to auto refresh, empty inputs
    //     //to prevent, call preventDefault method
    //     event.preventDefault();
    // }

    //exercise 4 function
    handleAllChange = (event, theProperty) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleClick = (event) => {
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            //clear the form
            this.setState(initialState);
        }
        event.preventDefault();
    }
    validate = () => {
        let nameErr = "";
        let emailErr = "";
        let pwdErr = "";

        if (!this.state.username) {
            nameErr = "username can not be empty";
        }

        if (!this.state.email.includes('@')) {
            emailErr = "invalid email"
        }
        if (this.state.password <= 8) {
            pwdErr = "Password must be atleast 8 characters";
        }

        if (emailErr || nameErr || pwdErr) {
            //you can pass object to setState method
            //useful if key and variable is the same e.g. emailErr: emailErr
            this.setState({ emailErr, nameErr, pwdErr });
            return false;
        }
        return true;
    }

    render() {
        //exercise 1 HTML
        //listen to event from user with onChange function
        //reflect on screen
        // return (
        //     <div>
        //         <input value={this.state.name} onChange={this.handleInput} type="text" />
        //         <textarea value={this.state.diary} onChange={this.handleTextarea} type="text" />
        //         <input checked={this.state.isSunny} onChange={this.handleChecked} type="checkbox" />Sunny
        //         <select value={this.state.mood} onChange={this.handleSelect} name="" id="">
        //             <option>Exciting</option>
        //             <option>Usual</option>
        //             <option>Sad</option>
        //             <option>Exhausting</option>
        //         </select>
        //         <button onClick={this.handleClick}>submit</button>
        //     </div>
        // );

        //exercise 2 HTML
        //optimizing everything into one function
        //change all onChange function with additional individual parameters
        // return (
        //     <div>
        //         <input value={this.state.name} onChange={event => { this.handleAllChange(event, "name") }} type="text" />
        //         <textarea value={this.state.diary} onChange={event => { this.handleAllChange(event, "diary") }} type="text" />
        //         <input checked={this.state.isSunny} onChange={event => { this.handleAllChange(event, "isSunny", true) }} type="checkbox" />Sunny
        //         <select value={this.state.mood} onChange={event => { this.handleAllChange(event, "mood") }} name="" id="">
        //             <option>Exciting</option>
        //             <option>Usual</option>
        //             <option>Sad</option>
        //             <option>Exhausting</option>
        //         </select>
        //         <button onClick={this.handleClick}>submit</button>
        //     </div>
        // );

        //exercise 3 HTML
        //optimize further
        //make use of input, textarea's name property, assign each with their own
        //use form instead of div
        //change button to name="submit" to call the function
        // return (
        //     <form onSubmit={this.handleSubmit}>
        //         <input
        //             name="name"
        //             value={this.state.name}
        //             onChange={this.handleAllChange}
        //             type="text" />
        //         <textarea
        //             name="diary"
        //             value={this.state.diary}
        //             onChange={this.handleAllChange}
        //             type="text" />
        //         <input
        //             name="isSunny"
        //             checked={this.state.isSunny}
        //             onChange={this.handleAllChange}
        //             type="checkbox" />Sunny
        //         <select
        //             name="mood"
        //             value={this.state.mood}
        //             onChange={this.handleAllChange}>
        //             <option>Exciting</option>
        //             <option>Usual</option>
        //             <option>Sad</option>
        //             <option>Exhausting</option>
        //         </select>
        //         <button
        //             onClick={this.handleClick}>submit
        //         </button>
        //     </form>
        // );

        //exercise 4 HTML
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name="username"
                    placeholder="username"
                    value={this.state.username}
                    onChange={this.handleAllChange}
                />
                {/* {this.state.nameErr ? (<p className="errorMsg">{this.state.nameErr}</p>) : null} */}
                <p className="errorMsg">{this.state.nameErr}</p>
                <input
                    name="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.handleAllChange} />
                <p className="errorMsg">{this.state.emailErr}</p>
                <input
                    name="password"
                    placeholder="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleAllChange} />
                <p className="errorMsg">{this.state.pwdErr}</p>
                <button
                    onClick={this.handleClick}>submit
                </button>
            </form>
        );
    }
}

export default MyForm;