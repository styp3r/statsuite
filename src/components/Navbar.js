import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div id="navbar">
            <Link to="/">Home</Link>
            <Link to="/sales">Sales</Link>
        </div>
    );
}

export default Navbar;