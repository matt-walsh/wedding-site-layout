import React from 'react';
import './party.css';

//Party Images
import Mark from "./images/Mark.jpg"
import Tiffany from "./images/Tiffany.jpg"
import Griffin from "./images/Griff.jpg"
import Ryan from "./images/Ryan.jpg"
import Will from "./images/Will.jpg"
import Jordan from "./images/Jordan.jpg"
import Vanessa from "./images/Vanessa.jpg"
import Megan from "./images/Megan.jpg"
import Jen from "./images/Jennifer.jpg"
import Dan from "./images/Daniel.jpg"
 
export class Party extends React.Component {
  render() {
    return (
      <div className="party-container">
        <div className="groom-container">
          <div className="mark-container">
            <img src={Mark} alt="Mark"/>
            <h2>Best Man</h2>
          </div>
          <div className="griff-container">
            <img src={Griffin} alt="Griff"/>
            <h2>Associate of Groom</h2>
          </div>
          <div className="ryan-container">
            <img src={Ryan} alt="Ryan"/>
            <h2>Associate of Groom</h2>
          </div>
          <div className="will-container">
            <img src={Will} alt="Will"/>
            <h2>Associate of Groom</h2>
          </div>
          <div className="jordan-container">
            <img src={Jordan} alt="Jordan"/>
            <h2>Associate of Groom</h2>
          </div>          
        </div>

        <div className="bride-container">
          <div className="tiff-container">
            <img src={Tiffany} alt="Tiffany"/>
            <h2>Maid of Honor</h2>
          </div>

          <div className="vanessa-container">
            <img src={Vanessa} alt="Vanessa"/>
            <h2>Sister of the Bride</h2>
          </div>

          <div className="megan-container">
            <img src={Megan} alt="Megan"/>
            <h2>Sister of the Bride</h2>
          </div>
          
          <div className="jen-container">
            <img src={Jen} alt="Jen"/>
            <h2>Sister in Law of the Bride</h2>
          </div>

          <div className="dan-container">
            <img src={Dan} alt="Dan"/>
            <h2>Best Friend of the Bride</h2>
          </div>                 
        </div> 
      </div>
      
    );
  }
}