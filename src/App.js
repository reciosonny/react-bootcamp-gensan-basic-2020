import React from "react";
import logo from "./logo.svg";
import "./App.css";



function App() {

  function computeValue() {

    const firstVal = document.getElementById("txtFirstVal").value;
    const secondVal = document.getElementById("txtSecondVal").value;

    const sum = Number(firstVal) + Number(secondVal);

    alert(`The sum is: ${sum}`);
  }

  return (
    <div className="App">
      <input id="txtFirstVal" type="text" placeholder="First value"/>
      <input id="txtSecondVal" type="text" placeholder="Second value"/>

      <button onClick={e => computeValue()}>Get sum</button>
    </div>
  );
}

export default App;


