import React, { Component } from 'react'
import ReviewForm from '../forms/ReviewForm'
import requester from '../../utils/requester'

export default class EditReview extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rating: '',
      comment: ''
    }
  }

  componentDidMount = () => {
    this.getReview()
  }

  onChange = (event) => {
    let fieldName = event.target.name
    let fieldValue = event.target.value

    this.setState({ [fieldName]: fieldValue })
  }

  onSubmit = (event) => {
    event.preventDefault()

    requester.editReview(this.state, this.props.match.params.id)
      .then(res => {
        this.props.history.goBack()
      })
  }

  getReview = () => {
    requester.getReviewById(this.props.match.params.id)
      .then(review => {
        this.setState({
          rating: review.rating,
          author: review.author,
          comment: review.comment,
          photoId: review.photoId
        })
        console.log(this.state)
      })
  }

  render() {
    return (
      <div>
        <ReviewForm {...this.state} btnValue='Edit Review' title="Edit review" onChange={this.onChange} onSubmit={this.onSubmit} />
      </div>
    )
  }
}