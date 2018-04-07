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
import Walshs from "./images/Walshs.jpg"
import Debra from "./images/Debra.jpg"

//Staff Images
import Chris from "./images/Chris.jpg"
import Dona from "./images/Dona.jpg"
import Fiona from "./images/Fiona.jpg"
import Sadie from "./images/Sadie.jpg"
import Oliver from "./images/Oliver.jpg"
 
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
            <h2>Friend</h2>
          </div>
          <div className="ryan-container">
            <img src={Ryan} alt="Ryan"/>
            <h2>Friend</h2>
          </div>
          <div className="will-container">
            <img src={Will} alt="Will"/>
            <h2>Friend</h2>
          </div>
          <div className="jordan-container">
            <img src={Jordan} alt="Jordan"/>
            <h2>Nephew</h2>
          </div>
          <div className="walshs-container">
            <img src={Walshs} alt="Parents"/>
            <h2>Mom &amp; Dad</h2>
          </div>         
        </div>

        <div className="bride-container">
          <div className="tiff-container">
            <img src={Tiffany} alt="Tiffany"/>
            <h2>Maid of Honor</h2>
          </div>

          <div className="vanessa-container">
            <img src={Vanessa} alt="Vanessa"/>
            <h2>Sister</h2>
          </div>

          <div className="megan-container">
            <img src={Megan} alt="Megan"/>
            <h2>Sister</h2>
          </div>
          
          <div className="jen-container">
            <img src={Jen} alt="Jen"/>
            <h2>Sister in Law</h2>
          </div>

          <div className="dan-container">
            <img src={Dan} alt="Dan"/>
            <h2>Friend</h2>
          </div>

          <div className="debra-container">
            <img src={Debra} alt="Debra"/>
            <h2>Mom</h2>
          </div>                
        </div>

        <div className="performers-container">
          <div className="oliver-container">
            <img src={Oliver} alt="Oliver"/>
            <h2>Ring Bearer</h2>
          </div>
          <div className="sadie-container">
            <img src={Sadie} alt="Sadie"/>
            <h2>Flower Girl</h2>
          </div>
        </div>

        <div className="dona-container">
          <img src={Dona} alt="Dona"/>
          <h2>Photographer</h2>
        </div>
        <div className="fiona-container">
          <img src={Fiona} alt="Fiona"/>
          <h2>Master of Ceremony</h2>
        </div>
        <div className="chris-container">
          <img src={Chris} alt="Chris"/>
          <h2>Bar Tender</h2>
        </div> 
      </div>
    );
  }
}