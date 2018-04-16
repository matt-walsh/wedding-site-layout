import React from 'react';
import Moment from 'moment';
import './schedule.css';
 
export class Schedule extends React.Component {
  schedule = [
    { Event : "Ceremony", Time : Moment("4:00pm", "h:mma")},
    { Event : "Social Hour", Time : Moment("4:30pm", "h:mm a")},
    { Event : "Dinner", Time : Moment("5:30pm", "h:mm aa")},
    { Event : "Cake Cutting", Time : Moment("6:00pm", "h:mm a")},
    { Event : "First Dance", Time : Moment("6:30pm", "h:mm a")},
    { Event : "Party", Time : Moment("7:00pm", "h:mm a")},
    { Event : "Sparkler Exit", Time : Moment("11:55pm", "h:mm a")}
  ];

  GenerateRows(){
    //Sort the schedule from earliest to latest
    this.schedule.sort(function(a,b){
      if(a.Time.isAfter(b)){
        return -1;
      }
      else if(a.Time.isSame(b)){
        return 0
      }
      return 1;
    });

    let rows = [];
    this.schedule.forEach(element => {
      rows.push(<div key={element.Event} className="event">
                  <div className={element.Event + "-eventTitle"}>
                    <h3>{element.Event}</h3>  
                  </div>
                  <hr className="seperator"></hr>
                  <div className={element.Event + "-eventTime"}>
                    <h4>{element.Time.format("h:mma")}</h4>  
                  </div>
                </div>);
    });
    return (rows)
  }

  render() {
    return (
      <div className="schedule-container">
        {this.GenerateRows()}
      </div>
    );
  }
}