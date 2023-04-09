import React from 'react'
import './index.css'
import { fetchRandomColor } from '../../utils'


interface ProjectProps {
    title: string,
    description: string,
    link: string| null,
    images: string[],
    tech: string[]
}

function Project({ title, description, link, images, tech }: ProjectProps) {
    return (
        <div className='project'>
            <p className='project-title'>{title}</p>
            { link && <span>
                <a href={link} 
                    target="_blank">
                    <img alt="Github" 
                        src="https://img.shields.io/badge/Show Project-%2312100E.svg?&style=for-the-badge&logo=Project&logoColor=white" />
                </a>
            </span> }
            <p className='project-desc'>{description}</p>
            {
                tech.map((item, index) => (
                    <img key={index} alt={item} className='skill-tags'
                        src={`https://img.shields.io/badge/-${item}-${fetchRandomColor(item)}?style=flat-square&logo=${item}&logoColor=white`} />
                ))
            }
        </div>
    )
}

export default Project