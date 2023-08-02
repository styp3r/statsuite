import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div id="navbar">
            <div className = "navbar-links-container">
            <Link className = "link" to="/">Home</Link>
            <Link className = "link" to="/sales">Sales</Link>
            <Link className = "link" to="/sales">Purchases</Link>
            <Link className = "link" to="/sales">Vendors</Link>
            </div>
        </div>
    );
}

export default Navbar;