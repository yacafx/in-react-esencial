import React, { Component } from "react";

import Header from "./components/header";
import Dish, { Flag, Ingredient } from "./components/dish";

import "./styles/App.css";

class App extends Component {
  dish = "tacos";
  dishes = ["Tacos", "Ceviche", "Paella"];
  render() {
    return (
      <div className="App">
        <Header />
        <Dish />
        Yo como {this.dish}
        <ul>
          {this.dishes.map(dish => (
            <li>{dish}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
