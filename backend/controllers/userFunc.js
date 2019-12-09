const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

function register(req, res) {
  User
    .create(req.body) // same as creating any other resource, see animals create controller, except runs our extra pre 'save' and 'validate' methods. See /models/User for these.
    .then(user => res.status(200).json({ message: `Hello ${user.username}, thank you for registering` })) // if creates succesfully, send a welcome message with users username embedded
    .catch(err => {
      console.log(err)
      res.status(200).json({ message: 'Problem registering account', error: err.message })
    })
}

// login route -/login
// user supplies in body of request, email and password only
function login(req, res) {
  User
    .findOne({ email: req.body.email }) //find the user by that email
    .then(user => { //check to if we found a record and the password provided matches what is in the database
      if (!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unauthorized' }) // send a response of unauthorized and end the process here
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '12h' }) // if all good, create a JSON web token (jwt), baking in the user id, a secret to encode/decode and an expiry time for the token
      res.status(202).json({ message: `Welcome Back ${user.username}`, token, user })
    }) //finally send back a message with that created token
    .catch(() => res.status(401).json({ message: 'Unauthorized' } ))
}

// find user liked articles
function retrieveLikes(req, res) {
  User
    .findOne({ _id: req.params.userId })
    .then(user => {
      if (!user) res.status(404).json({ message: 'User Not Found' })
      return res.status(200).json(user)
    })
    .catch(err => console.log(err))
}


// PUT user liked articles
function updateLikes(req, res) {
  req.body.user = req.currentUser
  User
    .findOne({ _id: req.params.userId })
    .then(user => {
      if (!user) res.status(404).json({ message: 'User Not Found' })
      user.likes.push(req.body)
      
      res.status(201).json(user)
      return user.save()
    })
    
    .catch(err => console.log(err))
}






module.exports = {
  register,
  login,
  retrieveLikes,
  updateLikes
}
// exporting each 'route handling' function, taking advantage of es6 object short hand, same as saying { login: login }