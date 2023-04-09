import React from 'react'
import './index.css'
import Project from './Project'


function Projects() {

    const projects = [
        { 
            title: "Chrome Trex game neural network",
            description: "Just an experiment for testing neuroevolution of augmenting topologies (NEAT) algorithm using chrome trex game. It is a genetic algorithm for training and building evolving neural networks. I used this NEAT Algorithm for developing a evolving neural network which helps a trex dinosaur to play the game on it's own without any external inputs. I have used 60 test trex with random weights in their neural network, so initially they will behave in random manner, but after few generation they will start playing the game in a proper manner due to their evolved neural network using NEAT algorithm. These trex will learn from each other mainly from those having better performance or score, so eventually after few generations they will get perfect and perfect with their training.",
            link: "https://chrome-trex-neural-network.netlify.app/",
            images: [],
            tech: [ "Linux", "GitHub", "Node.js", "Bootstrap", "Express", "Tenserflow"],
        },
        { 
            title: "E sports tournament management system",
            description: "A e-sport tournament management system integrated with django(python) backend. A user can register for online tournament and can see all the ongoing tournaments and admin can add and organise tournaments.",
            link: "https://esportcompetition.netlify.app/",
            images: [],
            tech: ["Java", "Python", "C/C++", "SQL (MySQL,SQLite3)", "JavaScript", "HTML/CSS"],
        }
    ]


    return (
        <div className='projects my'>
            <p className='title animated-heading'>Projects</p>
            {
                projects.map((item, index) => (
                    <Project
                        key={index}
                        title={item.title}
                        description={item.description}
                        link={item.link}
                        images={item.images}
                        tech={item.tech}/>
                ))
            }

        </div>
    )
}

export default Projects