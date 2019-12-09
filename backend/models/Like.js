const mongoose = require('mongoose')


const likeSchema = new mongoose.Schema({
  text: { type: String },
  likes: { type: mongoose.Schema.ObjectId, ref: 'User' }
})


module.exports = mongoose.model('Like', likeSchema)