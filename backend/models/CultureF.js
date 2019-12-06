const mongoose = require('mongoose')
const uniqueValidatior = require('mongoose-unique-validator')



const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})


const cultureFSchema = new mongoose.Schema({
  title: { type: String },
  summary: { type: String },
  year: { type: Number },
  image: { type: String },
  rating: { type: Number, min: 1, max: 5 },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [ commentSchema ]
}, {
  timestamps: true
})


cultureFSchema.plugin(uniqueValidatior)

module.exports = mongoose.model('CultureF', cultureFSchema)