import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/profile.png'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>
                    I am an enthusiastic and detail-oriented IT undergraduate with strong hands-on experience in full-stack development and AI/ML.   
                </p>
                <p>
                    My core expertise includes the MERN stack, Java, and Python, along with practical knowledge in building secure REST APIs, authentication systems (JWT, OAuth), and scalable backend solutions.
                </p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>MERN Stack</p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>Python </p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>JavaFX</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>MySQL</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>PowerBi</p><hr style={{width:"80%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>1+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
            <p>PERSONAL PROJECT COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>ACADAMIC PROJECT</p>
        </div>
      </div>
    </div>
  )
}

export default About
