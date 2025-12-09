import React from 'react'
import "./Services.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import Services_Data from "../../assets/services_data.js"

const Services = () => {
  return (
    <div className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="services-container">
            {Services_Data.map((service,index)=>{

            })}
        </div>
    </div>
  )
}

export default Services
