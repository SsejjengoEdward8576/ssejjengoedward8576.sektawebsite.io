import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ToggleMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="toggle" onClick={toggleMenu}>
            &#9776;
            <ul className={menuOpen ? 'show' : ''}>
                <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                <li><Link to="/service-product" onClick={toggleMenu}>Services & Products</Link></li>
                <li><Link to="/our-works" onClick={toggleMenu}>Our Works</Link></li>
                <li><Link to="/about-us" onClick={toggleMenu}>About Us</Link></li>
                <li><Link to="/contacts" onClick={toggleMenu}>Contacts</Link></li>
            </ul>
        </div>
    );
};

export default ToggleMenu;

