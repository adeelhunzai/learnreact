import React, { Component } from "react";
import "./Person.css";

class Person extends Component {
  render() {
    console.log("[person.js] rendering . . . . ");
    return (
      <div className="Person">
        <p onClick={this.props.clicked}>
          hello I'm {this.props.name} and i'm {this.props.age} years old.
        </p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default Person;
