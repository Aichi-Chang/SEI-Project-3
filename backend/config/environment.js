// Global environment variables we need in our server
const port = process.env.PORT || 8000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/the-vault'
// our secret used for encoing our JWT tokens, used in '/controllers/user' and '/lib/secureRoute'
const secret = 'This is my really secret string that nobody is going to be able to guess1'

module.exports = {
  port,
  dbURI,
  secret
}