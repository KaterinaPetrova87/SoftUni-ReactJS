import requester from './../../utils/requester'
import Auth from '../../utils/Auth'
import toastr from 'toastr'

const DeletePhoto = props => {
  requester.deletePhoto(props.match.params.id)
    .then(res => {
      toastr.success('Photo deleted successful')
      if(Auth.isAdmin()) {
        props.history.push('/home')
      } else {
        props.history.push('/mine')
      }
    })
  return null
}

export default DeletePhoto