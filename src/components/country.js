import React, { Component } from "react";
import { IconButton } from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";

export class Country extends Component {
  delete = name => {
    this.props.onDelete(name);
  };

  render() {
    return (
      <li>
        <IconButton size="small" onClick={this.edit}>
          <Delete onClick={() => this.delete(this.props.name)} />
        </IconButton>
        {this.props.name}
      </li>
    );
  }
}

export default Country;
