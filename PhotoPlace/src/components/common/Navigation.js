import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../utils/Auth';

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <img src="/camera.png" alt="logo" height='50px' />
      </li>
    </ul>
    {Auth.isUserAuthenticated() ? (
      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link to="/home" className="nav-link">Photos</Link>
          </li>
          <li className="nav-item">
            <Link to="/add" className="nav-link">Add Photo</Link>
          </li>
          <li className="nav-item">
            <Link to="/mine" className="nav-link">My Photos</Link>
          </li>
          {Auth.isAdmin() ? (
            <li className="nav-item">
              <Link to="/users" className="nav-link">Users</Link>
            </li>
          ) : (null)}
          <li className="nav-item">
            <Link to="/logout" className="nav-link">Logout</Link>
          </li>
        </ul>

        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <b>Hello, {localStorage.getItem('username')}!</b>
          </li>
        </ul>

      </div>
    ) : (
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to='/register' className="nav-link">Register</Link>
            </li>
            <li className="nav-item">
              <Link to='/login' className="nav-link">Login</Link>
            </li>
          </ul>
        </div>
      )}
  </nav>
)

export default Navigation