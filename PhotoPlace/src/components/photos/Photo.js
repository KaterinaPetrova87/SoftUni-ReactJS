import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../utils/Auth';

const Photo = props => (
   <div className="col-md-4 photo">
    <div className="card text-white bg-primary">
      <div className="card-body">
        <blockquote className="card-blockquote">
          <img className="list" src={props.photo} alt={props.photo} />
          <div className="card-body">
            <h5 className="card-title left">{props.title}</h5>
            <h5 className="card-title right"><Link to={'/details/' + props._id} className="card-link">View details</Link></h5>
            <br />
          </div>
        </blockquote>
        {Auth.isAdmin() ? (
              <div className="btns-view">
              <Link className="card-link left" to={"/photo/edit/" + props._id}><button className="btn btn-success">EDIT</button></Link>
              <Link className="card-link right" to={"/photo/delete/" + props._id}><button className="btn btn-danger">DELETE</button></Link>
              </div>
            ) : null}
      </div>
    </div>
   </div>

)

export default Photo