import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about-page' id='about-page' >
        <div className="about-container">
            <div className="about-top">
              <h1>Want to know <span>more</span> about <span>me?</span></h1>
              <p>Harshit Tyagi is a passionate <span>front-end</span> developer specializing in <span>React</span>. Hailing from Muzaffarnagar, Uttar Pradesh, he completed his <span>BCA</span> degree from Sharda University. Harshit has a strong commitment to <span>helping</span> others and enjoys <span>sharing</span> his knowledge and expertise with fellow developers and learners. With a keen eye for detail and a dedication to <span>crafting</span> seamless user experiences, Harshit continually seeks to enhance his skills and contribute to the <span>tech community</span>. His enthusiasm for coding and <span>teaching</span> makes him a valuable asset in any collaborative environment.</p>
            </div>
            <div className="about-bottom">
                <div className="acheivements">
                    <h1>Acheivements</h1>
                    <ul><li>100% Scholarship</li>
                    <li>Hackathon prefinalist</li></ul>
                </div>
                <div className="projects-done border-left">
                <h1>Projects</h1>
                <p>6+</p>
                </div>
                <div className="experience border-left">
                <h1>Experience</h1>
                <p>8+ months</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About