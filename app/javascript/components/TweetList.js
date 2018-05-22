import React from "react"
import PropTypes from "prop-types"
class TweetList extends React.Component {
  generateTweets(tweets){
    return tweets.map(tweet=>{
      return <li key={tweet.id}><strong>{this.formatDate(tweet.created_at)}</strong> {tweet.text} </li>
    })
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
  render () {
    console.log(this.props)
    return (
      <React.Fragment>
{this.props.tweets && this.props.tweets.length > 0 ?         
  ( <div> 
    <h2> <a target="_blank" href={`https://twitter.com/${this.props.handle}`}>@{this.props.handle}</a>'s recent tweets: </h2>     
    <ol>
          {this.generateTweets(this.props.tweets)}
        </ol>
    </div>) : (<div> hmmm... something went wrong, please try again </div>)}
      </React.Fragment>
    );
  }
}


export default TweetList
