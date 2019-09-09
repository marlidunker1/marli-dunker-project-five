import React, {Component} from 'react';
import firebase from 'firebase';

class SetCalc extends Component{

    constructor() {
        super();
        this.state = {
            isComplete: false,
            userInput: "",
        };
      }

    handleChange = event => {
        console.log('checkbox state', event.target.value);
        const dbRef = firebase.database().ref('/completed');

        const completed = event.target.value;
        console.log('this is va', completed);
        this.setState({
            isComplete: !completed,
        });
        // dbRef.push(this.state.isComplete);
    };

    componentDidMount() {
      //Get data from firebase
      const dbRef = firebase.database().ref('/maxWeight');
      const dbRefTwo = firebase.database().ref('/completed');
      //update us when new values get added to our database - "value" is their custom firebase event listener
      dbRef.on("value", data => {
        //response is maxWEight
        const maxWeight = data.val();
        console.log(maxWeight);

        this.setState({
            userInput: maxWeight,
        });

      });

      dbRefTwo.on("value", data => {
        //response is maxWEight
        const completed = data.val();
        console.log(completed);

        this.setState({
            isComplete: completed,
        });

      });

    };
    
    
    render() {
        return (
          <div className="set">
            <h4>Set 1</h4>
            <p>5 reps of {this.state.userInput*.65} lbs </p>
            <div className="setInput">
              <label className="setLabel">
                Complete:
                <input
                type="checkbox"
                name="isComplete"
                onChange={this.handleChange}
                />
              </label>
            </div>
          </div>
        );
      };
}

export default SetCalc;