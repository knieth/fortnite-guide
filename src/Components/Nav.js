import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {

    const navLogoStyle = {
        color:'#333333',
        textDecoration: 'none'
    };

    const navLinkStyle = {
        color:'#333333',
        textDecoration: 'none',
        paddingLeft:'.25em',
        paddingRight:'.25em',
        fontSize:'.90em'
    };


    return (
    <nav>
        <Link style={navLogoStyle} to="/">
            <h4>Fortpanion</h4>
        </Link>
        <ul className="nav-links">
            <Link style={navLinkStyle} to="/">
                <li>Home</li>
            </Link>
            <Link style={navLinkStyle} to="/challenges">
                <li>Challenges</li>
            </Link>
            <Link style={navLinkStyle} to="/shop">
                <li>Shop</li>
            </Link>
        </ul>
    </nav>
    );
}

export default Nav;
