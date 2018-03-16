import React from 'react';

//Content Pages
import { Landing } from './pages/landing/landing.js';
import { Party } from './pages/party/party.js';
import { Gifts } from './pages/gifts/gifts.js';
import { Location } from './pages/location/location.js';
import { Schedule } from './pages/schedule/schedule.js';
import { Menu } from './pages/menu/menu.js';
import { OurStory } from './pages/story/story.js';

export class Content extends React.Component{

    render(){
        let content;
        switch(window.location.pathname){
          case "/":{
            content =  <Landing />;
            break;
          }
    
          case "/story":{
            content =  <OurStory />;
            break;
          }
    
          case "/party":{
            content =  <Party />;
            break;
          }
    
          case "/gifts":{
            content =  <Gifts />;
            break;
          }
          case "/location":{
            content =  <Location />;
            break;
          }
          case "/schedule":{
            content =  <Schedule />;
            break;
          }
          case "/menu":{
            content =  <Menu />;
            break;
          }
    
          default: {
            content =  <h2>Page Not Found</h2>;
          }
        }

        return content;
    }
}