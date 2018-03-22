import React from 'react';
import './accommodations.css';
 
export class Accommodations extends React.Component {
  render() {
    return (
        <div className="accommodataions-container">
            <p>If you are looking for accommodations during the wedding, the following is a list of local establishments 
                that rent rooms.
            </p>
            <div className="hotel-container">
                <div className="ancorage">
                    <h3>Anchorage House &amp; Cottages</h3>
                    <ul>
                        <li>56 Shore Club Road</li> 
                        <li>Phone # (902) 857-9402</li>
                        <li>
                            <a href="http://www.anchoragehouse.com/">http://www.anchoragehouse.com/</a>
                        </li>
                    </ul>
                </div>

                <div className="surfside">
                    <h3>Surfside Inn</h3>
                    <ul>
                        <li>9609 St Margaret’s Bay Road</li> 
                        <li>Phone # (902) 857-2417</li>
                        <li>
                            <a href="http://www.thesurfsideinn.com/">http://www.thesurfsideinn.com/</a>
                        </li>
                    </ul>
                </div>

                <div className="dauphinee">
                    <h3>Dauphinee Inn</h3>
                    <ul>
                        <li>167 Shore Club Road</li> 
                        <li>Phone # (902) 857-1790</li>
                        <li>
                            <a href="http://www.dauphineeinn.com/">http://www.dauphineeinn.com/</a>
                        </li>
                    </ul>
                </div>

                <div className="beach">
                    <h3>Hubbards Beach Campgrounds &amp; Cottages</h3>
                    <ul>
                        <li>241 Shore Club Road</li> 
                        <li>Phone # (902) 857-9460</li>
                        <li>
                            <a href="https://www.hubbardsbeach.com/">https://www.hubbardsbeach.com/</a>
                        </li>
                    </ul>
                </div>

                <div className="pleasent">
                    <h3>Pleasant View Bed And Breakfast</h3>
                    <ul>
                        <li>9301 St Margarets Bay Road</li> 
                        <li>Phone # (902) 857-1201</li>
                        <li>
                            <a href="http://www.pleasantviewbandb.com/">http://www.pleasantviewbandb.com/</a>
                        </li>
                    </ul>
                </div>         
            </div>            
        </div>
    );
  }
}