import React, { Component } from 'react'
import PhotoForm from '../forms/PhotoForm'
import requester from '../../utils/requester'
import toastr from 'toastr'

export default class AddPhotoPage extends Component {
  constructor(props) {
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
    this.setState({ author: localStorage.getItem('username')})
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

    requester.addPhoto(this.state)
      .then(res => {
        // console.log(res)
        if (res.error) {
          toastr.error(res.description)
          return
        }

        toastr.success('Photo added successful')
        this.props.history.push('/mine')
      }).catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <h1>Add Photo</h1>
        <hr className="my-4"/>
        <PhotoForm {...this.state} btnValue="Add Photo" onChange={this.onChange} onSubmit={this.onSubmit} />
      </div>
    )
  }
}
