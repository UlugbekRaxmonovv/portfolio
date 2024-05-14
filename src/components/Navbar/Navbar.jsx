import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
     <div className="n-wrapper container">
       <div className="n-lift">
        <div className="n-name">Ulug'bek</div>
        <span>toggle</span>
       </div>
       <div className="n-rigth">
        <div className="n-list">
            <ul style={{listStyleType:'none'}}>
            <li>Home</li>
            <li>Service</li>
            <li>Exsprese</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
            </ul>
        </div>
        <button className="button">
            Contact
        </button>
       </div>
     </div>
    );
}

export default Navbar;
