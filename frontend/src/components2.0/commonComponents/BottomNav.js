import React from 'react'
import { Link } from 'react-router-dom'

const BottomNav = () => (
  // <nav className="navbar is-fixed-bottom">
  <div className="navbar has-background-white is-fixed-bottom">
    <Link className="vaultlogo navbar-item" to="/"><img src='../images/currentImg/Logo/Vault-Logo-Black.jpg' ></img></Link>
    <div className="container">
      <div className="navbar-brand">
      </div>
      <div className="navbar-menu is-active has-text-black is-size-4">
        <div className="navbar-start">
          <div className="navbar-item">
            <Link className='black-link' to="/">About</Link>
          </div>
          <div className="navbar-item">
            <Link className='black-link' to={'/clothing'}>Clothing</Link>
          </div>
          <div className="navbar-item">
            <Link className='black-link' to={'/communities'}>Community</Link>
          </div>
          <div className="navbar-item">
            <Link className='black-link' to={'/currents'}>Current</Link>
          </div>
  
          <div className="navbar-item has-dropdown-up is-hoverable">
            <a className="black-link navbar-link">
          Culture
            </a>
            <div className="navbar-dropdown is-hoverable">
              <Link className="navbar-item" to={'/culture-books'}>
            Books
              </Link>
              <Link className="navbar-item" to={'/culture-films'}>
            Films
              </Link>
              <Link className="navbar-item" to={'/culture-music'}>
            Music
              </Link>      
            </div>
          </div>
        </div>


        <div className="navbar-end">
          <div className="buttons navbar-item">
            <div className="buttons">
              <Link className="button is-white" to={'/register'}>
                <strong>Sign up</strong>
              </Link>
              <Link className="button is-white" to={'/login'}>
            Log in
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  // </nav>
)


export default BottomNav