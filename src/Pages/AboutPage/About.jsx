import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about-page' id='about-page' >
        <div className="about-container">
            <div className="about-top">
                <div className="about-left">
                <p>{`{ About me }`}</p>
                </div>
                <div className="about-right">
                <p>I bridge the gap between design and development.  I'm a full-stack web developer who enjoys crafting beautiful interfaces and ensuring smooth functionality under the hood.</p>
                </div>
            </div>
            <div className="about-bottom">
                <div className="projects-done">
                    <h1>10+</h1>
                    <p>Projects Completed</p>
                </div>
                <div className="awards-recieved border-left">
                <h1>2+</h1>
                <p>Awards Received</p>
                </div>
                <div className="experience border-left">
                <h1>2+ years</h1>
                <p>Experience</p>
                </div>
                <div className="happy-developer border-left">
                <h1>1</h1>
                <p>Happy Developer</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About