import React from 'react';
import './heading.css';
import { Countdown } from './countdown/countdown'
 
export class Heading extends React.Component {
  render() {
    return (
      <div>
        <h1>Symonds-Walsh Wedding</h1>
        <Countdown />
      </div>
    );
  }
}