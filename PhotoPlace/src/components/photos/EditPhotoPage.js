import React, { Component } from 'react'
import PhotoForm from '../forms/PhotoForm'
import requester from '../../utils/requester'
import toastr from 'toastr'
import Auth from '../../utils/Auth'

export default class EditPhotoPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      author: '',
      category: 'Animals',
      photo: '',
      description: 'No description',
      errors: {}
    }
  }

  componentDidMount = () => {
    this.getPhoto()
  }

  validateForm = () => {
    let form = this.state
    let errors = {}
    let formIsValid = true

    if (!form.title) {
      errors.title = 'Title is required'
      formIsValid = false
    }
    if (!form.photo) {
      errors.photo = 'Photo is required'
    }

    this.setState({errors})
    return formIsValid
  }

  onChange = (event) => {
    let fieldName = event.target.name
    let fieldValue = event.target.value

    this.setState({ [fieldName]: fieldValue })
  }

  onSubmit = (event) => {
    event.preventDefault()

    if(!this.validateForm()) {
      return
    }

    requester.editPhoto(this.state, this.props.match.params.id)
      .then(res => {
        if (res.error) {
          toastr.error(res.description)
          return
        }
        toastr.success('Photo edited successful')
        if(Auth.isAdmin()) {
          this.props.history.push('/home')
        } else {
          this.props.history.push('/mine')
        }
      })
  }

  getPhoto = () => {
    requester.getPhotoToEdit(this.props.match.params.id)
      .then(photo => {
        this.setState({
          title: photo.title,
          author: photo.author,
          category: photo.category,
          photo: photo.photo,
          description: photo.description
        })
        // console.log(this.state)
      })
  }

  render () {
    return (
      <PhotoForm {...this.state} btnValue='Edit Photo' onChange={this.onChange} onSubmit={this.onSubmit} />
    )
  }
}