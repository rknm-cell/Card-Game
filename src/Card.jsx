import React from 'react'
import './Card.css'

const Card = ({card, value, image}) => {
  console.log(value)
  return (
    <>
    <img className='card-face' src={image} style='height: 100px; width: 100px;'></img>
    </>
  )
}

export default Card