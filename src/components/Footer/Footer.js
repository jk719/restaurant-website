// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-address">1234 Main St, YourCity, State 12345</p>
               
                <p className="footer-copy">&copy; {new Date().getFullYear()} Restaurant Name. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
