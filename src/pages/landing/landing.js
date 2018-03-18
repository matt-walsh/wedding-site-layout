import React from 'react';
import './landing.css';
import WeddingCollage from './images/collage.png'
 
export class Landing extends React.Component {
  render() {
    return (
      <div className="landing-content">
        <img src={WeddingCollage} alt="Sonja and Matt In Love" height="100%" width="100%"/>
      </div>
    );
  }
}