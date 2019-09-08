import React, {Component} from 'react';
import OneRepMax from './OneRepMax'
import firebase from 'firebase';

class SetCalc extends Component{
    
    render() {
        return (
          <div className="Set">
              <form>
                <label></label>
                <input type="checkbox" />
              </form>
          </div>
        );
      };
}

export default SetCalc;