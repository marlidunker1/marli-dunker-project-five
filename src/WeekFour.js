import React, {Component} from 'react';
import firebase from 'firebase';

class WeekFour extends Component{

    constructor() {
        super();
        this.state = {
            isComplete: false,
            userInput: 0,
        };
      }

    handleChange = event => {
        const dbRef = firebase.database().ref('/completedWeekFour');      
        this.setState({
          isChecked: event.target.checked,
        });     
        dbRef.set(this.state.isChecked);
    };

    componentDidMount() {
      //Get data from firebase
      const dbRef = firebase.database().ref('/maxWeight');
      const dbRefTwo = firebase.database().ref('/completedWeekFour');
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
        this.setState({
            isChecked: completed,
        });
      });
    };
        
    render() {
        return (
          <div className="set">
            <h3>Week 4</h3>
            <div>
              <h4>Set 1</h4>
              <p>5 reps of {Math.ceil((this.state.userInput*.40)/5)*5} lbs </p>
              {/* number will always round up to nearest five as there a no 1 lb plates */}
            </div>
            <div>
              <h4>Set 2</h4>
              <p>5 reps of {Math.ceil((this.state.userInput*.50)/5)*5} lbs </p>
              {/* number will always round up to nearest five as there a no 1 lb plates */}
            </div>
            <div>
              <h4>Set 3</h4>
              <p>5 reps of {Math.ceil((this.state.userInput*.60)/5)*5} lbs </p>
              {/* number will always round up to nearest five as there a no 1 lb plates */}
            </div>
            <div className="setInput">
              <label className="setLabel">
                Complete:
                <input
                   type="checkbox"
                   checked={this.state.isChecked}
                   onChange={this.handleChange}
                   value={this.state.isChecked}
                />
              </label>
            </div>
          </div>          
        );
    };
}

export default WeekFour;