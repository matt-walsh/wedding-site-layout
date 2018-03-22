import React from 'react';
import './nav.css';

export class Nav extends React.Component {
  pagesList = {
    'Landing' : 'Home', 
    'Story' : 'Our Story', 
    'Party' : 'Wedding Party',
    'Schedule': 'Schedule',
    'Menu': 'Menu',
    'Location' : 'Directions',
    'Accommodations' : 'Accommodations',
    'Gifts' : 'Gift Registry'
  };
  pageLinks = [];

  constructor(props){
    super(props);

    this.HandleClick = this.HandleClick.bind(this);

    for(let page in this.pagesList){
      this.pageLinks.push(<li key={page}><button id={page} onClick={this.HandleClick}>{this.pagesList[page]}</button></li>)
    }
  }

  HandleClick(event){
    const page = event.target.id;
    this.props.onClick(page)
  }

  render() {
    return (
      <div>
          <ul>
              {this.pageLinks}
          </ul>
      </div>
    );
  }
}
