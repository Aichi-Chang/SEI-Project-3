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



module.exports = {
  index,
  show
}
