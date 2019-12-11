import React from 'react'
import { Link } from 'react-router-dom'



const Home = (props) => {

  return (
    <div>
      <div>Home Page</div>
      <Link to={'/clothing'}>Clothing</Link>
      <Link to={'/communities'}>Community</Link>
      <Link to={'/culture-books'}>Books</Link>
      <Link to={'/culture-films'}>Films</Link>
      <Link to={'/culture-music'}>Music</Link>
      <Link to={'/currents'}>Currents</Link>
      <Link to={'/register'}>Register</Link>
      <Link to={'/login'}>Login</Link>
    </div>
    
  )
}



export default Home