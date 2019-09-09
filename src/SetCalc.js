import React, {Component} from 'react';
import OneRepMax from './OneRepMax'
import firebase from 'firebase';

class SetCalc extends Component{

    constructor() {
        super();
        this.state = {
            isComplete: false,
        };
      }

    handleChange = event => {
        this.setState({
            isComplete: event.target.value,
        });
        const dbRef = firebase.database().ref();
        dbRef.push(this.state.isComplete);
    };

    
    render() {
        return (
          <div className="Set">
           <label>
               Complete:
            <input
             type="checkbox"
             name="isComplete"
             checked={this.state.isComplete}
             onChange={this.handleChange}
            />
           </label>
          </div>
        );
      };
}

export default SetCalc;