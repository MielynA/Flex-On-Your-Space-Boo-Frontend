import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
<nav style={{color : 'white'}} className="navbar-comp">
  <Link className="navbar-brand" to="/">Flex On Your Boo Space</Link>
  <div className="form-inline">
  <ul className="nav justify-content-end">
  <li className="nav-item">
  <Link className="nav-link active" to="/">
  <div className="earth_home_button"></div>
  </Link>
  </li>
  </ul>
  </div>
</nav>
    
    )
}

export default Navbar;