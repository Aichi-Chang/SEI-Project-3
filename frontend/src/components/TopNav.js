import React from 'react'
// import { Link } from 'react-router-dom'

const TopNav= () => (
  <div className="navbar has-background-black">
    <div className="container">
      <div className="navbar-brand">
        <Link className="vaultlogo navbar-item has-text-white has-text-weight-bold is-size-5" to="/"><img src='../images/currentImg/Logo/Vault-Logo-Black.jpg' ></img></Link>
      </div>
      <div className="navbar-menu is-active">
        <div className="navbar-end">
          <div className="navbar-item">
            <Link className='white' to="/">Home</Link>
          </div>
          <div className="navbar-item">
            <Link className='white' to="/register">Register</Link>
          </div>
          <div className="navbar-item">
            <Link className='white'to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)


export default TopNav