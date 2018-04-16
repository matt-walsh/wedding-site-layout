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
            <h3>Best Man</h3>
          </div>
          <div className="griff-container">
            <img src={Griffin} alt="Griff"/>
            <h3>Groomsmen</h3>
          </div>
          <div className="ryan-container">
            <img src={Ryan} alt="Ryan"/>
            <h3>Groomsmen</h3>
          </div>
          <div className="will-container">
            <img src={Will} alt="Will"/>
            <h3>Groomsmen</h3>
          </div>
          <div className="jordan-container">
            <img src={Jordan} alt="Jordan"/>
            <h3>Groomsmen</h3>
          </div>
          <div className="walshs-container">
            <img src={Walshs} alt="Parents"/>
            <h3>Mom &amp; Dad</h3>
          </div>         
        </div>

        <div className="bride-container">
          <div className="tiff-container">
            <img src={Tiffany} alt="Tiffany"/>
            <h3>Maid of Honor</h3>
          </div>

          <div className="vanessa-container">
            <img src={Vanessa} alt="Vanessa"/>
            <h3>Bridesmaid</h3>
          </div>

          <div className="megan-container">
            <img src={Megan} alt="Megan"/>
            <h3>Bridesmaid</h3>
          </div>
          
          <div className="jen-container">
            <img src={Jen} alt="Jen"/>
            <h3>Bridesmaid</h3>
          </div>

          <div className="dan-container">
            <img src={Dan} alt="Dan"/>
            <h3>Bridesmaid</h3>
          </div>

          <div className="debra-container">
            <img src={Debra} alt="Debra"/>
            <h3>Mom</h3>
          </div>                
        </div>

        <div className="performers-container">
          <div className="oliver-container">
            <img src={Oliver} alt="Oliver"/>
            <h3>Ring Bearer</h3>
          </div>
          <div className="sadie-container">
            <img src={Sadie} alt="Sadie"/>
            <h3>Flower Girl</h3>
          </div>
        </div>

        <div className="staff-container">
          <div className="dona-container">
            <img src={Dona} alt="Dona"/>
            <h3>Photographer</h3>
          </div>
          <div className="fiona-container">
            <img src={Fiona} alt="Fiona"/>
            <h3>Master of Ceremony</h3>
          </div>
          <div className="chris-container">
            <img src={Chris} alt="Chris"/>
            <h3>Bar Tender</h3>
          </div>
        </div> 
      </div>
    );
  }
}