import React, { useContext } from 'react'
import { Context } from '../../Context/context'
import './Skills.css'

const Skills = () => {
    const {Skills} = useContext(Context)
  return (
    <div className='skills-page' id='skills-page'>
       <div className="skills-cont">
          <div className="languages">
            <h1>Languages</h1>
            <ul>
              <li>JavaScript</li>
              <li>Java(beginner)</li>
              <li>Python(beginner)</li>
            </ul>
          </div>
          <div className="frontend">
            <h1>Frontend</h1>
            <ul>
              <li>HTML and CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className="backend">
            <h1>Backend</h1>
            <ul>
              <li>Node JS</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div className="primary-tools">
            <h1>Primary Tools</h1>
            <ul>
              <li>Visual Studio Code</li>
              <li>Android Studio</li>
              <li>Git and Github</li>
              <li>Spline</li>
            </ul>
          </div>
       </div>
    </div>
  )
}

export default Skills