import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Country } from "./country";

export class Countries extends Component {
  constructor() {
    super();
    this.state = {
      countries: []
    };
  }
  componentDidMount() {
    this.getCountries();
  }

  getCountries() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(response => response.json())
      .then(data => {
        this.setState({ countries: data });
      })
      .catch(error => console.log(error));
  }

  delete = name => {
    let newState = { ...this.state };

    newState.countries = newState.countries.filter(
      country => country.name !== name
    );

    this.setState(newState);
  };

  render() {
    return (
      <div>
        <h1>Países</h1>
        <ul>
          {this.state.countries.map((country, index) => (
            <Country key={index} name={country.name} onDelete={this.delete} />
          ))}
        </ul>

        <Button
          variant="contained"
          color="secondary"
          onClick={this.getCountries}
        >
          Cargar lista
        </Button>
      </div>
    );
  }
}

export default Countries;
