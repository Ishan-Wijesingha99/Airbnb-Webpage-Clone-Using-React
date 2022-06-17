import React from "react";
import airbnbLogo from '../images/airbnb-logo.png';



// Navbar
export const Navbar = function() {
    return (
        <nav className="navbar">
            <img id="logo" src={airbnbLogo} alt='airbnb logo' />
        </nav>
    )
}