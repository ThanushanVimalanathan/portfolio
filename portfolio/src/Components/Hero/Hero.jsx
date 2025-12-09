import React from 'react'
import './Hero.css'
import profile1 from '../../assets/profile1.png'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile1} alt="" />
      <h1><span>I'm Thanushaan,</span> fullstack & Python Developer based in Sri Lanka.</h1>
      <p>
        I am an enthusiastic and detail-oriented IT undergraduate with strong hands-on experience in full-stack development and AI/ML. 
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
