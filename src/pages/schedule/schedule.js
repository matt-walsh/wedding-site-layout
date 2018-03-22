import React from 'react';
import Moment from 'moment';
import './schedule.css';
 
export class Schedule extends React.Component {

  constructor(props) {
    super(props);
  }

  schedule = {
    "Ceremony" : Moment("4:00pm"),
    "Social Hour" : Moment("4:30pm"),
    "Dinner" : Moment("5:30pm"),
    "Cake Cutting" : Moment("6:00pm"),
    "First Dance" : Moment("6:30pm"),
    "Party" : Moment("7:00pm"),
    "Sparkler Exit" : Moment("11:55pm")
  };

  DrawSchedule(){
    return (<h1>Hello World!</h1>)
  }

  render() {
    return (
      <div className="schedule-container">
        {this.DrawSchedule()}
      </div>
    );
  }
}