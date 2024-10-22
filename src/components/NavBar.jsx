// rafce
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.modules.css'

const NavBar = () => {
  return (
    <nav>
      {/* <h3>NavBar</h3> */}
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/historia"> História </NavLink>
      <NavLink to="cadastro"> Cadastro </NavLink>
    </nav>
  )
}

export default NavBar