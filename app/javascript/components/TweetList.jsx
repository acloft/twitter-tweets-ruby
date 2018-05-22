import React from "react"
import PropTypes from "prop-types"
class TweetList extends React.Component {
  render () {
    console.log("render")
    return (
      <React.Fragment>
        <h1>am i there</h1>
        Tweets: {this.props.tweets}
      </React.Fragment>
    );
  }
}

TweetList.propTypes = {
  tweets: PropTypes.array
};
export default TweetList
