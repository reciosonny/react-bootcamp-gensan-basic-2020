import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { txtValue: "", clickedValue: "" };

    this.onChangeText = this.onChangeText.bind(this);
    this.onClicked = this.onClicked.bind(this);
  }

  componentDidMount() {}

  onChangeText(e) {
    this.setState({ txtValue: e.target.value });
  }

  onClicked() {
    this.setState({ clickedValue: "You clicked a button" });
  }

  render() {
    return (
      <div className="App">

        <h1>State demo</h1>

        
        <input type="text" onChange={this.onChangeText} />
        <h1>Value: {this.state.txtValue}</h1>

        {/*<button onClick={this.onClicked}>Click me</button>
        <h1>{this.state.clickedValue}</h1>*/}
      </div>
    );
  }
}

export default App;
