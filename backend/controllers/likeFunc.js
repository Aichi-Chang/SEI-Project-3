const Community = require('../models/Community')



// GET user liked articles
function likeIndex(req, res) {
  req.body.user = req.currentUser
  Community
    .find({ 'likes.user': req.params.userId }) 
    .then(articles => {
      return res.status(200).json(articles)
    })
    .catch(err => console.log(err))  
}



module.exports = {
  likeIndex
}