const mongoose = require('mongoose')
const uniqueValidatior = require('mongoose-unique-validator')

const communitySchema = new mongoose.Schema({
  title: { type: String },
  subTitle: { type: String },
  image: { type: String },
  text: { type: String },
  lng: { type: Number },
  lat: { type: Number },
  address: { type: String }
}, {
  timestamps: true
})


communitySchema.plugin(uniqueValidatior)

module.exports = mongoose.model('Community', communitySchema)