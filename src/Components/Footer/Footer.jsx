import React from 'react'
import email from '../../Assets/Images/email.png'
import github from '../../Assets/Images/github.png'
import instagram from '../../Assets/Images/instagram.png'
import linkedin from '../../Assets/Images/linkedin.png'
import phone from '../../Assets/Images/phone-call.png'
import twitter from '../../Assets/Images/twitter.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="contact-info">
                <p><img src={email} />tyagiharshit651@gmail.com</p>
                <div></div>
                <p><img src={phone} />91+ 7906875030</p>
            </div>
            <div className="socials">
                <a href='https://www.linkedin.com/in/harshit-tyagi-a44b05263/'><img src={linkedin} /></a>
                <a href='https://github.com/HarshitTyagi651'><img src={github} /></a>
                <a href='https://x.com/harxit_tyagi'><img src={twitter} /></a>
                <a href='https://www.instagram.com/harxit1.0?igsh=MWYzNDF6emJqcGZwaw=='><img src={instagram} /></a>

            </div>
        </div>
    </div>
  )
}

export default Footer