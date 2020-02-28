import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

import YourTweet from "./YourTweet";
import TweetInfo from "./TweetInfo";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { tweets: [], showProgressbar: true };

    this.onSubmitTweet = this.onSubmitTweet.bind(this);
    this.onDeleteTweet = this.onDeleteTweet.bind(this);
  }



  componentDidMount() {
    // TODO: put ajax calls here for getting tweets

    axios.get("https://twittercloneph-api.herokuapp.com/api/tweets").then(x => {
      this.setState({ tweets: x.data, showProgressbar: false });
    });

    setInterval(() => {
      axios.get("https://twittercloneph-api.herokuapp.com/api/tweets").then(x => {
        this.setState({ tweets: x.data });
      });

    }, 3000);
  }

  onSubmitTweet(tweet) {
    // alert(tweet);
    const { tweets } = this.state;
    const { username } = this.props;

    const newTweetLists = tweets.precat([
      { id: uuid(), username: username, tweet: tweet }
    ]);

    this.setState({ tweets: newTweetLists });
  }

  onDeleteTweet(id) {
    const { tweets } = this.state;

    // TODO: ajax calls here too for deleting
    axios
      .delete(`https://twittercloneph-api.herokuapp.com/api/tweets/${id}`)
      .then(res => console.log("success!"));

    const newTweetLists = tweets.filter(tweet => tweet.id !== id);

    this.setState({ tweets: newTweetLists });
  }

  render() {
    const { username } = this.props;
    const { tweets, showProgressbar } = this.state;

    return (
      <div>
        <div className="row">
          <YourTweet username={username} onSubmitTweet={this.onSubmitTweet} />
        </div>

        <div className="row">
          <div class="input-field col s6 offset-s3">

            {/*If tweets weren't loaded yet, show progressbar */}
            {showProgressbar && (
              <div className="row">
                <div className="col s10">
                  <div className="progress">
                    <div className="indeterminate"></div>
                  </div>
                </div>
              </div>
            )}

            {tweets.map(data => (
              <TweetInfo
                key={data.id}
                id={data.id}
                username={data.username}
                tweet={data.tweet}
                numLikes={data.numLikes}
                usernamesLiked={data.usernamesLiked}
                loggedInUsername={username}
                onDeleteTweet={this.onDeleteTweet}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
