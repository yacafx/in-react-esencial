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
        <Dish name={this.dish} qty="3" />
      </div>
    );
  }
}

export default App;
