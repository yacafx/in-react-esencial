import React, { Component } from "react";

import Header from "./components/header";
import Dish from "./components/dish";

import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Dish />
      </div>
    );
  }
}

export default App;
