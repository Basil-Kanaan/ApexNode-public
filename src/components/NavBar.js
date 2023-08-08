import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <header className="navbar">
            <nav>
                <div className="navbar-left">
                    {/*<li><Link to="/ApexNode">ApexNode</Link></li>*/}
                    <Link to="/ApexNode">
                        <img src="public/apexnode-logo.png" alt="ApexNode Logo" className="logo"/>
                    </Link>
                </div>
                <div className="navbar-right">
                    <ul>
                        <li><Link to="/ApexNode">Home</Link></li>
                        <li><Link to="/ApexNode/login">Login</Link></li>
                        {/* Add more navigation items as needed */}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
