import React, { useEffect, useState } from 'react'
import './index.css'

interface AboutMeProps {
    scrollToAboutMe: Function
}

function Header({ scrollToAboutMe }: AboutMeProps) {

    const [line1, setLine1] = useState('');
    const [line2, setLine2] = useState('');
    const [line3, setLine3] = useState('');
    const [isBlinking, setIsBlinking] = useState(true);

    const animatedText = [
        "Hey there 👋 I'm ravi kunwar",
        'A Problem solver',
        'Welcome to my portfolio !!!'
    ];

    function typeText(index: number, line: string, setLine: Function) {
        // Simulate typing effect for line 1
        
        setTimeout(() => {
            const nextChar = animatedText[index][line.length];
            setLine(line + nextChar);
        }, 100);
    }

    useEffect(() => {
        if (line1.length < animatedText[0].length) {
            typeText(0, line1, setLine1);
        } else if(line2.length < animatedText[1].length){
            typeText(1, line2, setLine2);
        } else if(line3.length < animatedText[2].length){
            typeText(2, line3, setLine3);
        } else {
            // Stop blinking cursor after animation is complete
            setIsBlinking(false);
            setTimeout(scrollToAboutMe, 1000)
        }
    }, [line1, line2, line3]);

    return (
        <div className='header'>
            <div className='header-content'>
                <p className='header-title'>
                    {line1}
                    {isBlinking && line1.length < animatedText[0].length && <span>|</span>}
                </p>
                <p className='header-title'>
                    {line2}
                    {(isBlinking && (line1.length === animatedText[0].length) && line2.length < animatedText[1].length) ? <span>|</span>: null}
                </p>
                <p className='header-title'>
                    {line3}
                    {isBlinking && (line2.length === animatedText[1].length) && line3.length < animatedText[2].length && <span>|</span>}
                </p>
            </div>
        </div>
    )
}

export default Header