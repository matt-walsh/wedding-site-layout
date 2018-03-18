import React from 'react';
import './story.css';
import NSCC from "./images/nscc.jpg"
import Couple from "./images/couple.png"
 
export class OurStory extends React.Component {
  render() {
    return (
      <div className="story-content">
        <h2>Our Story</h2>
        <div className="left-col">
          <p>
            We met at the start of college in 2007 when we both enrolled in the Computer Electronics Technician course. 
            At the time Matt was single but Sonja was dating someone. They became friends and worked on many school 
            assignments together. In second year Sonja dropped out of college but they continued to stay in contact and remained friends. 
          </p>
          <p>
            In 2013, Sonja and her boyfriend ended things. She enrolled in college to take Optical Sciences. Before school started Sonja went on a vacation to Ottawa, 
            visiting one of her friends, Dona Neves, her first flight and big vacation. During that time Sonja reached out to Matt to see how he had been doing, 
            as they hadn’t talked for a while. She told Matt that she had used to have a little crush on him but never told him or acted on it because she was with someone at the time. 
          </p>
        </div>
        <div className="right-col">
          <img className="nscc-photo" src={NSCC} alt="NSCC IT Campus" />
        </div>
        <div className="left-col">
          <p>
            Both were very busy that summer and didn’t have a chance to meet up until August 15th. Matt stopped by Wal-Mart to pick Sonja up after work just to hang out and catch up. 
            They both went for a walk down by the Armdale rotary. They stopped under a tree at Horseshoe Island Park. That was where Matt kissed Sonja, and told her that he had always 
            wanted to do that.  We have been together ever since.
          </p>
          <p>
            We purchased our first car together in 2015. Our first home in 2017. We have gone on vacation together each year, Ottawa, Jamaica, Portland Maine. 
            We have three cats, Worf, Midna, Bowser, and a leopard gecko, Doctor Connors. Sonja completed optical science and now has her career as an optician at Wal-Mart. 
            Matt completed college with a concentration in Programming and is currently looking for a job in his field. 
          </p>
          <p>
            We are excited for the next chapter in our lives, as we set out to get married.
          </p>
        </div>
        <div className="right-col">
          <img className="couple-photo" src={Couple} alt="The Happy Couple" />
        </div>
      </div>
    );
  }
}