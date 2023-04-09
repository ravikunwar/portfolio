import React from 'react'
import './index.css'
import { socials } from '../../constant'


function Footer() {
    return (
        <div className='footer'>
            <div className='footer-messages'>
                <p className='build-msg'>Build with ❤️ by <span>RAVI KUNWAR</span></p>
                <p className='copyright'>Copyright ©️ 2023 | All Rights Reserved</p>

            </div>
            <div className='links'>
                {socials.GITHUB && <a href={socials.GITHUB} target="_blank">
                    <img alt="Github" src="https://img.shields.io/badge/-github?style=social&label=Github&logo=Github"/>
                </a>}

                {socials.LEETCODE && <a href={socials.LEETCODE} target="_blank">
                    <img alt="Leetcode" src="https://img.shields.io/badge/-leetcode?style=social&label=Leetcode&logo=Leetcode"/>
                </a>}

                {socials.INSTAGRAM && <a href={socials.INSTAGRAM} target='_blank'>
                    <img alt="Instagram" 
                        src="https://img.shields.io/badge/-rvikunwar?style=social&logo=Instagram&label=Instagram"/>
                </a>}

                {socials.LINKEDIN && <a href={socials.LINKEDIN} target="_blank">
                    <img alt="Linkedin" src="https://img.shields.io/badge/-ravikunwar?style=social&logo=linkedin&label=LinkedIn"/>
                </a>}

                {socials.TWITTER && <a href={socials.TWITTER} target="_blank">
                    <img alt="Twitter" src="https://img.shields.io/badge/-rvikunwar?style=social&logo=Twitter&label=Twitter"/>
                </a>}

                {socials.MAIL && <a href={`mailto:${socials.MAIL}`}>
                    <img alt="Mail" src="https://img.shields.io/badge/-mail?style=social&logo=Email&label=Email"/>
                </a>}

                {socials.HASHNODE && <a href={socials.HASHNODE}>
                    <img alt="Hashnode" src="https://img.shields.io/badge/-hashnode?style=social&logo=Hashnode&label=Hashnode"/>
                </a>}

                {socials.UPWORK && <a href={socials.UPWORK}>
                    <img alt="Upwork" src="https://img.shields.io/badge/-upwork?style=social&logo=Upwork&label=Upwork"/>
                </a>}

            </div>
        </div>
    )
}

export default Footer