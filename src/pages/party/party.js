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
            <img src={Mark}/>
            <h2>Best Man</h2>
          </div>
          <div className="griff-container">
            <img src={Griffin} alt="Picture of Griff"/>
            <h2>Associate of Groom</h2>
          </div>
          <div className="ryan-container">
            <img src={Ryan} alt="Picture of Ryan"/>
            <h2>Associate of Groom</h2>
          </div>
          <div className="will-container">
            <img src={Will} alt="Picture of Will"/>
            <h2>Associate of Groom</h2>
          </div>
          <div className="jordan-container">
            <img src={Jordan} alt="Picture of Jordan"/>
            <h2>Associate of Groom</h2>
          </div>          
        </div>

        <div className="bride-container">
          <div className="tiff-container">
            <img src={Tiffany} alt="Picture of Tiffany"/>
            <h2>Maid of Honor</h2>
          </div>

          <div className="vanessa-container">
            <img src={Vanessa} alt="Picture of Vanessa"/>
            <h2>Sister of the Bride</h2>
          </div>

          <div className="megan-container">
            <img src={Megan} alt="Picture of Megan"/>
            <h2>Sister of the Bride</h2>
          </div>
          
          <div className="jen-container">
            <img src={Jen} alt="Picture of Jen"/>
            <h2>Sister in Law of the Bride</h2>
          </div>

          <div className="dan-container">
            <img src={Dan} alt="Picture of Dan"/>
            <h2>Best Friend of the Bride</h2>
          </div>                 
        </div> 
      </div>
      
    );
  }
}