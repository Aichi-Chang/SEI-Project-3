const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Current = require('../models/Current')
// const User = require('../models/User')
// const userData = require('./data/userData')
const currentData = require('./data/currentData')


mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) return console.log(err)
    // .then(() => User.create(userData))
    // .then(users => console.log(`${users.length} User Created!`))      
    Current.create(currentData)
      .then(current => console.log(`${current.length} Current Article Created`))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  }
)