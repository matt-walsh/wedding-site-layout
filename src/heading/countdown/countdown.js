import React from 'react';
import Moment from 'moment';
import './countdown.css';
 
export class Countdown extends React.Component {
  weddingDate = Moment("2018-08-18 1:00pm", "YYYY-MM-DD h:mma");

  TimeUntilWedding(){
    let timeLeft = this.weddingDate.diff(Moment(), "days");
    if(timeLeft < 1){
      return this.weddingDate.diff(Moment(), "hours") + " Hours"
    }
    return this.weddingDate.diff(Moment(), "days") + " Days";
  }

  render() {
    return (
        <h2>{this.weddingDate.format("MMMM DD, YYYY h:mma")} - Only {this.TimeUntilWedding()} Left!</h2>
    );
  }
}