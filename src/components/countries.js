import React, { Component } from "react";
import Button from "@material-ui/core/Button";

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

  render() {
    return (
      <div>
        <h1>Países</h1>
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
