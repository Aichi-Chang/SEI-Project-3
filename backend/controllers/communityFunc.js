const Community = require('../models/Community')


// GET all 
function index(req, res) {
  Community
    .find()
    .populate('user')
    .then(communities => res.status(200).json(communities))
    .catch(err => console.log(err))
}


//GET single 
function show(req, res) {
  Community
    .findById(req.params.id)
    .then(community => {
      if (!community) res.status(404).json({ message: ' Article Not Found' })
      else res.status(200).json(community)
    })
    .catch(err => console.log(err))
}


//POST rating
function createRating(req, res) {
  req.body.user = req.currentUser
  Community
    .findById(req.params.id)
    .populate('rating.user')
    .then(community => {
      if (!community) return res.status(404).json({ message: 'Article Not Found' })

      community.ratings.push(req.body)
      
      res.status(201).json({ message: 'Rating Added' })
      return community.save()
    })
    .catch(err => console.log(err))
}


//DELETE rating
function removeRating(req, res) {
  req.body.user = req.currentUser
  Community
    .findById(req.params.id)
    .then(community => {
      if (!community) return res.status(404).json({ message: 'Article Not Found' })
      
      const ratingById = community.ratings.id(req.params.raId)
      ratingById.remove()

      res.status(410).json({ message: 'Rating Deleted' })
      return community.save()
    })
    .catch(err => console.log(err))
}


// POST liked articles
function saveToDash(req, res) {
  req.body.user = req.currentUser
  Community
    .findById(req.params.id)
    .populate('like.user')
    .then(community => {
      if (!community) return res.status(404).json({ message: 'Not Found' })
    
      !!community.likes

      res.status(201).json({ message: 'liked' })
      return community.save()
    })
    .catch(err => console.log(err))
}



// DELETE liked articles
function removeFromDash(req, res) {
  req.body.user = req.currentUser
  Community
    .findById(req.params.id)
    .then(community => {
      if (!community) return res.status(404).json({ message: 'Not Found' })
    
      !community.likes

      res.status(201).json({ message: 'Unliked' })
      return community.save()
    })
    .catch(err => console.log(err))
}






module.exports = {
  index,
  show,
  createRating,
  removeRating,
  saveToDash,
  removeFromDash
}