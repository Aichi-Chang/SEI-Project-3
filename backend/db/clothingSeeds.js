const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Clothing = require('../models/Clothing')
const User = require('../models/User')
const clothingData = require('./data/clothingData')
// const userData = require('./data/userData.js')
mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, db) => {
    if (err) return console.log(err)
    db.dropDatabase()
      .then(() => {
        return User.create([{
          username: 'Lucy',
          email: 'xxx@gmail.com',
          password: '12345',
          passwordConfirmation: '12345'
        }])
      })  
      .then(users => {
        console.log(`${users.length} Clothing User Created`)
        return Clothing.create(clothingData(users))
      })
      .then(clothing => console.log(`${clothing.length} Item Created`))     
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  }
)