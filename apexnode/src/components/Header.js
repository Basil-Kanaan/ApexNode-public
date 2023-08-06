import React from 'react';

const Header = () => {
    return (
        <header>
            {/* Add your logo and navigation here */}
            <nav>
                <ul>
                    <li><a href="#features">Features</a></li>
                    {/* Add more navigation items as needed */}
                </ul>
            </nav>
            <div className="hero">
                <h1>Outsourcing Company</h1>
                <p>Your Solution for App & Website Development</p>
                <button>Contact Us</button>
            </div>
        </header>
    );
};

export default Header;