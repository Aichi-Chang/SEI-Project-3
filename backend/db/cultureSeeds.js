const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const CultureB = require('../models/CultureB')
const CultureF = require('../models/CultureF')
const CultureM = require('../models/CultureM')
const User = require('../models/User')
// const userData = require('./data/userData.js')
const cultureBData = require('./data/cultureBData')
const cultureFData = require('./data/cultureFData')
const cultureMData = require('./data/cultureMData')


mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) return console.log(err)
    User.create([{
      username: 'Sonia',
      email: 'xxx@gmail.com',
      password: '12345',
      passwordConfirmation: '12345'
    }])
      .then(users => {
        console.log(`${users.length} Culture User Created`)
        return CultureB.create(cultureBData(users))
      })
      .then(cultureB => console.log(`${cultureB.length} Book Articles Created`)) 
      .catch(err => console.log(err))
      .then(() => {
        return User.find({
          username: 'Sonia'
        })
      })     
      .then((users) => {
        // console.log(users[0])
        return CultureF.create(cultureFData(users))
      })
      .then(cultureF => console.log(`${cultureF.length} Film Articles Created`))
      .catch(err => console.log(err))
      .then(() => {
        return User.find({
          username: 'Sonia'
        })
      })
      .then((users) => {
        return CultureM.create(cultureMData(users))
      })
      .then(cultureM => {
        console.log(`${cultureM.length} Music Articles Created`)
      })  
      .finally(() => mongoose.connection.close())
  }
  
)  