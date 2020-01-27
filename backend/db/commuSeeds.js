const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Community = require('../models/Community')
// const User = require('../models/User')
const commuData = require('./data/CommuData')


mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) return console.log(err)
    // .then(() => User.create(userData))
    // .then(users => console.log(`${users.length} User Created!`))      
    Community.create(commuData)  
      .then(current => console.log(`${current.length} Commu Article Created`))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  }
)