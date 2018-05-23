import React from "react";
import PropTypes from "prop-types";
class TweetList extends React.Component {
  generateTweets(tweets) {
    return tweets.map(tweet => {
      return (
        <li key={tweet.id} className="list-group-item">
          <strong>{this.formatDate(tweet.created_at)}</strong>{" "}
          <div dangerouslySetInnerHTML={this.formatTweetText(tweet.text)} />{" "}
        </li>
      );
    });
  }

  formatTweetText(text) {
    const textArr = text.split(" ");
    const parsedText = textArr.reduce((all, word, index) => {
      let checkedWord = word;
      var pattern = /\B@[a-z0-9_-]+/gi;
      if (word.match(pattern)) {
        checkedWord = `<a href="/results?utf8=✓&search=${word}&commit=Search">${word}</a>`;
      }
      all.push(checkedWord);
      return all;
    }, []);
    const html = parsedText.join(" ");
    return { __html: html };
  }

  formatDate(iso) {
    let originalDate = new Date(iso);

    return originalDate.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });
  }
  render() {
    return (
      <React.Fragment>
        {this.props.tweets && this.props.tweets.length > 0 ? (
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
            <ol className="list-group">
              {this.generateTweets(this.props.tweets)}
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
