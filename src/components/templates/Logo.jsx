import './Logo.css'
import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'

export default props =>
  <aside className="logo">
    <Link to="/" className="logoLink">
      <img src={logo} alt="Logo"/>
    </Link>
  </aside>
