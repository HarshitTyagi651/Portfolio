import React from 'react'
import TimeLine from '../../Components/TimeLine/Timeline'
import './Education.css'

const Education = () => {
  return (
    <div className='education' id='education-page'>
        <h1>Education <div></div></h1>
        <div className="education-container">
            <TimeLine />
        </div>
    </div>
  )
}

export default Education