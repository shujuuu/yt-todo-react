import React, { Component } from 'react';
import './App.css';

//if export default is used from the other side, Header can be any name you give
import Header from './components/Header';

//if export is used instead of export default
//should be the exact name as the exported
import { Body, Body2 } from './components/Body';
import Counter from './components/Counter';

//render with function
// const Body = (props) => (
//   <div>
//     <p>{props.text}</p>
//     <p>{props.minusfunction(500, 2)}</p>
//   </div>
// )

//render with class component
// class Header extends Component {
//   render() {

//     //this.props = an object will all parameters from that
//     return (
//       <header className="App-header" >
//         <img src={
//           logo
//         }
//           className="App-logo"
//           alt="logo" />
//         <p >Edit <code> src / App.js </code> and save to reload. </p>
//         <a className="App-link"
//           href="https://www.youtube.com/watch?v=bd3UGjPwl0w&list=PLN3n1USn4xlntqksY83W3997mmQPrUmqM&index=3&ab_channel=BenAwad"
//           target="_blank"
//           rel="noopener noreferrer" >
//           {this.props.title} Ben Awad
//         </a>

//         <p>{this.props.num}</p>

//         {/* <p>{this.props.obj.a}</p> */}
//         {/* <p>{this.props.obj.b}</p> */}
//         {/* <p>{this.props.obj}</p> */}{/* cant just display object */}
//         <p>{JSON.stringify(this.props.obj)}</p>

//         <p>{this.props.arr}</p>

//         <p>{this.props.somefunction(200, 100)}</p>
//       </header>
//     )
//   }
// }

class App extends Component {

  // const addFn = (a, b) => a + b;
  // minus = (a, b) => {
  //   return a - b
  // }
  render() {
    return (
      // <div className="App" >
      //   {/* rendering from class component */}
      //   {/* 1. passing string, can omit{}, e.g. {"Hello"} */}
      //   {/* 2. passing number */}
      //   {/* 3. passing object */}
      //   {/* 4. passing array */}
      //   {/* 5. passing function */}
      //   <Header
      //     title="Hello from Youtube of"
      //     num={20}
      //     obj={{
      //       source: "Youtube",
      //       videos: 18
      //     }}
      //     arr={["install", "create", "passing data", "import component", "state", "setState", "Conditional render", "component life cycle", "form component"]}
      //     // somefunction={addFn}
      //     somefunction={(a, b) => a + b}
      //   />

      //   {/* rendering from function */}
      //   <Body text="im from body" minusfunction={this.minus} />
      // </div >
      <div>
        {/* <Counter /> */}
        <Counter initialCount={0} />
        <Counter initialCount={100} />
      </div>
    );
  }
}

export default App;