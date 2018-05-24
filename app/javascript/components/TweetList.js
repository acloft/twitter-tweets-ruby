import React from "react";
import TweetListItem from "./TweetListItem";
class TweetList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h2>
            {" "}
            <a
              target="_blank"
              href={`https://twitter.com/${this.props.handle}`}
            >
              @{this.props.handle}
            </a>'s recent tweets:{" "}
          </h2>
          <div className="text-right">
            <a href="/"> New Search</a>
          </div>
          <ol className="list-group">
            {this.props.tweets && this.props.tweets.length > 0
              ? this.props.tweets.map(tweet => (
                  <TweetListItem
                    tweet={tweet}
                    key={`list-item${tweet.id}` || "none"}
                  />
                ))
              : null}
          </ol>
        </div>
      </React.Fragment>
    );
  }
}

export default TweetList;
