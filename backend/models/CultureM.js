const mongoose = require('mongoose')
const uniqueValidatior = require('mongoose-unique-validator')



const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})


const cultureMSchema = new mongoose.Schema({
  album: { type: String },
  title: { type: String },
  image: { type: String },
  year: { type: Number },
  artist: { type: String },
  summary: { type: String },
  rating: { type: String },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', require: true },
  comments: [ commentSchema ]
}, {
  timestamps: true
})


cultureMSchema.plugin(uniqueValidatior)

module.exports = mongoose.model('CultureM', cultureMSchema)