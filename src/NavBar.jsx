import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div style={'flex-direction: row;'}>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/blackjack'>Blackjack</Link></li>
    </div>
  )
}

export default NavBar