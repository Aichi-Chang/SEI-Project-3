const mongoose = require('mongoose')
const uniqueValidatior = require('mongoose-unique-validator')

const ratingSchema = new mongoose.Schema({
  rating: { type: Number, min: 1, max: 5, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})

const communitySchema = new mongoose.Schema({
  title: { type: String },
  image: { type: String },
  text: { type: String },
  lng: { type: Number },
  lat: { type: Number },
  address: { type: String },
  website: { type: String },
  ratings: [ ratingSchema ]
}, {
  timestamps: true
})


communitySchema.plugin(uniqueValidatior)

module.exports = mongoose.model('Community', communitySchema)