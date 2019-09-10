import React, {Component} from 'react';
import firebase from "./firebase";
import OneRepMax from './OneRepMax';
import WeekOne from './WeekOne';
import WeekTwo from './WeekTwo';
import WeekThree from './WeekThree';
import WeekFour from './WeekFour';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <header >
         <h1>Strength Program</h1>
         <p className="headerP highlightBlue">Give the maximum weight that you can lift for one repetition in one of the the four core strength lifts (deadlift, squat, benchpress, or overhead press) to generate a four week strength plan to improve that maximum weight.</p>
        </header>
        <main>
         <form>
          <fieldset className="inputField">
           <OneRepMax />
          </fieldset>
          <fieldset className="scheduleField">
            <WeekOne />
            <WeekTwo />
            <WeekThree />
            <WeekFour />
          </fieldset>
         </form>
        </main>
      </div>
    );
  };
}

export default App;
