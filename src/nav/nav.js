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

    this.HandleNavigationClick = this.HandleNavigationClick.bind(this);
  
    for(let page in this.pagesList){
      this.pageLinks.push(<li key={page}><button className="page-link" id={page} onClick={this.HandleNavigationClick}>{this.pagesList[page]}</button></li>)
    }
  }

  HandleCollapseClick(event){
    let linkContainer = document.getElementById("links")
    console.log(linkContainer.className);
    if(linkContainer.className === "links-hidden"){
      linkContainer.className = "links-visible";
    }
    else{
      linkContainer.className = "links-hidden";
    }
  }

  HandleNavigationClick(event){
    const page = event.target.id;
    this.props.onClick(page)
  }

  render() {
    return (
      <div className="nav-content">
        <button className="collapse" onClick={this.HandleCollapseClick}></button>
        <div id="links" className="links-visible">
          <ul>
            {this.pageLinks}
          </ul>
        </div>
      </div>
    );
  }
}
