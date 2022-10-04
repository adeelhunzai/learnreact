import React from "react";
import './Person.css';

function person (props) {
  console.log('[person.js] rendering . . . . ')
  return (
    <div className="Person">
      <p onClick={props.clicked}>
        hello I'm {props.name} and i'm {props.age} years old.
      </p>
      <input type="text" onChange={props.changed} value={props.name} />
      <p>{props.children}</p>
    </div>
  )
}

export default person;
