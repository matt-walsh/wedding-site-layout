import React from 'react';
import './nav.css';

const pageNames = ['Home', 'Wedding Party', 'Gift Registry', 'Locations', 'Schedule', 'Menu', 'Our Story' ];
const pagePathNames = ['/', '/party', '/gifts', '/location', '/schedule', '/menu', '/story'];

const linkList = pageNames.map((name, i) => {
     return (<li key={'nav-item-' + i} ><a href={'/' + pagePathNames[i]}>{name}</a></li>)
 });
 
export class Nav extends React.Component {
  render() {
    return (
      <div>
          <ul>
              {linkList}
          </ul>
      </div>
    );
  }
}
