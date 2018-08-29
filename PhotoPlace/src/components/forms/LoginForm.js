import React from 'react'
import Input from './../common/Input'

const LoginForm = props => (
  <form onSubmit={props.onSubmit}>
    <fieldset>
    <Input
        placeholder="Username"
        type="text"
        name='username'
        value={props.username}
        onChange={props.onChange}
        error={props.errors.username} />
      {/* <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter username"
          name='username'
          value={props.username}
          onChange={props.onChange} />
      </div> */}
       <Input
        placeholder="Password"
        type="password"
        name='password'
        value={props.password}
        onChange={props.onChange} 
        error={props.errors.password}/>
      {/* <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          name='password'
          value={props.password}
          onChange={props.onChange} />
      </div> */}
      <button type="submit" className="btn btn-primary">Log In</button>
    </fieldset>
  </form>
)

export default LoginForm