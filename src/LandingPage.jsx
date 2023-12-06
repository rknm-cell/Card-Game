import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
    <h1>Games!</h1>
    <Link to='/blackjack'>Blackjack</Link>
    </>
  )
}

export default LandingPage