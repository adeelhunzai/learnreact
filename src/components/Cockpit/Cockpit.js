import React, { useEffect} from "react";
import "./Cockpit.css";

const Cockpit = (props) => {
  useEffect(()=> {
    console.log("[cockpit.js] UseEffect")
  })
  return (
    <div className="Cockpit">
      <h1> Hi, I'm a react App.</h1>

      <button onClick={props.clicked}>Toggle Handler Button</button>
    </div>
  );
};
export default Cockpit;
