import React from "react";

class TweetListItem extends React.Component {
  formatTweetText(text) {
    const textArr = text.split(" ");
    const parsedText = textArr.reduce((all, word, index) => {
      let checkedWord = word;
      var pattern = /\B@[a-z0-9_-]+/gi;
      //https://stackoverflow.com/questions/15265605/how-to-pull-mentions-out-of-strings-like-twitter-in-javascript
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
    return this.props.tweet ? (
      <li key={this.props.tweet.id} className="list-group-item">
        <strong>{this.formatDate(this.props.tweet.created_at)}</strong>{" "}
        <div
          dangerouslySetInnerHTML={this.formatTweetText(this.props.tweet.text)}
        />{" "}
      </li>
    ) : null;
  }
}

export default TweetListItem;
