import React from 'react'
import Input from './../common/Input'

const RegisterForm = props => (
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
        placeholder="Email address"
        type="text"
        name='email'
        value={props.email}
        onChange={props.onChange}
        error={props.errors.email} />
      {/* <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          name='email'
          value={props.email}
          onChange={props.onChange} />
      </div> */}
      <Input
        placeholder="First name"
        type="text"
        name='firstName'
        value={props.firstName}
        onChange={props.onChange}
        error={props.errors.firstName} />
      {/* <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First Name"
          name='firstName'
          value={props.firstName}
          onChange={props.onChange} />
      </div> */}
      <Input
        placeholder="Last name"
        type="text"
        name='lastName'
        value={props.lastName}
        onChange={props.onChange}
        error={props.errors.lastName} />
      {/* <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last Name"
          name='lastName'
          value={props.lastName}
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
      <Input
        placeholder="Confirm password"
        type="password"
        name='confirmPassword'
        value={props.confirmPassword}
        onChange={props.onChange}
        error={props.errors.confirmPassword} />
      {/* <div className="form-group">
        <label>Confirm Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Confirm Password"
          name='confirmPassword'
          value={props.confirmPassword}
          onChange={props.onChange} />
      </div> */}
      <button type="submit" className="btn btn-primary">Register</button>
    </fieldset>
  </form>
)

export default RegisterForm