const mongoose = require('mongoose')
const uniqueValidatior = require('mongoose-unique-validator')



const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})


const cultureMSchema = new mongoose.Schema({
  album: { type: String },
  title: { type: String },
  image: { type: String },
  year: { type: Number },
  artist: { type: String },
  rating: { type: Number, min: 1, max: 5 },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [ commentSchema ]
}, {
  timestamps: true
})


cultureMSchema.plugin(uniqueValidatior)

module.exports = mongoose.model('cultureM', cultureMSchema)