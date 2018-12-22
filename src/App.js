import React, { Component } from "react";

import Header from "./components/header";
import NewDish from "./components/newDish";
import Dish from "./components/dish";
import Button from "@material-ui/core/Button";

import "./styles/App.css";

class App extends Component {
  dish = "tacos";
  dishes = ["Tacos", "Ceviche", "Paella"];

  showDishes = e => {
    e.preventDefault();
    this.props.history.push("/platillos");
  };

  render() {
    return (
      <div className="App">
        <Header />
        <NewDish />
        {/* <Dish name={this.dish} qty="3" /> */}
        <Button variant="contained" color="secondary" onClick={this.showDishes}>
          Elegir
        </Button>
      </div>
    );
  }
}

export default App;
