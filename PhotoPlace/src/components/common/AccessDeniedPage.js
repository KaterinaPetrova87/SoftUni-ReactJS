import React from 'react'
import { Link } from 'react-router-dom'

const AccessDeniedPage = () => (
  <div className="not-found">
    <div className="jumbotron">
      <h1 className="display-3">Access Denied</h1>
      <h2 className="lead">You have no permission to view this page</h2>
      <hr className="my-4" />
      <p className="lead">
      <Link to="/"><button type="button" className="btn btn-secondary">&lt;&lt;Return to the home page</button></Link>
      </p>
    </div>
  </div>
)

export default AccessDeniedPage