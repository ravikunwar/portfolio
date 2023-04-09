import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Experience from './components/Experience'
import Feedback from './components/Feedback'
import ProfessionalSkills from './components/Skills'
import Projects from './components/Projects'
import ContactForm from './components/Contact'
import Footer from './components/Footer'

function App() {

    const [animatedHeadings, setAnimatedHeadings] = useState<Array<HTMLElement>>([]);

    useEffect(() => {
        const headings = document.querySelectorAll(".animated-heading");
        setAnimatedHeadings(Array.from(headings) as Array<HTMLElement>);
    }, []);

    function checkScroll() {
        animatedHeadings.forEach((heading) => {
            const headingTop = heading.getBoundingClientRect().top;
            const headingBottom = heading.getBoundingClientRect().bottom;
            console.log(headingBottom)
            if (headingTop < window.innerHeight && headingBottom > -200) {
                heading.classList.add("animate");
            } else {
                heading.classList.remove("animate");
            }
        });
    }

    useEffect(() => {
        window.addEventListener("scroll", checkScroll);
        return () => window.removeEventListener("scroll", checkScroll);
    }, [animatedHeadings]);


    function scrollToAboutMe() {
        const aboutme = document.getElementById("aboutme");
        if(aboutme && window.pageYOffset === 0){
            aboutme.scrollIntoView({ behavior: "smooth" });
        }
    }

    const onSubmit = () => {

    }

    return (
        <div className='app'>
            <Header scrollToAboutMe={scrollToAboutMe}/>
            <AboutMe />
            <Education />
            <Experience />
            <Feedback />
            <ProfessionalSkills />
            <Projects />
            <ContactForm onSubmit={onSubmit}/>
            <Footer />
        </div>
    )
}

export default App
