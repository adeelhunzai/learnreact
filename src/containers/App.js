import React, { Component } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    persons: [
      { id: "1s1", name: "max", age: 28 },
      { id: "1s2", name: "manu", age: 27 },
      { id: "1s3", name: "henry", age: 22 },
    ],
    showPersons: false,
  };
  static getDerivedStateFromProps(props, state) {
    console.log("[App.js getderivedstatefromprops", props);
    return state;
  }
  componentDidMount() {
    console.log("[App.js] component did mount");
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  render() {
    console.log("[App.js Render Method");
    let person = null;
    if (this.state.showPersons) {
      person = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className="App">
        <Cockpit
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />

        {person}
      </div>
    );
  }
}

export default App;
