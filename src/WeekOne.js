import React, {Component} from 'react';
import firebase from 'firebase';

class WeekOne extends Component{

    constructor() {
        super();
        this.state = {
            isComplete: false,
            userInput: "",
        };
      }

    handleChange = event => {
        console.log('checkbox state', event.target.checked);
        const dbRef = firebase.database().ref('/completedWeekOne');
        
        this.setState({
          isChecked: event.target.checked,
        });
       
        dbRef.set(this.state.isChecked);
    };

    componentDidMount() {
      //Get data from firebase
      const dbRef = firebase.database().ref('/maxWeight');
      const dbRefTwo = firebase.database().ref('/completedWeekOne');
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
            <h3>Week 1</h3>
            <div>
              <h4>Set 1</h4>
              <p>5 reps of {Math.ceil((this.state.userInput*.65)/5)*5} lbs </p>
              {/* number will always round up to nearest five as there a no 1 lb plates */}
            </div>
            <div>
              <h4>Set 2</h4>
              <p>5 reps of {Math.ceil((this.state.userInput*.75)/5)*5} lbs </p>
              {/* number will always round up to nearest five as there a no 1 lb plates */}
            </div>
            <div>
              <h4>Set 3</h4>
              <p>5 reps of {Math.ceil((this.state.userInput*.85)/5)*5} lbs </p>
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

export default WeekOne;