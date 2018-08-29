import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import requester from '../../utils/requester'
import RegisterForm from '../forms/RegisterForm'
import toastr from 'toastr'
import Auth from '../../utils/Auth'

export default class RegisterPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
      role: '',
      redirect: false,
      errors: {}
    }
  }

  validateForm = () => {
    let form = this.state
    let errors = {}
    let emailRegex = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$')
    let namesRegex = new RegExp('^[A-Z][a-z]+$')
    let passRegex = new RegExp('^[A-Za-z\\d]{4,16}$')
    let formIsValid = true

    if (!form.username || form.username.length < 4) {
      errors.username = 'Username must be at least 4 characters long.'
      formIsValid = false
    }
    if (!form.email || !emailRegex.test(form.email)) {
      errors.email = 'The email address entered is not valid.'
      formIsValid = false
    }
    if (!form.firstName || !namesRegex.test(form.firstName)) {
      errors.firstName = 'First name must contain only letters and start with a capital letter.'
      formIsValid = false
    }
    if (!form.lastName || !namesRegex.test(form.lastName)) {
      errors.lastName = 'Last name must contain only letters and start with a capital letter.'
      formIsValid = false
    }
    if (!form.password || !passRegex.test(form.password)) {
      errors.password = 'Password must contain only letters and digits and must be between 4 and 16 symbols'
      formIsValid = false
    }
    if (form.password !== form.confirmPassword) {
      errors.confirmPassword = 'Both passwords must match'
      formIsValid = false
    }

    this.setState({ errors })
    return formIsValid
  }

  onChange = (event) => {
    let fieldName = event.target.name
    let fieldValue = event.target.value
    this.setState({ [fieldName]: fieldValue })
  }

  onSubmit = (event) => {
    event.preventDefault()

    if (!this.validateForm()) {
      return
    }

    requester.register({
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      role: 'normalUser'
    }).then(res => {
      if (res.error) {
        toastr.error(res.description)
        return
      }
      //  console.log(res)
       Auth.authenticateUser(res._kmd.authtoken, res.username, res._id, res.role)
       requester.addUser({ username: res.username, email: res.email, firstName: res.firstName, lastName: res.lastName, role: res.role })
         .then(data => {
          //  console.log(data)
           Auth.deauthenticateUser()
           toastr.success('Registration successful')
           this.setState({ redirect: true })
         })
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/login" />
    }
    return (
      <div>
        <h1>Create Your Account</h1>
        <hr className="my-4" />
        <RegisterForm {...this.state} onChange={this.onChange} onSubmit={this.onSubmit} />
      </div>
    )
  }
}
