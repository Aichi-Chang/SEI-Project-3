const router = require('express').Router()

const clothingFunc = require('./controllers/clothingFunc')
const communityFunc = require('./controllers/communityFunc')
const cultureBFunc = require('./controllers/cultureBFunc')
const cultureFFunc = require('./controllers/cultureFFunc')
const cultureMFunc = require('./controllers/cultureMFunc')
const currentFunc = require('./controllers/currentFunc')
const userFunc = require('./controllers/userFunc')
const likeFunc = require('./controllers/likeFunc')

const secureRoute = require('./lib/secureRoute')



// ************************ clothing ************************
router.route('/clothing')
  .get(clothingFunc.index)
  .post(secureRoute, clothingFunc.create)


router.route('/clothing/:id')
  .get(clothingFunc.show)
  .put(secureRoute, clothingFunc.update)
  .delete(secureRoute, clothingFunc.remove)


router.route('/clothing/:id/comments')
  .post(secureRoute, clothingFunc.createComment)


router.route('/clothing/:id/comments/:commentId')
  .delete(secureRoute, clothingFunc.removeComment)




// ************************ community ************************
router.route('/communities')
  .get(communityFunc.index)


router.route('/communities/:id')
  .get(communityFunc.show)
  // .post(secureRoute, communityFunc.createLikes)


// router.route('/communities/:id/:likeId')  
//   .delete(secureRoute, communityFunc.removeLikes)


router.route('/communities/:id/comments')
  .post(secureRoute, communityFunc.createComment)


router.route('/communities/:id/comments/:commentId')
  .delete(secureRoute, communityFunc.removeComment)
 

  
// ************************ cultureB ************************
router.route('/culture-books')
  .get(cultureBFunc.index)


router.route('/culture-books/:id')
  .get(cultureBFunc.show)


router.route('/culture-books/:id/comments')
  .post(secureRoute, cultureBFunc.createComment)


router.route('/culture-books/:id/comments/:commentId')
  .delete(secureRoute, cultureBFunc.removeComment)



// ************************ cultureF ************************
router.route('/culture-films')
  .get(cultureFFunc.index)


router.route('/culture-films/:id')
  .get(cultureFFunc.show)


router.route('/culture-films/:id/comments')
  .post(secureRoute, cultureFFunc.createComment)


router.route('/culture-films/:id/comments/:commentId')
  .delete(secureRoute, cultureFFunc.removeComment)



// ************************ cultureM ************************
router.route('/culture-music')
  .get(cultureMFunc.index)


router.route('/culture-music/:id')
  .get(cultureMFunc.show)


router.route('/culture-music/:id/comments')
  .post(secureRoute, cultureMFunc.createComment)


router.route('/culture-music/:id/comments/:commentId')
  .delete(secureRoute, cultureMFunc.removeComment)




// ************************ current ************************
router.route('/currents')
  .get(currentFunc.index)


router.route('/currents/:id')
  .get(currentFunc.show)

router.route('/currents/:id/comments')
  .post(secureRoute, currentFunc.createComment)


router.route('/currents/:id/comments/:commentId')
  .delete(secureRoute, currentFunc.removeComment)



// ************************ user ************************
router.route('/register')
  .post(userFunc.register)


router.route('/login')
  .post(userFunc.login)



// ************************ dashboard ************************

router.route('/dashboard/:userId')
  .get(secureRoute, userFunc.retrieveLikes)
  .put(secureRoute, userFunc.updateLikes)






module.exports = router