import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about-page'>
        <div className="about-container">
            <div className="about-top">
                <div className="about-left">
                <p>{`{ Recent Projects }`}</p>
                </div>
                <div className="about-right">
                <p>My services perform exactly that functions that are needed. To create interfaces that are easy to learn and master for the clients and users.</p>
                </div>
            </div>
            <div className="about-bottom">
                <div className="projects-done">
                    <h1>50+</h1>
                    <p>Projects Completed</p>
                </div>
                <div className="awards-recieved border-left">
                <h1>10+</h1>
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