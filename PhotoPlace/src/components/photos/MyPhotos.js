import React, { Component } from 'react'
import requester from './../../utils/requester'
import PhotoList from './PhotoList';

export default class MyPhotos extends Component {
  constructor(props) {
    super(props)

    this.state = {
      myPhotos: []
    }
  }

  componentDidMount = () => {
    this.getMyPhotos()
  }

  getMyPhotos = () => {
    requester.myPhotos(localStorage.getItem('username'))
      .then(myPhotosArr => {
        this.setState({ myPhotos: myPhotosArr })
      })
  }

  render() {
    // if (this.state.myPhotos.length === 0) {
    //   return (
    //     <div className="alert alert-dismissible alert-secondary">
    //       <strong><h2>No photos available</h2></strong>
    //     </div>
    //   )
    // }
    return (
      <div>
        <h1>My Photos</h1>
        <PhotoList photos={this.state.myPhotos} request={requester.myPhotos} />
      </div>
    )
  }
}