// src/App.js
import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Testimonials from './components/Testimonials/Testimonials';
import MostOrdered from './components/MostOrdered/MostOrdered'; // Import the MostOrdered component
import Footer from './components/Footer/Footer'; // Import the Footer component
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <MostOrdered /> {/* Most Ordered dishes component */}
            <Testimonials /> {/* Testimonials component */}
            <Footer /> {/* Footer component */}
        </div>
    );
}

export default App;
