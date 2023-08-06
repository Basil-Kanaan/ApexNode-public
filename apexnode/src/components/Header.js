import React from 'react';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#features">Features</a></li>
                    {/* Add more navigation items as needed */}
                </ul>
            </nav>
            <div className="hero">
                <img src="https://via.placeholder.com/200x100" alt="ApexNode Logo" />
                <h1>ApexNode</h1>
                <p>Your Solution for App & Website Development</p>
                <a href="#contact"><button>Contact Us</button></a>
            </div>
        </header>
    );
};

export default Header;
