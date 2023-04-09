import React from 'react'
import './index.css'
import { education } from '../../constant'


function Education() {

    return (
        <div className='education my'>
            <p className='title animated-heading'>Education</p>
            {
                education.map((item, index) => (
                    <div key={index} className='education-section'>
                        <img src={item.image} alt="image" className='image-section'/>

                        <div>
                            <p className='education-name'>{item.name}</p>
                            <p className='educaton-title'>{item.title}</p>
                            <p className='education-score'>{item.score}, {item.timeline}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Education