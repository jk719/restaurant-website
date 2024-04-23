import React from 'react';
import './Header.css';
// import logoImg from '../../assets/images/logo.jpg'; // Correct path to the logo image

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                {/* <img src={logoImg} alt="Restaurant Logo" className="header-logo" /> */}
                <div className="header-info">
                    <h1 className="restaurant-name">Restaurant Name</h1>
                    <p className="restaurant-address">1234 Main St, YourCity, State 12345</p>
                </div>
                <div className="header-login">
                    <button onClick={() => console.log('Login clicked')}>Login</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
