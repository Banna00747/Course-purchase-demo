import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {

  render() {
    var courses =[
      { name: 'iOS dev course', price: 199 },
      { name: 'Front end dev course', price: 299 },
      { name: 'Pentesting dev course', price: 399 },
      { name: 'Bug bounty dev course', price: 599 }
    ];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Course purchase page</h2>
        </div>
         <Body />
        <Parent />
        <Coursesales items={courses}/>
      </div>
    );
  }
}

class Body extends Component {
  constructor(props){
    super(props);

    this.state = {
      r: 0
    };
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }

  getRandomNumber() {
    // console.log('randome number called');
    this.setState({
      r: Math.floor(Math.random() * 10)
    });
  }
  render(){
    return(
      <div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.getRandomNumber}>Random Number</button>
        <Numbers myNumber={this.state.r}/>




      </div>
    );
  }
}

class Numbers extends Component {
  render(){
    return(
      <div>
        <br />
       {this.props.myNumber}
      </div>
    );
  }
}




class Parent extends Component {
  render(){
    return(
      <div>
        <h2>Just some info</h2>
        <Cars msg="hey you" model="1234" />
      </div>
    );
  }
}

class Cars extends Component {
  render(){
    return(
      <div>
        <h3>I'm from cars component</h3>
        <p>{this.props.msg}</p>
        <p>{this.props.model}</p>
      </div>
    );
  }
}

export default App;
