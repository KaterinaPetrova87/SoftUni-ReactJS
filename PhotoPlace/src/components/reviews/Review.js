import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../utils/Auth'

const Review = props => {
  let stars = ''
  for (let i = 0; i < Number(props.rating); i++) {
    stars += '★'
  }

  return (
    <div className="review">
      <article className="post post-content">
        {stars !== '' ? (
          <p>Rating: {stars}</p>
        ) : (null)}
        <p className="comment">{props.comment}</p>
        <div className="right">
          Submitted <cite title="Source Title">{props.date} by <strong>{props.author}</strong></cite>
          {props.author === localStorage.getItem('username') || Auth.isAdmin() ? (
            <div className="link">
              <Link to={'/review/edit/' + props._id} className="edit">edit</Link>
              <Link to={'/review/delete/' + props._id} className="delete" >delete</Link>
            </div>
          ) : (null)}

        </div>
      </article>
    </div>
  )
}

export default Review