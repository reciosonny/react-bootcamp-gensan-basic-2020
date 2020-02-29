import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { txtInput: "" };

    this.onClearTextInput = this.onClearTextInput.bind(this);
    this.onChangeTextInput = this.onChangeTextInput.bind(this);
  }

  onClearTextInput() {
    this.setState({ txtInput: "" });
  }

  onChangeTextInput(e) {
    const { value } = e.target;

    this.setState({ txtInput: value });
  }

  render() {
    const { txtInput } = this.state;

    return (
      <div className="App">
        <input type="text" value={txtInput} onChange={this.onChangeTextInput} />
        <br />

        <button onClick={this.onClearTextInput}>Clear text input value</button>
      </div>
    );
  }
}

export default App;
