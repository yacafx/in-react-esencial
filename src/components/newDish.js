import React, { Component } from "react";
import { Fab, TextField } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";

class NewDish extends Component {
  addDish(event) {
    console.log("Agregar platillo");
    event.preventDefault();
  }

  render() {
    console.log(this);
    return (
      <form autoComplete="off" onSubmit={this.addDish}>
        <TextField
          label="Platillo..."
          type="text"
          margin="normal"
          variant="outlined"
        />
        <Fab
          color="primary"
          size="medium"
          className="dish-form-icon"
          onClick={this.addDish}
        >
          <AddIcon />
        </Fab>
      </form>
    );
  }
}

export default NewDish;
