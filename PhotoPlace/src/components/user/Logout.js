import Auth from './../../utils/Auth'
import toastr from 'toastr'

const Logout = props => {
  Auth.deauthenticateUser()
  toastr.success('Logout successful')
  props.history.push('/')
  return null
}

export default Logout