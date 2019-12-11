const mongoose = require('mongoose')
const uniqueValidatior = require('mongoose-unique-validator')


const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})

// const likeSchema = new mongoose.Schema({
//   like: { type: Boolean, required: true },
//   user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
// })

const communitySchema = new mongoose.Schema({
  title: { type: String },
  image: { type: String },
  text: { type: String },
  lng: { type: Number },
  lat: { type: Number },
  address: { type: String },
  website: { type: String },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  comments: [ commentSchema ]
  // likes: [ likeSchema ]
}, {
  timestamps: true
})


communitySchema.plugin(uniqueValidatior)

module.exports = mongoose.model('Community', communitySchema)