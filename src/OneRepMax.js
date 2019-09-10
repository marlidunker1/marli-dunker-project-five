import React, {Component} from 'react';
import firebase from 'firebase';

class OneRepMax extends Component{

    constructor() {
        super();
        this.state = {
            userInput: 0,
        };
      }

    handleChange = event => {
        this.setState({
            userInput: event.target.value,
        });
    };

    handleClick = event => {
        event.preventDefault();
        const input = this.state.userInput;
        const dbRef = firebase.database().ref('/maxWeight');
        //looking for /maxWeight folder every time we set a number as opposed to created a new number/key everytime
        this.refs.disbtn.setAttribute("disabled", "disabled");
        this.refs.disipt.setAttribute("disabled", "disabled");
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

    handleClickReset = () => {
       //Get data from firebase
       const dbRef = firebase.database().ref('/maxWeight');
       const dbRefWeekOne = firebase.database().ref('/completedWeekOne');
       const dbRefWeekTwo = firebase.database().ref('/completedWeekTwo');
       const dbRefWeekThree = firebase.database().ref('/completedWeekThree');
       const dbRefWeekFour = firebase.database().ref('/completedWeekFour');
      
       dbRef.set(0);
       dbRefWeekOne.set(false);
       dbRefWeekTwo.set(false);
       dbRefWeekThree.set(false);
       dbRefWeekFour.set(false);
    };
     
    render() {
        return (
          <div className="input">
            <label className="enter" htmlFor="oneRep">Enter One Rep Max: </label>
            <input 
              ref="disipt"
              className="maxNumber"
              id="oneRep" 
              type="number"
              name="userInput"
              onChange={this.handleChange}
              onSubmit={this.handleClick}
              value={this.state.userInput}
            />
            <label className="lbs"> lbs</label>
            <button ref="disbtn" className="save" onClick={this.handleClick}>Save</button>
            <button className="reset" onClick={this.handleClickReset}>Reset</button>
            <h2>Four Week plan based off <span className="highlightOrange">{this.state.userInput}</span>&nbsp;lbs</h2>
          </div>
        );
     };
}

export default OneRepMax;