import React from 'react'
import { Link } from 'react-router-dom'

const User = props => (
  <tr key={props._id} className="table-active">
    <th scope="row">{props.username}</th>
    <td>{props.email}</td>
    <td>{props.firstName}</td>
    <td>{props.lastName}</td>
    <td><Link to={'/user/edit/' + props._id}><button>Edit</button></Link></td>
    <td><Link to={'/user/delete/' + props._id}><button>Delete</button></Link></td>
  </tr>
)

export default User