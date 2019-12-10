const Community = require('../models/Community')
const Clothing = require('../models/Clothing')


// GET user liked articles (community)
function likeCommunity(req, res) {
  req.body.user = req.currentUser
  Community
    .find({ 'likes.user': req.params.userId }) 
    .then(articles => {
      return res.status(200).json(articles)
    })
    .catch(err => console.log(err))  
}

// GET user liked articles (clothing)
function likeClothing(req, res) {
  req.body.user = req.currentUser
  Clothing
    .find({ 'likes.user': req.params.userId }) 
    .then(items => {
      return res.status(200).json(items)
    })
    .catch(err => console.log(err))  
}


// function likeIndex() {
//   likeCommunity()
//   likeClothing()
// }



module.exports = {
  likeClothing,
  likeCommunity
}