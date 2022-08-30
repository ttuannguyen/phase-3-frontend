import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div id="nav-bar">
        <NavLink className="navlink" style={{ marginRight: "20px", textDecoration: 'none' }} to="/"> Home </NavLink>
        <NavLink className="navlink" style={{ marginRight: "20px", textDecoration: 'none' }} to="/vendors"> Vendors </NavLink>
        <NavLink className="navlink" style={{ marginRight: "20px", textDecoration: 'none' }} to="/cuisines"> Cuisines </NavLink>
    </div>
  )
}

export default NavBar