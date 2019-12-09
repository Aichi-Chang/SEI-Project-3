const mongoose = require('mongoose')
const uniqueValidatior = require('mongoose-unique-validator')

const currentSchema = new mongoose.Schema({
  title: { type: String },
  image: { type: String },
  text: { type: String },
  author: { type: String },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
}, {
  timestamps: true
})


currentSchema.plugin(uniqueValidatior)

module.exports = mongoose.model('Current', currentSchema)