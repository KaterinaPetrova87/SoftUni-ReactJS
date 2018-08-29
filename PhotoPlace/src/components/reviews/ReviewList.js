import React, { Component } from 'react'
import Review from './Review'
import TimeAgo from 'timeago-react'
import timeago from 'timeago.js'
timeago.register('en', require('timeago.js/locales/en'));

export default class ReviewList extends Component {
  render() {
    return (
      <div className="review-list">
        {this.props.reviews.map(r => (
          <Review
            key={r._id}
            {...r}
            stars={r.stars}
            date={<TimeAgo datetime={r._kmd.ect} locale='bg'/>}/>
        ))}
      </div>
    )
  }
}