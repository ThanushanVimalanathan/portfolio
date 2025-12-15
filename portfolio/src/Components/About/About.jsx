import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/profile.png'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>
                    IT undergraduate and part-time software developer passionate about building smart, scalable solutions. I specialize in the MERN stack, Python, and AI/ML technologies like TensorFlow, PyTorch, and scikit-learn.  
                </p>
                <p>
                    I enjoy crafting secure backend systems, seamless REST APIs, and data-driven applications.
                     With hands-on experience in modern web and mobile development, I love turning complex problems into practical solutions.
                     Always learning, always building.
                </p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>MERN Stack</p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>Python </p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>JavaFX</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>MySQL</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>AI/ML</p><hr style={{width:"70%"}} /></div>
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
