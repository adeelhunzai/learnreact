import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "max", age: 28 },
      { name: "manu", age: 27 },
      { name: "henry", age: 22 },
    ],
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 22 },
        { name: "rock", age: 23 },
        { name: "duke", age: 44 },
      ],
    });
  };
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "mars", age: 22 },
        { name: event.target.value, age: 23 },
        { name: "duke", age: 44 },
      ],
    });
  };

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  render() {
    const btnStyle = {
      width: "50%",
      backgroundColor: "Orange",
      border: "2px solid #fefefe",
      fontSize: "20pt",
      padding: "18px",
      marginBottom: "10px",
    };

    let person = null;
    if (this.state.showPersons) {
      person = (
        <div>

          {this.state.persons.map(person =>{
              return <Person
                  name={person.name}
                  age ={person.age}
              />
            })
          }
          
        </div>
      );
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
