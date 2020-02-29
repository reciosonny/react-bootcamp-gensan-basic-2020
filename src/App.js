import React from "react";
import logo from "./logo.svg";
import "./App.css";
import YourTweet from "./YourTweet";
import TweetInfo from "./TweetInfo";
import Home from "./Home";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: "", loggedIn: false };

    this.onLogin = this.onLogin.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onLogin(e) {
    e.preventDefault();

    this.setState({ loggedIn: true });
  }

  onChange(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    const { username, loggedIn } = this.state;

    return (
      <div className="App">
        <div className="row">
          <div className="col s8 offset-s2">
            <h2>Twitter Clone</h2>
          </div>
        </div>

        {!loggedIn && (
          <div className="row">
            <form onSubmit={this.onLogin}>
              <div class="input-field col s8 offset-s2">
                <input
                  type="text"
                  id="enterusername"
                  class="validate"
                  onChange={this.onChange}
                />
                <label for="enterusername">Please enter your username</label>

                <div>
                  <a
                    className="waves-effect waves-light btn"
                    style={{ width: "100%" }}
                    onClick={this.onLogin}
                    type="submit"
                  >
                    login
                  </a>
                </div>
              </div>
            </form>
          </div>
        )}

        {loggedIn && <Home username={username} />}
      </div>
    );
  }
}

export default App;
