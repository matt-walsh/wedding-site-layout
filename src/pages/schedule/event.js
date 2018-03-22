import React from 'react';
 
export class Calendar extends React.Component {

  constructor(props) {
    super(props);
    this.DrawSchedule = this.DrawSchedule.bind(this);
  }


  DrawSchedule(){
    let calendarJSX = (
        <ul>
            <li>Ceremony 4:00pm</li>
            <li>Social Hour 4:30pm</li>
            <li>Dinner 5:30pm</li>
            <li>Cake Cutting 6:00pm</li>
            <li>First Dance 6:30pm</li>
            <li>Party 7:00pm</li>
            <li>Sparkler Exit 11:55pm</li>
        </ul>
    );
    calendarJSX += ( <li>Ceremony 4:00pm</li> )

    return calendarJSX;
  }

  render() {
    return this.DrawSchedule();
  }
}