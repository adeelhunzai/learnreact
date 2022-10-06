import React, { Component } from "react";
import Auxillary from "../../../hoc/Auxillary";
import "./Person.css";

class Person extends Component {
  render() {
    console.log("[person.js] rendering . . . . ");
    return (
      <Auxillary classes="Person">
        <p onClick={this.props.clicked}>
          hello I'm {this.props.name} and i'm {this.props.age} years old.
        </p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
        <p>{this.props.children}</p>
      </Auxillary>
    );
  }
}

export default Person;
