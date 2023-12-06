import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/games'>Games</Link></li>
    </>
  )
}

export default NavBar