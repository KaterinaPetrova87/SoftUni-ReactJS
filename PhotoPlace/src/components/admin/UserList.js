import React, { Component } from 'react'
import withLoading from '../hocs/withLoading';
import User from './User';

class UserListWithLoading extends Component {
  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map(u => (
              <User key={u._id} {...u} />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

const UserList = withLoading(UserListWithLoading)
export default UserList
