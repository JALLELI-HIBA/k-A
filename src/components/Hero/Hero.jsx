import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container' >
<div className="hero-text">
    <h1>Bridging Cultures Through Artisanal Treasures </h1>
    <p>
    We are a team of passionate individuals dedicated to bridging cultures and celebrating heritage through the artistry of handcrafted treasures.
    </p>
    <button className='btn'>Explore more <img src={dark_arrow} alt='' /></button>
</div>
    </div>
  )
}

export default Hero