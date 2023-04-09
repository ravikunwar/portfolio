import React from 'react'
import './index.css'
import { socials } from '../../constant'
import Upwork from '../../assets/socials/upwork.png'
import Leetcode from '../../assets/socials/leetcode.png'


function AboutMe() {
    return (
        <div className='aboutme' id="aboutme">
            <div className='name-socials'>
                <p className='name'>RAVI KUNWAR</p>
                <p>
                    <span className='location'><i className="icons-sm fa fa-map-marker" aria-hidden="true"></i>Dehradun, India</span>
                    <div className="social-icons">
                        { socials.LINKEDIN && <a href={socials.LINKEDIN} target="_blank">
                            <i className="icons fab fa-linkedin"></i>
                        </a> }

                        { socials.MAIL && <a href={`mailto:${socials.MAIL}`} target="_blank">
                            <i className="icons fas fa-envelope"></i>
                        </a>}

                        { socials.TWITTER && <a href={socials.TWITTER} target="_blank">
                            <i className="icons fab fa-twitter"></i>
                        </a> }

                        { socials.LEETCODE &&<a href={socials.LEETCODE} target="_blank">
                            <i className="icons fab fa-leetcode"></i>
                        </a> }

                        { socials.INSTAGRAM && <a href={socials.INSTAGRAM} target="_blank">
                            <i className="icons fab fa-instagram"></i>
                        </a> }
                        
                        { socials.GITHUB && <a href={socials.GITHUB} target="_blank">
                            <i className="icons fab fa-github"></i>
                        </a> }

                        { socials.HASHNODE && <a href={socials.HASHNODE} target="_blank">
                            <i className="icons fas fa-blog"></i>
                        </a> }

                        { socials.UPWORK && <a href={socials.UPWORK} target="_blank">
                            <img alt="Upwork" src={Upwork} className='upwork'/>
                        </a> }

                        { socials.LEETCODE && <a href={socials.LEETCODE} target="_blank">
                            <img alt="Leetcode" src={Leetcode} className='leetcode'/>
                        </a> }
                    </div>
                </p>
            </div>

            <div>
                <p className='about-me-content'>
                    Hello! My name is Ravindra singh kunwar, and I am a CSE Engineer and a Full Stack Developer with a passion for back-end development. I am a self-motivated and dedicated freelancer with an excellent work ethic and a strong desire to learn and grow in my field.
                    As a CSE engineer, I have gained a deep understanding of various subjects such as networking, database, OOPs, Operating system. 
                    <br/>As a full-stack developer, I am comfortable working on both the front-end and back-end of web applications. I have extensive experience with front-end technologies such as HTML, CSS, JavaScript, and React. I have also worked with back-end technologies such as Node.js, Express, Django, SQL and MongoDB. My goal is always to deliver high-quality, user-friendly applications that meet the needs of my clients.
                    <br/>In my freelance work, I believe that clear communication is the key to successful projects, and I work hard to build strong relationships with my clients. I am always available to answer questions, provide updates, and address concerns throughout the development process.
                </p>        
            </div>
        </div>
    )
}

export default AboutMe