import React from 'react';
import './location.css';
import MarioMap from './images/map.jpg'
 
export class Location extends React.Component {
  render() {
    return (
        <div className="location-container">
          <div className="address">
          <h3>Location</h3>
            <p>The wedding will be held at the Hubbards Barn in Hubbards, Nova Scotia.</p>
            <ul>
              <li>57 Highway #3</li>
              <li>RR # 2</li>
              <li>Hubbards NS </li>
              <li>B0J 1T0</li>
            </ul>
          </div>

          <div className="mario-map">
            <img src={MarioMap} alt="Map of hubbards in the Super Mario World style" />
          </div>

          <div className="directions">
            <h3>Directions</h3>
            <ul>
              <li>Take Highway # 103 to Exit 6 Hubbards</li>
              <li>
                <ul>
                  <li>If you are heading west on Highway # 103 (Towards the South Shore), turn left onto Mill Lake 1 Rd</li>
                  <li>If you are heading east on Highway # 103 (Towards Halifax), turn right onto Mill Lake Rd</li>
                </ul>
              </li>
              <li>Continue to the end of the road and make a left onto Highway # 3</li>
              <li>Continue straight for 1.2 km (3 mins) and Hubbards Barn will be on the right</li>
            </ul>
          </div>

          <div className="google-map">
            <iframe title="Directions to barn via Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2839.0921579190617!2d-64.07095668479624!3d44.63603337909989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b59ee96d1732ab5%3A0xda3aab2c2e1a16f6!2sHubbards+Barn+Association!5e0!3m2!1sen!2sca!4v1521729601020" width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
    );
  }
}