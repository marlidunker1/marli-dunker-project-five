import React, {Component} from 'react';
import firebase from "./firebase";
import OneRepMax from './OneRepMax';
import SetCalc from './SetCalc';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header >
         <h1>Hello World</h1>
         <form>
          <OneRepMax />
          <SetCalc />
         </form>
        </header>
      </div>
    );
  };
}

export default App;
