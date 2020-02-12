import React from "react";
import logo from "./logo.svg";
import "./App.css";



class ClassComponent extends React.Component {

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    alert("You clicked me in class component!");
  }

  render() {
    return (
      <div>
        <h1 onClick={this.onClick}>I am built using class component</h1>
      </div>
    )
  }
}


function FunctionComponent() {

  const onClick = () => alert("You clicked me in function component!");

  return <h1 onClick={onClick}>I am built using function component</h1>
}



function App() {

  return (
    <div className="App">
      <ClassComponent />
      <FunctionComponent />
    </div>
  );
}

export default App;
