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
        const input = this.state.userInput;
        const dbRef = firebase.database().ref('/maxWeight');
        //looking for /reps folder every time we set a number as opposed to created a new number/key everytime
        console.log(dbRef)
        // we are using set instead of push because push pushes a new number while set acts as if you're reassigning a vairable (replacing)
        dbRef.set(input);
    };

    componentDidMount() {
      //Get data from firebase
      const dbRef = firebase.database().ref('/maxWeight');
      
      dbRef.on("value", data => {
        //response is maxWEight
        const maxWeight = data.val();
        this.setState({
            userInput: maxWeight,
        });
      });
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