import React from "react";
import logo from "./logo.svg";
import "./App.css";


class ChildComponent extends React.Component {

  componentWillUnmount() {
    // alert("Component unmounted");
    console.log("Component unmounted...")
  }

  render() {
    return (
      <div className="child-component">
        I am a child component
      </div>
    )
  }
}


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { showComponent: true }

    console.log("Constructor lifecycle...");
  }

  componentDidMount() {
    console.log("Component mounted...");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component updated...");
  }
  


  render() {

    const { showComponent } = this.state;
    const buttonLabel = `${(showComponent ? "Hide" : "Show")} child component`;

    return (
      <div className="App">
        <button onClick={() => this.setState({ showComponent: !showComponent })}>{buttonLabel}</button>

        {showComponent && <ChildComponent />}
      </div>
    );
  }
}

export default App;
