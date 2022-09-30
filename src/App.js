import React, { useState } from "react";
import "./App.css";
import person from "./Person/Person";
import Person from "./Person/Person";

function App(props) {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "max", age: 28 },
      { name: "manu", age: 27 },
      { name: "henry", age: 22 },
    ],
    showPersons: false,
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "mars", age: 22 },
        { name: "rock", age: 23 },
        { name: "duke", age: 44 },
      ],
    });
  };

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: "mars", age: 22 },
        { name: event.target.value, age: 23 },
        { name: "duke", age: 44 },
      ],
    });
  };

  const tooglePersonsHandler = () => {
    const doesShow = personsState.showPersons;
    setPersonsState({
      persons: [
        { name: "mars", age: 22 },
        { name: "evans", age: 23 },
        { name: "duke", age: 44 },
      ],
      showPersons: !doesShow,
    });
  };

  return (
    <div className="App">
      <h1> Hi, I'm a react App.</h1>
      <button onClick={tooglePersonsHandler}>Switch</button>
      {personsState.showPersons === true ? (
        <div>
          <Person
            name={personsState.persons[0].name}
            age={personsState.persons[0].age}
          >
            I'm feeling good!
          </Person>
          <Person
            name={personsState.persons[1].name}
            click={switchNameHandler}
            age={personsState.persons[1].age}
            change={nameChangedHandler}
          />
          <Person
            name={personsState.persons[2].name}
            age={personsState.persons[2].age}
          />
        </div>
      ) : null}
    </div>
  );
}

export default App;
