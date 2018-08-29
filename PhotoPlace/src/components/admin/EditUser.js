import React, { Component } from 'react'
import requester from '../../utils/requester'
import toastr from 'toastr'

export default class EditUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      firstName: '',
      lastName: '',
      role: ''
    }
  }

  componentDidMount = () => {
    this.getUser()
  }

  onChange = (event) => {
    let fieldName = event.target.name
    let fieldValue = event.target.value

    this.setState({ [fieldName]: fieldValue })
  }

  onSubmit = (event) => {
    event.preventDefault()

    requester.editUser(this.state, this.props.match.params.id)
      .then(res => {
        if (res.error) {
          toastr.error(res.description)
          return
        }
        toastr.success('User edited successful')
        this.props.history.push('/users')
      })
  }

  getUser = () => {
    requester.getUserById(this.props.match.params.id)
      .then(user => {
        this.setState({
          username: user.username,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role
        })
        // console.log(this.state)
      })
  }

  render() {
    return (
      <div>
        <h1>Edit User</h1>
        <hr className="my-4" />
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name='username'
                value={this.state.username}
                onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name='username'
                value={this.state.email}
                onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                name='username'
                value={this.state.firstName}
                onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                name='username'
                value={this.state.lastName}
                onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label>Role</label>
              <select className="form-control rating" id="exampleSelect1" name="role" value={this.state.role} onChange={this.onChange}>
                <option value="normalUser">normalUser</option>
                <option value="admin">admin</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Edit user</button>
          </fieldset>
        </form>
      </div>
    )
  }
}