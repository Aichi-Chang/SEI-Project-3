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
      if (!community) res.status(404).json({ message: ' article Not Found' })
      else res.status(200).json(community)
    })
    .catch(err => console.log(err))
}



module.exports = {
  index,
  show
}