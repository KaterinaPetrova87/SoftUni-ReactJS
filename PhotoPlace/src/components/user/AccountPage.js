import React, { Component } from 'react'
import requester from '../../utils/requester'
import PhotoList from '../photos/PhotoList'

export default class AccountPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      photos: []
    }
  }

  componentDidMount = () => {
    this.getPhotos()
  }

  getPhotos = () => {
    requester.allPhotos()
      .then(photos => {
        this.setState({ photos })
      })
      
  }

  render () {
    return (
      <div>
        <h1>See the recently added photos</h1>
        <h3>Get motivated to share your best work</h3>
        <hr className="my-4"/>
        <PhotoList photos={this.state.photos} request={requester.allPhotos} />
      </div>
    )
  }
}