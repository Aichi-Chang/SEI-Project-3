import jwt from  'jsonwebtoken'


class Auth {
  static setToken(token) {
    localStorage.setItem('token', token)
  }

  static setUser(user) {
    localStorage.setItem('user', JSON.stringify(user))
  }


  static getToken() {
    return localStorage.getItem('token')
  }


  static getUser() {
    return JSON.parse(localStorage.getItem('user'))
  }

  static getPayload() {
    return jwt.decode(this.getToken())
  }

  static isAuthenticated() {
    const payload = this.getPayload()
    // why do we need to know if we are logged in???
    const now = Math.round(Date.now() / 1000)
    return payload && now < payload.exp
  }


}

export default Auth