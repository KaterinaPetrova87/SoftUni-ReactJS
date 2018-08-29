import React, { Component } from 'react'
import requester from '../../utils/requester'
import UserList from './UserList';

export default class Users extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }

  componentDidMount = () => {
    this.getUsers()
  }

  getUsers = () => {
    requester.allUsers()
      .then(users => {
        this.setState({ users })
      })

  }

  render() {
    return (
      <div>
       <h1>All Users</h1>
        <hr className="my-4" />
        <UserList users={this.state.users} request={requester.allUsers} />
      </div>
    )
  }
}