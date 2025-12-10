import React, { useState } from 'react'
import './Navbar.css'
import NameLogo from '../../assets/NameLogo.png'
import underline from '../../assets/nav_underline.svg'
import {Link} from 'react-scroll'





const Navbar = () => {

  const [menu,setMenu] = useState("home")
  
  return (
    <div className='navbar'>
      <img className='navbar-img' src={NameLogo} alt="" />
      <ul className='nav-menu'>
        <li><Link to='home' smooth={true} duration={200}><p onClick={()=>setMenu("home")}>Home</p></Link>{menu==="home"?<img src={underline} alt=''/>:<></>}</li>
        <li><Link to='about' smooth={true} duration={1000}><p onClick={()=>setMenu("about")}>About Me</p></Link>{menu==="about"?<img src={underline} alt=''/>:<></>}</li>
        <li><Link to='services' smooth={true} duration={1500}><p onClick={()=>setMenu("services")}>Services</p></Link>{menu==="services"?<img src={underline} alt=''/>:<></>}</li>
        <li><Link to='work' smooth={true} duration={1800}><p onClick={()=>setMenu("work")}>Portfolio</p></Link>{menu==="work"?<img src={underline} alt=''/>:<></>}</li>
        <li><Link to='contact' smooth={true} duration={2000}><p onClick={()=>setMenu("contact")}>Contact</p></Link>{menu==="contact"?<img src={underline} alt=''/>:<></>}</li>
      </ul>
      <div className="nav-connect"><Link to='contact' smooth={true} duration={2000}>Connect with me</Link></div>
    </div>
  )
}

export default Navbar
