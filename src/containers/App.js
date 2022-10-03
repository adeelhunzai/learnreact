import React, { Component } from "react";
import "./App.css";
import Person from "../components/Persons/Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "1s1", name: "max", age: 28 },
      { id: "1s2", name: "manu", age: 27 },
      { id: "1s3", name: "henry", age: 22 },
    ],
    showPersons: false,
  };

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

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  render() {
    const btnStyle = {
      width: "50%",
      backgroundColor: "green",
      border: "2px solid #fefefe",
      fontSize: "20pt",
      padding: "18px",
      marginBottom: "10px",
    };

    let person = null;
    if (this.state.showPersons) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      btnStyle.backgroundColor = "red";
    }

    return (
      <div className="App">
        <h1> Hi, I'm a react App.</h1>

        <button style={btnStyle} onClick={this.tooglePersonsHandler}>
          Toggle Handler Button
        </button>
        {person}
      </div>
    );
  }
}

export default App;
