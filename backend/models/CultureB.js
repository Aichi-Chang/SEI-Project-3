const mongoose = require('mongoose')
const uniqueValidatior = require('mongoose-unique-validator')



const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})


const cultureBSchema = new mongoose.Schema({
  author: { type: String },
  title: { type: String },
  year: { type: Number },
  review: { type: String },
  image: { type: String },
  rating: { type: Number, min: 1, max: 5 },
  category: { type: String },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', require: true },
  comments: [ commentSchema ]
}, {
  timestamps: true
})


cultureBSchema.plugin(uniqueValidatior)

module.exports = mongoose.model('CultureB', cultureBSchema)