import React from 'react';
import Moment from 'moment';
import MomentTimezone from 'moment-timezone';
import './countdown.css';
 
export class Countdown extends React.Component {

  render() {
    let weddingDate = Moment("2018-08-18 1:00pm", "YYYY-MM-DD h:mma");
    let currentDate = Moment();
    return (
        <h1>{weddingDate.format("MMMM DD, YYYY h:mma")} - Only {weddingDate.diff(currentDate, "days")} Days Left!</h1>
    );
  }
}