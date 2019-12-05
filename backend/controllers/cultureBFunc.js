const CultureB = require('../models/CultureB')


// GET all 
function index(req, res) {
  CultureB
    .find()
    .populate('user')
    .then(cultureBs => res.status(200).json(cultureBs))
    .catch(err => console.log(err))
}


//GET single 
function show(req, res) {
  CultureB
    .findById(req.params.id)
    .then(cultureB => {
      if (!cultureB) res.status(404).json({ message: ' article Not Found' })
      else res.status(200).json(cultureB)
    })
    .catch(err => console.log(err))
}


//POST comment
function createComment(req, res) {
  req.body.user = req.currentUser
  CultureB
    .findById(req.params.id)
    .populate('comment.user')
    .then(cultureB => {
      if (!cultureB) return res.stauts(404).json({ message: 'article Not Found' })
      
      cultureB.comments.push(req.body)
      
      res.status(201).json({ message: 'Comment Added' })
      return cultureB.save()
    })
    .catch(err => console.log(err))
}


//DELETE comment
function removeComment(req, res) {
  req.body.user = req.currentUser
  CultureB
    .findById(req.params.id)
    .then(cultureB => {
      if (!cultureB) return res.stauts(404).json({ message: 'article Not Found' })
      
      const commentById = cultureB.comments.id(req.params.commentId)
      commentById.remove()

      res.status(410).json({ message: 'Comment Deleted' })
      return cultureB.save()
    })
    .catch(err => console.log(err))
}



module.exports = {
  index,
  show,
  createComment,
  removeComment
}