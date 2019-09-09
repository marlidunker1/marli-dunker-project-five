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
        console.log('checkbox state', event.target.checked);
        const dbRef = firebase.database().ref('/completed');
        
        this.setState({
          isChecked: event.target.checked,
        });
       
        dbRef.set(this.state.isChecked);
    };

    componentDidMount() {
      //Get data from firebase
      const dbRef = firebase.database().ref('/maxWeight');
      const dbRefTwo = firebase.database().ref('/completed');
      //update us when new values get added to our database - "value" is their custom firebase event listener
      dbRef.on("value", data => {
        //response is maxWEight
        const maxWeight = data.val();
        this.setState({
            userInput: maxWeight,
        });

      });

      dbRefTwo.on("value", data => {
        const completed = data.val();
        console.log(completed);

        this.setState({
            isChecked: completed,
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
                  checked={this.state.isChecked}
                  onChange={this.handleChange}
                  value="isChecked"
                />
              </label>
            </div>
          </div>
        );
      };
}

export default SetCalc;