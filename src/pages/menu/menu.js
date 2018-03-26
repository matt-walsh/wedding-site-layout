import React from 'react';
import './menu.css';
 
export class Menu extends React.Component {
  Pizzas = [
    {Type : "Cheese", Price : 0},
    {Type : "Pepperoni", Price : 0},
    {Type : "Pepperoni & Bacon", Price : 0},
    {Type : "BBQ Chicken", Price : 0}
  ];

  Subs = [
    {Type : "Ham", Price : 0},
    {Type : "Beef", Price : 0},
    {Type : "Turkey", Price : 0},
    {Type : "Veggie", Price : 0}
  ];

  Snacks = [
    {Type : "Veggies", Price : 0},
    {Type : "Fruit", Price : 0},
    {Type : "Chips", Price : 0},
    {Type : "Candy Bar", Price : 0}
  ]

  Drinks = [
    {Type : "Pepsi", Price : 0},
    {Type : "Coca Cola", Price : 0},
    {Type : "7Up", Price : 0},
    {Type : "Sprite", Price : 0},
    {Type : "A&W Root Beer", Price : 0},
    {Type : "Orange Crush", Price : 0},
    {Type : "Iced Tea", Price : 0},
    {Type : "Orange Juice", Price : 0},
    {Type : "Lemonade", Price : 0},
    {Type : "Apple Juice", Price : 0}
  ]

  GenerateRows(foods){
    let rows = [];
    foods.forEach((food, i) => {
      rows.push(<li key={food.Type + i}>{food.Type}</li>);
    })
    return rows;
  }
  render() {
    return (
      <div className="menu-container">
        <div className="title-section">
          <h3>Menu</h3>
        </div>
        <div className="pizza-section">
          <ul>
            {this.GenerateRows(this.Pizzas)}
          </ul>
        </div>
        <div className="subs-section">
          <ul>
            {this.GenerateRows(this.Subs)}
          </ul>
        </div>
        <div className="snacks-section">
          <ul>
              {this.GenerateRows(this.Snacks)}
          </ul>
        </div>
        <div className="drinks-section">
          <ul>
              {this.GenerateRows(this.Drinks)}
          </ul>
        </div>
      </div>
    );
  }
}