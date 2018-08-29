import requester from './../../utils/requester'
const DeleteReview = props => {
  requester.deleteReview(props.match.params.id)
    .then(res => {
      props.history.goBack()
    })
  return null
}

export default DeleteReview