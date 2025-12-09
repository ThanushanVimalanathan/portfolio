import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/profile.png'

const About = () => {
  return (
    <div className='about'>
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
                    I have worked on real-world projects involving machine learning, computer vision, and mobile app development. Currently, I contribute as a part-time software developer at Seekers Cloud Inc, where I develop production-ready features, debug complex issues, and collaborate in an agile environment.
                </p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML ,CSS & JavaScript</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>MongoDB ,Express.Js ,React.Js & Node.Js</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Python </p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>AI and ML</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>JavaFX</p><hr style={{width:"70%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievement">
        <div className="about-achievement">
            <h1>10+</h1>
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
