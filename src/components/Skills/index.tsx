import React from 'react'
import './index.css'
import { fetchRandomColor } from '../../utils'
import { skills } from '../../constant'


function ProfessionalSkills() {


    return (
        <div className='professionalskills my'>
            <p className='title animated-heading'>Professional Skills</p>
            {
                skills.map((skill, index) => (
                    <div key={index} className='skill-row'>
                        <span className='skill-title'>{skill.title}: </span>
                        {skill.tags.map((item, key) => (
                            <img key={key} alt={item} className='skill-tags'
                                src={`https://img.shields.io/badge/-${item}-${fetchRandomColor(item)}?style=flat-square&logo=${item}&logoColor=white`} />
                        ))}
                    </div>
                ))
            }
        </div>
    )
}

export default ProfessionalSkills