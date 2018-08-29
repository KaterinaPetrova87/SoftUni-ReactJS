const BASE_URL = 'https://baas.kinvey.com/'
const APP_KEY = 'kid_r1m8X1Jwm'
const APP_SECRET = '99822f2effef463b942d067235a40e1b'

let requester = {
  register: ({username, password, email, firstName, lastName, role}) => {
    return fetch(`${BASE_URL}user/${APP_KEY}/`, {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + btoa(`${APP_KEY}:${APP_SECRET}`),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password, email, firstName, lastName, role})
    }).then(res => res.json())
  },
  login: (data) => {
    return fetch(`${BASE_URL}user/${APP_KEY}/login`, {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + btoa(`${APP_KEY}:${APP_SECRET}`),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  },
  addUser: ({username, email, firstName, lastName, role}) => {
    return fetch(`${BASE_URL}appdata/${APP_KEY}/users`, {
      method: 'POST',
      headers: {
        Authorization: 'Kinvey ' + localStorage.getItem('authtoken'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, email, firstName, lastName, role})
    }).then(res => res.json())
  },
  allUsers: () => {
    return fetch(`${BASE_URL}appdata/${APP_KEY}/users?query={}&sort={"_kmd.ect": -1}`, {
      method: 'GET',
      headers: {
        Authorization: 'Kinvey ' + localStorage.getItem('authtoken'),
      }
    }).then(res => res.json())
  },
  getUserById: (userId) => {
    return fetch(`${BASE_URL}appdata/${APP_KEY}/users/${userId}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Kinvey ' + localStorage.getItem('authtoken')
      }
    }).then(res => res.json())
  },
  editUser: (data, userId) => {
    return fetch(`${BASE_URL}appdata/${APP_KEY}/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Authorization': 'Kinvey ' + localStorage.getItem('authtoken'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  },
  deleteUser: (userId) => {
    return fetch(`${BASE_URL}appdata/${APP_KEY}/users/${userId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Kinvey ' + localStorage.getItem('authtoken')
      }
    }).then(res => res.json())
  },
  addPhoto: (data) => {
    return fetch(`${BASE_URL}appdata/${APP_KEY}/photos`, {
      method: 'POST',
      headers: {
        Authorization: 'Kinvey ' + localStorage.getItem('authtoken'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  },
  allPhotos: () => {
    return fetch(`${BASE_URL}appdata/${APP_KEY}/photos?query={}&sort={"_kmd.ect": -1}`, {
      method: 'GET',
      headers: {
        Authorization: 'Kinvey ' + localStorage.getItem('authtoken'),
      }
    }).then(res => res.json())
  },
  myPhotos: (username) => {
    return fetch(`${BASE_URL}appdata/${APP_KEY}/photos?query={"author":"${username}"}&sort={"_kmd.ect": -1}`, {
      method: 'GET',
      headers: {
        Authorization: 'Kinvey ' + localStorage.getItem('authtoken')
      }
    }).then(res => res.json())
  },
  getDetails: (id) => {
    return fetch(`${BASE_URL}appdata/${APP_KEY}/photos/${id}`, {
      method: 'GET',
      headers: {
        Authorization: 'Kinvey ' + localStorage.getItem('authtoken')
      }
    }).then(res => res.json())
  },
  getPhotoToEdit: (photoId) => {
    return fetch(`${BASE_URL}appdata/${APP_KEY}/photos/${photoId}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Kinvey ' + localStorage.getItem('authtoken')
      }
    }).then(res => res.json())
  },
  editPhoto: (data, photoId) => {
    return fetch(`${BASE_URL}appdata/${APP_KEY}/photos/${photoId}`, {
      method: 'PUT',
      headers: {
        'Authorization': 'Kinvey ' + localStorage.getItem('authtoken'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  },
  deletePhoto: (photoId) => {
    return fetch(`${BASE_URL}appdata/${APP_KEY}/photos/${photoId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Kinvey ' + localStorage.getItem('authtoken')
      }
    }).then(res => res.json())
  },
  postReview: (photoId, rating, comment, author) => {
    return fetch(`${BASE_URL}appdata/${APP_KEY}/reviews`, {
      method: 'POST',
      headers: {
        'Authorization': 'Kinvey ' + localStorage.getItem('authtoken'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        photoId,
        rating,
        comment,
        author
      })
    }).then(res => res.json())
  },
  getReviews: (photoId) => {
    return fetch(`${BASE_URL}appdata/${APP_KEY}/reviews?query={"photoId":"${photoId}"}&sort={"_kmd.ect": -1}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Kinvey ' + localStorage.getItem('authtoken')
      }
    }).then(data => data.json())
  },
  getReviewById: (reviewId) => {
    return fetch(`${BASE_URL}appdata/${APP_KEY}/reviews/${reviewId}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Kinvey ' + localStorage.getItem('authtoken')
      }
    }).then(data => data.json())
  },
  editReview: (data, reviewId) => {
    return fetch(`${BASE_URL}appdata/${APP_KEY}/reviews/${reviewId}`, {
      method: 'PUT',
      headers: {
        'Authorization': 'Kinvey ' + localStorage.getItem('authtoken'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  },
  deleteReview: (reviewId) => {
    return fetch(`${BASE_URL}appdata/${APP_KEY}/reviews/${reviewId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Kinvey ' + localStorage.getItem('authtoken')
      }
    }).then(res => res.json())
  }
}

export default requester