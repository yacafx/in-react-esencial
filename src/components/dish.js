import React, { Component, Fragment } from "react";

export class Flag extends Component {
  render() {
    return (
      <div>
        <h1>Bandera</h1>
      </div>
    );
  }
}

export class Ingredient extends Component {
  render() {
    return (
      <Fragment>
        <h1>Ingredientes</h1>
        <h1>Ingredientes</h1>
      </Fragment>
    );
  }
}

class Dish extends Component {
  render() {
    return (
      <div>
        <h1>Platillo</h1>
        <Ingredient />
      </div>
    );
  }
}

export default Dish;
