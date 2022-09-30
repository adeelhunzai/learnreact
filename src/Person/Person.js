import React from "react";
import './Person.css';

function person (props) {
  return (
    <div className="Person">
      <p onClick={props.click}>
        hello I'm {props.name} and i'm {props.age} years old.
      </p>
      <input type="text" onChange={props.change} value={props.name} />
      <p>{props.children}</p>
    </div>
  )
}

export default person;
