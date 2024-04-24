// HamburgerMenu.js

import Link from 'next/link';
import React, { useState } from 'react';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburger-menu">
            <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            {isOpen && (
                <div className="menu-options">
                    <Link href={"/"}>Home</Link>
                    <Link href={"/men"}>Men</Link>
                    <Link href={"/women"}>Women</Link>
                    <Link href={"/contact"}>Contact Us</Link>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;
