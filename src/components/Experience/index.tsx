import React from 'react'
import './index.css'
import { experience } from '../../constant'


function Experience() {

    return (
        <div className='experience my'>
            <p className='title animated-heading'>Internship/Experience</p>
            {
                experience.map((item, index) => (
                    <div key={index} className='education-section'>
                        {/* <div>
                        
                    </div> */}
                        <div>
                            <div className='exp-heading'>
                                <span className='company'>{item.company}</span> | <span className='position'>{item.position}</span>
                                <img src={item.image} alt="image" className='company-image' />
                            </div>
                            <p className='exp-timeline'>{item.timeline}</p>
                            <div className='bullets'>
                                <ul>
                                    {item.points.map(point => (
                                        <li className='point'>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Experience