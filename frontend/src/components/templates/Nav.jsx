import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
  <aside className="menu-area">
    <nav className="menu">
      <Link to="/" className="home">
        Home
      </Link>
      <Link to="/stocks" className="stocks">
        Stocks
      </Link>
    </nav>
  </aside>
