import React, {Component} from 'react';
import firebase from 'firebase';

class OneRepMax extends Component{

    constructor() {
        super();
        this.state = {
            userInput: "",
        };
      }

    handleChange = event => {
        this.setState({
            userInput: event.target.value,
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const dbRef = firebase.database().ref();
        dbRef.push(this.state.userInput);
    };

    
    render() {
        return (
          <div className="input">
            <label htmlFor="oneRep">One Rep Max: </label>
            <input 
              id="oneRep" 
              type="number"
              name="userInput"
              onChange={this.handleChange}
              value={this.state.userInput}
            />
            <label> lbs</label>
            <button onClick={this.handleSubmit}>Submit</button>
            <h2>Four Week plan based off <span className="highlightOrange">{this.state.userInput}</span>&nbsp;lbs</h2>
          </div>
        );
      };
}

export default OneRepMax;