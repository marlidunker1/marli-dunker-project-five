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
          <div className="Input">
              <label htmlFor="oneRep">Type in your One Rep Max:</label>
              <input 
                id="oneRep" 
                type="number"
                name="userInput"
                onChange={this.handleChange}
                value={this.state.user}
              />
              <button onClick={this.handleSubmit}>Submit</button>
          </div>
        );
      };
}

export default OneRepMax;