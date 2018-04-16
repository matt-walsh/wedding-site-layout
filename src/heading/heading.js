import React from 'react';
import './heading.css';
import { Countdown } from './countdown/countdown'
 
export class Heading extends React.Component {
  render() {
    return (
      <div>
        <h1>SYMONDS AND WALSH WEDDING</h1>
        <Countdown />
      </div>
    );
  }
}