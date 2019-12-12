const Clothing = require('../models/Clothing')


// GET all clothing
function index(req, res) {
  Clothing
    .find()
    .populate('user')
    .then(clothings => res.status(200).json(clothings))
    .catch(err => console.log(err))
    // or err => res.json(err)
}

//GET single clothing
function show(req, res) {
  Clothing
    .findById(req.params.id)
    .then(clothing => {
      if (!clothing) res.status(404).json({ message: ' Item Not Found' })
      else res.status(200).json(clothing)
    })
    .catch(err => console.log(err))
}


//POST
function create(req, res) {
  req.body.user = req.currentUser
  Clothing
    .create(req.body)
    .then(() => res.status(201).json({ message: 'Item Created' }))
    .catch(err => console.log(err))
}


//PUT
function update(req, res) {
  Clothing
    .findById(req.params.id)
    .then(clothing => {
      if (!clothing) res.status(404).json({ message: ' Item Not Found' })
      if (!req.currentUser._id.equals(clothing.user)) return res.status(401).json({ message: 'Unauthorised' })
      
      clothing.set(req.body)
      
      res.status(200).json({ message: 'Item Updated' })
      return clothing.save()
    })
    .catch(err => console.log(err))
}


//DELETE
function remove(req, res) {
  Clothing
    .findById(req.params.id)
    .then(clothing => {
      if (!clothing) res.status(404).json({ message: ' Item Not Found' })
      
      clothing.remove()
      
      return res.status(200).json({ message: 'Item Deleted' })
    })
    .catch(err => console.log(err))
}


//POST comment
function createComment(req, res) {
  req.body.user = req.currentUser
  Clothing
    .findById(req.params.id)
    .populate('comment.user')
    .then(clothing => {
      if (!clothing) return res.status(404).json({ message: 'Item Not Found' })
      
      clothing.comments.push(req.body)
      
      res.status(201).json(clothing.comments)
      return clothing.save()
    })
    .catch(err => console.log(err))
}


//DELETE comment
function removeComment(req, res) {
  req.body.user = req.currentUser
  Clothing
    .findById(req.params.id)
    .then(clothing => {
      if (!clothing) return res.status(404).json({ message: 'Article Not Found' })
      
      const commentById = clothing.comments.id(req.params.commentId)
      commentById.remove()
      return clothing.save()
    })
    .then(clothing =>  Clothing.populate(clothing, 'user comments.user'))
    .then(clothing => res.json(clothing))
    .catch(err => console.log(err))
}


//PUT comment
// function updateComment(req, res) {
//   req.body.user = req.currentUser
//   Clothing
//     .findById(req.params.id)
//     .then(clothing => {
//       if (!clothing) return res.stauts(404).json({ message: 'Item Not Found' })

//       const commentById = clothing.comments.id(req.params.commentId)
//       commentById.set(req.body)

//       res.status(200).json({ message: 'Comment Updated' })
//       return clothing.save()
//     })
//     .catch(err => console.log(err))
// }




module.exports = {
  index,
  show,
  create,
  update,
  remove,
  createComment,
  removeComment
  // updateComment
}