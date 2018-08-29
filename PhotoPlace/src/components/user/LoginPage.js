import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import LoginForm from '../forms/LoginForm'
import requester from '../../utils/requester'
import Auth from '../../utils/Auth'
import toastr from 'toastr'

export default class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      redirect: false,
      errors: {}
    }
  }

  validateForm = () => {
    let form = this.state
    let errors = {}
    let formIsValid = true

    if (!form.username) {
      errors.username = 'Please enter your username'
      formIsValid = false
    }
    if (!form.password) {
      errors.password = 'Please enter your password'
      formIsValid = false
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

    requester.login(this.state)
      .then(res => {
        if (res.error) {
          toastr.error(res.description)
          return
        }
        // console.log(res)
        let role = '';
        if (JSON.stringify(res._kmd.roles) || res.role === 'admin') {
          role = 'admin'
        } else {
          role = 'normalUser'
        }
        Auth.authenticateUser(res._kmd.authtoken, res.username, res._id, role)
        toastr.success('Login successful')
        this.setState({ redirect: true })
        // console.log(res._kmd.roles[0].roleId)
      }).catch(err => {
        console.log(err)
      })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/home" />
    }
    return (
      <div>
        <h1>Log In</h1>
        <hr className="my-4" />
        <LoginForm {...this.state} onChange={this.onChange} onSubmit={this.onSubmit} />
      </div>
    )
  }
}