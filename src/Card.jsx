import React from 'react'
import './Card.css'

const Card = ({card, value, image}) => {
  console.log(value)
  return (
    <>
    <img className='card-face' src={image} style={{padding: '1em',}}></img>
    </>
  )
}

export default Card