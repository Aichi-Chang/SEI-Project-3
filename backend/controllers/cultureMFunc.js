const CultureM = require('../models/CultureM')


// GET all 
function index(req, res) {
  CultureM
    .find()
    .populate('user')
    .then(cultureMs => res.status(200).json(cultureMs))
    .catch(err => console.log(err))
}


//GET single 
function show(req, res) {
  CultureM
    .findById(req.params.id)
    .then(cultureM => {
      if (!cultureM) res.status(404).json({ message: ' article Not Found' })
      else res.status(200).json(cultureM)
    })
    .catch(err => console.log(err))
}


//POST comment
function createComment(req, res) {
  req.body.user = req.currentUser
  CultureM
    .findById(req.params.id)
    .populate('comment.user')
    .then(cultureM => {
      if (!cultureM) return res.status(404).json({ message: 'article Not Found' })
      
      cultureM.comments.push(req.body)
      
      res.status(201).json(cultureM.comments)
      return cultureM.save()
    })
    .catch(err => console.log(err))
}


//DELETE comment
function removeComment(req, res) {
  req.body.user = req.currentUser
  CultureM
    .findById(req.params.id)
    .then(cultureM => {
      if (!cultureM) return res.status(404).json({ message: 'articleNot Found' })
      
      const commentById = cultureM.comments.id(req.params.commentId)
      commentById.remove()

      return cultureM.save()
    })
    .then(cultureM =>  CultureM.populate(cultureM, 'user comments.user'))
    .then(cultureM => res.json(cultureM))
    .catch(err => console.log(err))
}



module.exports = {
  index,
  show,
  createComment,
  removeComment
}