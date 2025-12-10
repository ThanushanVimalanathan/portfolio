import React from 'react'
import './Hero.css'
import profile1 from '../../assets/profile1.png'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile1} alt="" />
      <h1><span>I'm Thanushan,</span> fullstack & Python Developer based in Sri Lanka.</h1>
      <p>
        I am an enthusiastic and detail-oriented IT undergraduate with strong hands-on experience in full-stack development and AI/ML. 
      </p>
      <div className="hero-action">
        <div className="hero-connect"><Link to='contact' smooth={true} duration={2000}>Connect with me</Link></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
