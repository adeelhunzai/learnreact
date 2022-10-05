import React, { useEffect} from "react";
import "./Cockpit.css";

const Cockpit = (props) => {
  useEffect(()=> {
    console.log("[cockpit.js] UseEffect");
    const timer = setTimeout(()=>{
      alert('Saved Data to the Cloud!');
    },1000);
    return () => {
      clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  },[props.persons])
  return (
    <div className="Cockpit">
      <h1> Hi, I'm a react App.</h1>

      <button onClick={props.clicked}>Toggle Handler Button</button>
      
    </div>
  );
};
export default Cockpit;
