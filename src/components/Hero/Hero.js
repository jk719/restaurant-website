// src/components/Hero/Hero.js
import React from 'react';
import './Hero.css';
import heroImage from '../../assets/images/hero-image.jpg'; // Adjust the path if necessary

function Hero() {
    return (
        <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
            <button className="menu-button">View Menu</button>
        </div>
    );
}

export default Hero;
