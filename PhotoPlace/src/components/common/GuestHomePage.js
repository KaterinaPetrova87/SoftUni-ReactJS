import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../utils/Auth';

const GuestHomePage = () => (
  <div className="jumbotron">
    <h2 className="display-3">Get inspired and share your best photos</h2>
    <p className="lead">The community for passionate photographers</p>
    {/* <img src="camera.png" alt="camera" height="350px" /> */}
    <p className="lead">
    {!Auth.isUserAuthenticated() ? (
      <Link to="/register"><button type="button" className="btn btn-secondary">Let's create your account :)</button></Link>
    ) : null}
    </p>
  </div>
)

export default GuestHomePage