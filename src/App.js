import React from "react";
import logo from "./logo.svg";
import "./App.css";



class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { showTitle: false };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { showTitle } = this.state;
    this.setState({ showTitle: !showTitle });
  };

  render() {
    return (
      <div className="App">
        <h1>Conditional rendering demo</h1>
        <button onClick={this.onClick}>Click me</button>
        {this.state.showTitle && <h1>I'm here</h1>}
      </div>
    );
  }
}



export default App;
