import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div id="nav-bar">
        <NavLink className="navlink" to="/"> Home </NavLink>
        <NavLink className="navlink" to="/vendors"> Vendors </NavLink>
        <NavLink className="navlink" to="/cuisines"> Cuisines </NavLink>
    </div>
  )
}

// style={{ marginRight: "20px", textDecoration: 'none' }}

export default NavBar