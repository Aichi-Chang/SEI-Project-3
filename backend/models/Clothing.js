const mongoose = require('mongoose')
const uniqueValidatior = require('mongoose-unique-validator')

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})


const clothingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  text: { type: String },
  size: { type: Number, required: true },
  brand: { type: String },
  decade: { type: Number, required: true },
  product: { type: String },
  department: { type: String },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [ commentSchema ]
}, {
  timestamps: true
})


clothingSchema.plugin(uniqueValidatior)

module.exports = mongoose.model('Clothing', clothingSchema)

