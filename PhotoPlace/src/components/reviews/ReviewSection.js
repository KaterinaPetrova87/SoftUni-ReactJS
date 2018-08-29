import React, { Component } from 'react'
import ReviewForm from '../forms/ReviewForm'
import ReviewList from './ReviewList'
import requester from './../../utils/requester'

export default class ReviewSection extends Component {
  constructor (props) {
    super(props)

    this.state = {
      rating: '',
      comment: '',
      reviews: []
    }
  }

  componentDidMount = () => {
    this.getData()
  }

  getData = () => {
    requester.getReviews(this.props.photoId)
      .then(reviews => {
        this.setState({reviews})
      })
  }

  onChange = (event) => {
    let fieldName = event.target.name
    let fieldValue = event.target.value

    this.setState({[fieldName]: fieldValue})
  }

  onSubmit = (event) => {
    event.preventDefault()
    
    requester.postReview(this.props.photoId, this.state.rating, this.state.comment, localStorage.getItem('username'))
      .then(res => {
        // console.log(res)
        const reviews = this.state.reviews.slice()
        reviews.push(res)
        this.setState({reviews})
        this.getData()
      })
  }

  render () {
    return (
      <div className="review-section">
        <ReviewForm {...this.state} title="Leave a review" btnValue="Submit" onChange={this.onChange} onSubmit={this.onSubmit} />
        <ReviewList reviews={this.state.reviews} />
      </div>
    )
  }
}