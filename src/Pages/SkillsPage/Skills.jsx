import React, { useContext } from 'react'
import skills from '../../Assets/Skills/skills'
import Card from '../../Components/Card2/Card'
import { Context } from '../../Context/context'
import './Skills.css'

const Skills = () => {
    const {Skills} = useContext(Context)
  return (
    <div className='skills-page'>
        <p>{`{ Skills }`}</p>
        <div className="skills">
        {
            skills.map((item, i) => {
                return <Card title={item.title} img={item.image} perc={item.perc}/>
            })
        }
        </div>
    </div>
  )
}

export default Skills