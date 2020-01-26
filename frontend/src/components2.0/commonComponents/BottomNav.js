import React from 'react'
import { Link } from 'react-router-dom'
import 'bulma'

const BottomNav = () => {
  const [navClassName, setNavClassName] = React.useState('navbar-menu')

  const clickBurger = () => {
    if (navClassName === 'navbar-menu') {
      setNavClassName('navbar-menu is-active')
    } else {
      setNavClassName('navbar-menu')
    }
  }

  return (
    <nav className="navbar is-fixed-bottom" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="vaultlogo navbar-item" to="/"><img src='https://i.imgur.com/CkiDcD4.png' ></img></Link>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={clickBurger}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-menu is-active has-text-black is-size-4">
        <div id="navbarBasicExample" className={navClassName}>
          <div className="navbar-start">
            <div className="navbar-item">
              <Link className='black-link' to={'/about'}>About</Link>
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
                <Link className="button is-white" to={'/login'}>
                  Log out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav >
  )
}

export default BottomNav