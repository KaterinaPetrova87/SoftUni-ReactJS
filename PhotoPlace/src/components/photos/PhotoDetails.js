import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReviewSection from './../reviews/ReviewSection'
import requester from './../../utils/requester'
import Auth from '../../utils/Auth'
import TimeAgo from 'timeago-react'
import timeago from 'timeago.js'
timeago.register('en', require('timeago.js/locales/en'));

export default class PhotoDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photo: false
    }
  }

  componentDidMount = () => {
    this.getData()
  }

  getData = () => {
    requester.getDetails(this.props.match.params.id)
      .then(photo => {
        this.setState({ photo })
      })
  }

  render() {
    let date = ''
    if (this.state.photo) {
      date = <TimeAgo
        datetime={this.state.photo._kmd.ect}
        locale='bg' />
    }
    return (
      <div>
        <div className="row space-top">
          <div className="col-md-6">
            <div className="card text-white bg-primary">
              <div className="card-body">
                <blockquote className="card-blockquote">
                  <img className="details" src={this.state.photo.photo} alt={this.state.photo.photo} />
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <p className="details"><b>Title:</b> {this.state.photo.title}</p>
            <hr />
            <p className="details"><b>Category:</b> {this.state.photo.category}</p>
            <p className="details"><b>Description:</b> {this.state.photo.description}</p>
            <p className="details"><b>Published:</b> {date} by {this.state.photo.author}</p>
            <hr />
            {localStorage.getItem('username') === this.state.photo.author || Auth.isAdmin()? (
              <div className="btns">
                <Link to={'/photo/edit/' + this.props.match.params.id}><button type="button" className="btn btn-success left">Edit photo</button></Link>
                <Link to={'/photo/delete/' + this.props.match.params.id}><button type="button" className="btn btn-danger right">Delete photo</button></Link>
              </div>
            ) : (null)}
          </div>
        </div>
          <ReviewSection photoId={this.props.match.params.id}/>
      </div>
    )
  }
}