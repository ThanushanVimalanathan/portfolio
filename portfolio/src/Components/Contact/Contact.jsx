import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new project, so feel free to send me a message about anything that you want....</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /><p>thanushaan69@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                       <img src={call_icon} alt="" /><p>+94-77-664-0272</p>
                    </div>
                    <div className="contact-detail">
                       <img src={location_icon} alt="" /><p>Colombo, Western Province</p>
                    </div>
                </div>
            </div>
            <form className='contact-right'>
                <label htmlFor="">Your Name:</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email:</label>
                <input type="email" placeholder='Enter your email' />
                <label htmlFor="">Right your message here:</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button className='contact-submit' type='submit'>Submit now</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
