const Current = require('../models/Current')


// GET all 
function index(req, res) {
  console.log('Loading currents index...')
  Current
    .find()
    .populate('user')
    .then(currents => {
      console.log('Sending all currents...')
      res.status(200).json(currents)
    })
    .catch(err => console.log(err))
}


//GET single 
function show(req, res) {
  Current
    .findById(req.params.id)
    .then(current => {
      if (!current) res.status(404).json({ message: ' article Not Found' })
      else res.status(200).json(current)
    })
    .catch(err => console.log(err))
}

//POST comment
function createComment(req, res) {
  req.body.user = req.currentUser
  Current
    .findById(req.params.id)
    .populate('comment.user')
    .then(current => {
      if (!current) return res.status(404).json({ message: 'article Not Found' })
      
      current.comments.push(req.body)
      
      res.status(201).json({ message: 'Comment Added' })
      return current.save()
    })
    .catch(err => console.log(err))
}


//DELETE comment
function removeComment(req, res) {
  req.body.user = req.currentUser
  Current
    .findById(req.params.id)
    .then(current => {
      if (!current) return res.status(404).json({ message: 'articleNot Found' })
      
      const commentById = current.comments.id(req.params.commentId)
      commentById.remove()

      res.status(200).json({ message: 'Comment Deleted' })
      return current.save()
    })
    .catch(err => console.log(err))
}


module.exports = {
  index,
  show,
  createComment,
  removeComment
}
