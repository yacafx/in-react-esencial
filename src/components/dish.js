import React, { Component } from "react";
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListSubheader,
  ListItemText,
  ListItemIcon
} from "@material-ui/core";
import ScatterPlot from "@material-ui/icons/ScatterPlot";

class Dish extends Component {
  ingredients = ["Tortilla", "Carne", "Cebolla"];

  countIngredients() {
    return this.ingredients.length;
  }

  render() {
    return (
      <Card className="card">
        <CardContent>
          <List
            component="nav"
            subheader={
              <ListSubheader component="div">{this.props.name}</ListSubheader>
            }
          >
            {this.props.ingredients.map((ingredient, index) => (
              <ListItem button key={index}>
                <ListItemIcon>
                  <ScatterPlot />
                </ListItemIcon>
                <ListItemText inset primary={ingredient} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    );
  }
}

export default Dish;
