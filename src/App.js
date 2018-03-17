import React from 'react';
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
    Landing : <Landing />,
    Story : <OurStory />,
    Party : <Party />,
    Gifts : <Gifts />,
    Location : <Location />,
    Schedule: <Schedule />,
    Menu: <Menu />,
    NotFound: <Landing />
  }
  constructor(props) {
    super(props);
    this.state = {content : this.AppState.Story};
    this.ChangePage = this.ChangePage.bind(this);
  }

  ChangePage(page){
    let newPage;
    switch (page) {
      case 'Landing':
        newPage = this.AppState.Landing;
        break;
      case 'Story':
        newPage = this.AppState.Story;
        break;
      case 'Party':
        newPage = this.AppState.Party;
        break;
      case 'Gifts':
        newPage = this.AppState.Gifts;
        break;
      case 'Location':
        newPage = this.AppState.Location;
        break;
      case 'Schedule':
        newPage = this.AppState.Schedule;
        break;
      case 'Menu':
        newPage = this.AppState.Menu;
        break;
      default:
      newPage = this.AppState.NotFound
        break;
    }

    this.setState({
      content : newPage
    });
  }

  render() {
    return (
      <div className="app">

        <div className="header">
          <Heading/>
        </div>

        <div className="navigation">
          <Nav onClick = {this.ChangePage}/>
        </div>

        <div className="content">
          {this.state.content}
        </div>
      </div>
    );
  }
}

export default App;
