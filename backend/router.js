const router = require('express').Router()

const clothingFunc = require('./controllers/clothingFunc')
const communityFunc = require('./controllers/communityFunc')
const cultureBFunc = require('./controllers/cultureBFunc')
const cultureFFunc = require('./controllers/cultureFFunc')
const cultureMFunc = require('./controllers/cultureMFunc')
const currentFunc = require('./controllers/currentFunc')
const userFunc = require('./controllers/userFunc')

const secureRoute = require('./lib/secureRoute')



// ************************ clothing ************************
router.route('/clothings')
  .get(clothingFunc.index)
  .post(secureRoute, clothingFunc.create)


router.route('/clothings/:id')
  .get(clothingFunc.show)
  .put(secureRoute, clothingFunc.update)
  .delete(secureRoute, clothingFunc.remove)


router.route('/clothings/:id/comments')
  .post(secureRoute, clothingFunc.createComment)


router.route('/clothings/:id/comments/:commentId')
  .delete(secureRoute, clothingFunc.removeComment)




// ************************ community ************************
router.route('/communities')
  .get(communityFunc.index)


router.route('/communities/:id')
  .get(communityFunc.show)



  
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
router.route('/culture-musics')
  .get(cultureMFunc.index)


router.route('/culture-musics/:id')
  .get(cultureMFunc.show)


router.route('/culture-musics/:id/comments')
  .post(secureRoute, cultureMFunc.createComment)


router.route('/culture-musics/:id/comments/:commentId')
  .delete(secureRoute, cultureMFunc.removeComment)




// ************************ current ************************
router.route('/currents')
  .get(currentFunc.index)


router.route('/currents/:id')
  .get(currentFunc.show)



// ************************ user ************************
router.route('/register')
  .post(userFunc.register)


router.route('/login')
  .post(userFunc.login)






module.exports = router