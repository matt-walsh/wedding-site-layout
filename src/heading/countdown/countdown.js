import React from 'react';
import Moment from 'moment';
import MomentTimezone from 'moment-timezone';
import './countdown.css';
 
export class Countdown extends React.Component {

  render() {
    return (
        <h1>{Moment.tz.guess()}</h1>
    );
  }
}