class Auth {
  static authenticateUser (authtoken, username, userId, role) {
    localStorage.setItem('authtoken', authtoken)
    localStorage.setItem('username', username)
    localStorage.setItem('userId', userId)
    localStorage.setItem('role', role)
  }

  static isUserAuthenticated () {
    return localStorage.getItem('authtoken') !== null
  }

  static isAdmin () {
    return localStorage.getItem('role') === 'admin'
  }

  static deauthenticateUser () {
    localStorage.clear()
  }

  static getToken () {
    return localStorage.getItem('authtoken') 
  }
}

export default Auth