import React from "react";
import "./Cockpit.css";

const cockpit = (props) => {
  return (
    <div className="Cockpit">
      <h1> Hi, I'm a react App.</h1>

      <button onClick={props.clicked}>Toggle Handler Button</button>
    </div>
  );
};
export default cockpit;
