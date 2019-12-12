const CultureF = require('../models/CultureF')


// GET all 
function index(req, res) {
  CultureF
    .find()
    .populate('user')
    .then(cultureFs => res.status(200).json(cultureFs))
    .catch(err => console.log(err))
}


//GET single 
function show(req, res) {
  CultureF
    .findById(req.params.id)
    .then(cultureF => {
      if (!cultureF) res.status(404).json({ message: ' article Not Found' })
      else res.status(200).json(cultureF)
    })
    .catch(err => console.log(err))
}


//POST comment
function createComment(req, res) {
  req.body.user = req.currentUser
  CultureF
    .findById(req.params.id)
    .populate('comment.user')
    .then(cultureF => {
      if (!cultureF) return res.status(404).json({ message: 'article Not Found' })
      
      cultureF.comments.push(req.body)
      
      res.status(201).json(cultureF.comments)
      return cultureF.save()
    })
    .catch(err => console.log(err))
}


//DELETE comment
function removeComment(req, res) {
  CultureF
    .findById(req.params.id)
    .then(cultureF => {
      if (!cultureF) return res.status(404).json({ message: 'articleNot Found' })
      
      const commentById = cultureF.comments.id(req.params.commentId)
      commentById.remove()
      return cultureF.save()
    })
    .then(cultureF =>  CultureF.populate(cultureF, 'user comments.user'))
    .then(cultureF => res.json(cultureF))
    .catch(err => console.log(err))
}



module.exports = {
  index,
  show,
  createComment,
  removeComment
}