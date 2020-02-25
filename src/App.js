import React from "react";
import logo from "./logo.svg";
import "./App.css";




class App extends React.Component {


  render() {

    const numbers = [1,2,3,4,5];

    return (
      <div className="App">
        <h1>Numbers</h1>

        {numbers.map(number => <h2>{number}</h2>)}
      </div>
    );
  }
}

export default App;
