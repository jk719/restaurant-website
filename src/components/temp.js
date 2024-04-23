// src/components/Testimonials/Testimonials.js
import React from 'react';
import './Testimonials.css';

function Testimonials() {
    const testimonialsList = [
        { quote: "The food always arrives hot and delicious! The best Kung Pao Chicken in town.", author: "Jamie Lawson" },
        { quote: "Incredible service and even better food. I recommend the crispy duck to everyone!", author: "Casey Diaz" },
        { quote: "Their dumplings are just like my grandma used to make. I'm a regular customer now!", author: "Morgan Cheung" },
        // Add new testimonials below
        { quote: "Every dish is a delight and full of flavor. Absolutely love their spring rolls!", author: "Alex Quinn" },
        { quote: "Great portions and the taste is authentic. The hot and sour soup is a must-try!", author: "Riley Sutton" },
        { quote: "Their commitment to quality is unwavering. Always a pleasant experience.", author: "Jordan Patricks" },
        { quote: "Friendly staff, cozy atmosphere, and exquisite food. Best place for a family meal!", author: "Sam Reese" },
        { quote: "The freshness of ingredients comes through in every bite. Simply outstanding!", author: "Chris P. Bacon" },
        { quote: "Love the variety in their menu – so many options and each one is fantastic!", author: "Taylor Chan" },
        { quote: "They really know how to do Chinese cuisine right. The flavors are spot on!", author: "Leslie Knope" },
        { quote: "Quick service, affordable prices, and divine flavors. What more can you ask for?", author: "Andy Dwyer" },
    ];

    return (
        <div className="testimonials-container">
            {testimonialsList.map((testimonial, index) => (
                <div key={index} className="testimonial" aria-label="testimonial">
                    <p className="testimonial-text">"{testimonial.quote}"</p>
                    <p className="testimonial-author">- {testimonial.author}</p>
                </div>
            ))}
        </div>
    );
}

export default Testimonials;
