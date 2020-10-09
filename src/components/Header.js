import React from "react";
import logo from '../logo.svg';

//if want to explore more than one thing with class component,
//export default class Header...
class Header extends React.Component {
    render() {

        //this.props = an object will all parameters from that
        return (
            <header className="App-header" >
                <img src={
                    logo
                }
                    className="App-logo"
                    alt="logo" />
                <p >Edit <code> src / App.js </code> and save to reload. </p>
                <a className="App-link"
                    href="https://www.youtube.com/watch?v=bd3UGjPwl0w&list=PLN3n1USn4xlntqksY83W3997mmQPrUmqM&index=3&ab_channel=BenAwad"
                    target="_blank"
                    rel="noopener noreferrer" >
                    {this.props.title} Ben Awad
          </a>

                <p>{this.props.num}</p>

                {/* <p>{this.props.obj.a}</p> */}
                {/* <p>{this.props.obj.b}</p> */}
                {/* <p>{this.props.obj}</p> */}{/* cant just display object */}
                <p>{JSON.stringify(this.props.obj)}</p>

                <p>{this.props.arr}</p>

                <p>{this.props.somefunction(200, 100)}</p>
            </header>
        )
    }
}

//can only export one
export default Header;

