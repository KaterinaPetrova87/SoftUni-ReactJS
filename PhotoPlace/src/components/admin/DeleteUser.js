import requester from './../../utils/requester'
import toastr from 'toastr'

const DeleteUser = props => {
  requester.deleteUser(props.match.params.id)
    .then(res => {
      toastr.success('User deleted successful')
        props.history.push('/users')
    })
  return null
}

export default DeleteUser