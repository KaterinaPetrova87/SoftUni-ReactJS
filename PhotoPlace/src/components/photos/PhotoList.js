import React, { Component } from 'react'
import Photo from './Photo'
import withLoading from '../hocs/withLoading'

class PhotoListWithLoading extends Component {
  render () {
    return (
      <div className="photo-list">
        {this.props.photos.map(p => (
          <Photo key={p._id} {...p} />
        ))}
      </div>
    )
  }
}

const PhotoList = withLoading(PhotoListWithLoading)
export default PhotoList
