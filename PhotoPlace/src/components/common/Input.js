import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <div className="form-group">
        <label>{this.props.placeholder}</label>
        <input
          type={this.props.type}
          className="form-control"
          placeholder={this.props.placeholder}
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange} />
          {this.props.error ? (
            <div className="alert alert-dismissible alert-danger">{this.props.error}</div>
          ) : ('')}
      </div>
    )
  }
}