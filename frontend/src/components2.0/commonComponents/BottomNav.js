import React from 'react'
import { Link } from 'react-router-dom'

const BottomNav = () => (
    <div>
    <Link to={'/'} className='avenir' >Home</Link>
    <Link className='black-link' to={'/about'}>About</Link>
            <Link to={'/clothing'}>Clothing</Link>

            <Link to={'/communities'}>Community</Link>
            <Link to={'/currents'}>Current</Link>
            <a>
          Culture
            </a>

              <Link to={'/culture-books'}>
            Books
              </Link>
              <Link to={'/culture-films'}>
            Films
              </Link>
              <Link to={'/culture-music'}>
            Music
              </Link>      



              <Link to={'/register'}>
                <strong>Sign up</strong>
              </Link>
              <Link to={'/login'}>
            Log in
              </Link>
              <Link to={'/login'}>
            Log out
              </Link>

  </div>
)


export default BottomNav