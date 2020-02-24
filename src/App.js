import React from "react";
import logo from "./logo.svg";
import "./App.css";


// TODO: demo it in functional components as well (live-coding)
class App extends React.Component {


  onChangeText(e) {
    console.log("onChange event is triggered");
  }

  onClick(e) {
    console.log("onClick event is triggered");
  }

  onClickButton(e) {
    alert("You clicked the button");
  }

  render() {
    return (
      <div className="App">
  
        <h1>Testing event handlers</h1>
        <input type="text" placeholder="" onClick={this.onClick} onChange={this.onChangeText} />

        <br/><br/>
        <button onClick={this.onClickButton}>Click me</button>
      </div>
    );
    }
}




export default App;
