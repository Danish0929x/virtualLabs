import React from 'react'
import './style.css'
import logo from '../../images/logo.svg'

function Navbar() {
  return (
    <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-links">
          <a href="https://zaib075x.github.io/">Get started</a>
          <a href="https://zaib075x.github.io/">Login</a>
        </div>
      </div>
  )
}

export default Navbar
