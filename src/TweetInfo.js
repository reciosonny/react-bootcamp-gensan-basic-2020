import React, { Component } from "react";
import axios from 'axios';

export default class TweetInfo extends Component {

  constructor(props) {
    super(props);

    this.state = { likedTweet: false, showTweetActions: false, numLikes: 0 };
    
    this.onToggleTweet = this.onToggleTweet.bind(this);
    this.onToggleTweetActions = this.onToggleTweetActions.bind(this);
    this.onDeleteTweet = this.onDeleteTweet.bind(this);
  }

  componentDidMount() {
    console.log("Component mounted...");
    const { usernamesLiked, loggedInUsername, numLikes } = this.props;

    const isLikedTweet = usernamesLiked ? usernamesLiked.some(username => username === loggedInUsername) : false;

    this.setState({ numLikes: numLikes, likedTweet: isLikedTweet });
  }

  onToggleTweet() {
    const { likedTweet, numLikes } = this.state;
    const { usernamesLiked, loggedInUsername, id } = this.props;

    // TODO: ajax calls here.
    axios
    .put(`https://twittercloneph-api.herokuapp.com/api/tweets/toggletweetlike`, { username: loggedInUsername, id: id })
    .then(res => console.log("success!"));

    const toggleLikeTweet = !likedTweet;
    const numLikesResult = numLikes + (toggleLikeTweet ? +1 : -1);
    
    this.setState({ likedTweet: toggleLikeTweet, numLikes: numLikesResult });
  }

  onToggleTweetActions() {
    const { showTweetActions } = this.state;

    this.setState({ showTweetActions: !showTweetActions });
  }

  onDeleteTweet() {
    const { id } = this.props;

    this.setState({ showTweetActions: false });
    this.props.onDeleteTweet(id);
  }

  render() {

    const { username, loggedInUsername, tweet } = this.props;
    const { likedTweet, showTweetActions, numLikes } = this.state;

    return (
      <div className="row">
        <div className="col s2 profile-picture">
          <i class="fas fa-user fa-2x"></i>
        </div>
        <div className="col s8">
          <h5 style={{ margin: "0", fontWeight: "700" }}>{username}</h5>

          <div style={{ marginTop: "10px" }}>{tweet}</div>

          <div style={{ marginTop: "10px" }}>
            {!likedTweet && <i class="far fa-heart fa-lg" onClick={this.onToggleTweet}></i>} {/*for tweets not liked */}
            {likedTweet && <i class="fas fa-heart fa-lg" onClick={this.onToggleTweet}></i>} {/*for tweets liked */}

            <span>{numLikes}</span>
          </div>
        </div>
        <div className="col s2" style={{ position: "relative" }}>
          {loggedInUsername === username && 
            <i class="fas fa-angle-down" style={{ cursor: "pointer" }} onClick={this.onToggleTweetActions}></i>
          }

          {showTweetActions && <div className="tweet-actions z-depth-4">
            <span style={{ fontSize: "20px", cursor: "pointer", color: "#e53935" }} onClick={this.onDeleteTweet}>
              <i class="fas fa-trash-alt"></i> Delete
            </span>
          </div>}

        </div>
      </div>
    );


  }
}
