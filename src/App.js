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
         <p className="headerP highlightBlue">Enter maximum weight you can lift in an exersize of your choice to produce a four week plan to improve that maximum weight."Save" button saves your max weight andprogress will be maintained by checkbox. Hit reset to start anew. <span className="knownError">Known limitation:you have to click checkbox twice to save "check".</span></p>
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
