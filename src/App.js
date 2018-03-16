import React from 'react';
import logo from './logo.svg';
import './App.css';

//Pages
import { Landing } from './pages/landing/landing.js';
import { Party } from './pages/party/party.js';
import { Gifts } from './pages/gifts/gifts.js';
import { Location } from './pages/location/location.js';
import { Schedule } from './pages/schedule/schedule.js';
import { Menu } from './pages/menu/menu.js';
import { OurStory } from './pages/story/story.js';

//Navigation Bar
import { Nav } from './nav/nav.js'

//Page Heading
import { Heading } from './heading/heading.js'

class App extends React.Component {

  AppState = {
    Landing : "/",
    Story : "/story",
    Party : "/party",
    Gifts : "/gifts",
    Location : "/location",
    Schedule: "/schedule",
    Menu: "/menu"
  }
  constructor(props) {
    super(props);
    this.state = {content : this.AppState.Landing};
  }

  render() {
    console.log(this.state.content)
    let content;
    switch(this.state.content){
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

    return (
      <div className="app">

        <div className="header">
          <Heading/>
        </div>

        <div className="navigation">
          <Nav/>
        </div>

        <div className="content">
          {content}
        </div>
      </div>
    );
  }
}

export default App;
