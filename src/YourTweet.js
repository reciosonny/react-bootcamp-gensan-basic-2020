import React, { Component } from "react";
import axios from 'axios';

export default class YourTweet extends Component {
  constructor(props) {
    super(props);

    this.state = { characterCount: 0, txtTweet: "" };

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onSubmitTweet = this.onSubmitTweet.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onKeyDown(e) {
    const { value } = e.target;
    const { key } = e;

    if (value.length > 139 && key !== "Backspace") {
      e.preventDefault();
    }

    this.setState({ characterCount: value.length, txtTweet: value });
  }

  onSubmitTweet(e) {
    const { txtTweet } = this.state;
    const { username } = this.props;

    axios.post("https://twittercloneph-api.herokuapp.com/api/tweets", { username: username, tweet: txtTweet }).then(x => {
      // this.setState({ tweets: x.data });
      console.log("saved in cloud server");
    });

    this.setState({ txtTweet: "", characterCount: 0 });
    this.props.onSubmitTweet(txtTweet);
  }

  onChange(e) {
    this.setState({ txtTweet: e.target.value });
  }

  render() {
    const { characterCount, txtTweet } = this.state;
    const { username } = this.props;

    return (
      <div class="input-field col s8 offset-s2">
        {/*<input id="yourtweet" type="text" class="validate" onKeyDown={this.onKeyDown} />*/}

        <textarea
          id="yourtweet"
          class="materialize-textarea"
          onKeyDown={this.onKeyDown}
          onChange={this.onChange}
          value={txtTweet}
        ></textarea>

        <label for="yourtweet">Your Tweet</label>
        <div>{characterCount}/140</div>
        <div style={{ textAlign: "right" }}>
          <a class="waves-effect waves-light btn" onClick={this.onSubmitTweet}>
            tweet
          </a>
        </div>
      </div>
    );
  }
}
