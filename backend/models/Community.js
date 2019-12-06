const mongoose = require('mongoose')
const uniqueValidatior = require('mongoose-unique-validator')

const communitySchema = new mongoose.Schema({
  title: { type: String },
  image: { type: String },
  text: { type: String },
  lng: { type: Number },
  lat: { type: Number },
  rating: { type: Number, min: 1, max: 5 }
}, {
  timestamps: true
})


communitySchema.plugin(uniqueValidatior)

module.exports = mongoose.model('Community', communitySchema)