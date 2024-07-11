import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
//import '../images';
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div id='hero-container'>
                <video src='videos/globe.mp4' autoPlay loop muted / >
                    <h1 >Adventure Awaits You </h1>
                    <div className='hero-btns'>
                    <Button className='btns' buttonStyle= 'btn-outline' 
                     buttonSize='btn-large'>
                     Get Started
                    </Button>
                    
                    <Button className='btns' buttonStyle= 'btn-primary' 
                     buttonSize='btn-large'>
                     Watch me <FontAwesomeIcon icon={faPlayCircle}/>
                    </Button>
                    </div>

        </div>
    );
}

export default HeroSection;
