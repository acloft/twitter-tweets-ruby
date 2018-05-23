import React from "react";
import TweetListItem from './TweetListItem'
class TweetList extends React.Component {
  
  render() {
    return (
      <React.Fragment>
        {this.props.tweets && this.props.tweets.length > 0 ? (
          <div>
            <TweetListItem/>
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
          <a  href="/">
                {" "}
                New Search
              </a>
          </div>
            <ol className="list-group">
              {this.props.tweets && this.props.tweets.length > 0 ? this.props.tweets.map(tweet => <TweetListItem tweet={tweet} key={`list-item${tweet.id}`||'none'} /> ) : null}
            </ol>
            
          </div>
        ) : (
          <React.Fragment>
            <div className="text-center">
              That was no good. Want to try a different search?{" "}
              <a className="btn btn-warning" href="/">
                {" "}
                Go Back
              </a>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default TweetList;
