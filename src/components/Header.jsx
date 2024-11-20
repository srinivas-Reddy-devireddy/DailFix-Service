
import React, { useState } from 'react';
import { FaBars, FaTimes, FaPhone, FaAngleDown, FaAngleUp } from "react-icons/fa";
import '../styles/header.css';
import dfs from '../assets/dfs-logo-letter-monogram-design-600nw-2481791937(1)(1).png'
import { FaArrowRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { BsClockHistory } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [menu, setMenu] = useState('home');
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const location = useLocation();

  // Update active link based on the current path
  const handleLinkClick = (name) => {
    setMenu(name);
    setShowMediaIcons(false);  // Close the mobile menu
    setShowServicesDropdown(false);  // Close the services dropdown
  };

  return (
    <>
      <div className='header-top'>
        <div>
          <p> <IoLocationOutline className='icons-header' />DailFix Services  Hyderabad, Secunderabad </p>
          <p>
            < BsClockHistory  className='icons-header' />Monday - Sunday: 7:00AM - 11:00PM
          </p>
        </div>
       <Link to='/Home/booking-form/' className='Link'><button className='top-button'> Quick Booking Service <FaArrowRight className='icons-header'/></button> </Link> 
      </div>
      <nav className="main-nav">
       
        <Link to="/" className='Link'> 
        <div className='logo-section'>
         
          <img src={dfs} alt="Logo" />
          <div className="logo" >
            <h2>
              <span>D</span>ial
              <span>F</span>ix
              <span> S</span>ervices
            </h2>
          </div>
        </div></Link>

        {/* 2nd menu part */}
        <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li>
              <p 
                className={menu === 'home' ? 'active-link' : ''} 
                onClick={() => handleLinkClick('home')}
              >
                <Link to="/" className='Link'>Home</Link>
              </p> 
            </li>
            <li>
              <p 
                className={menu === 'about' ? 'active-link' : ''} 
                onClick={() => handleLinkClick('about')}
              >
                <Link to="/about" className='Link'>About</Link>
              </p> 
            </li>
            <li>
              {/* Services menu with dropdown */}
              <div
                className="services-menu"
                onClick={(e) => {
                  e.stopPropagation(); // Prevents the dropdown from closing on click
                  setShowServicesDropdown(!showServicesDropdown);
                }}
              >
                <p 
                  onClick={() => setMenu('services')}
                  className={menu === 'services' ? 'active-link' : ''}
                >
                  Services {menu === "services" ? '': ''}
                </p>
                {/* Dropdown arrow/close icon */}
                <span className="dropdown-icon">
                  {showServicesDropdown ? <FaAngleUp /> : <FaAngleDown />}
                </span>

                {/* Dropdown items */}
                {showServicesDropdown && (
                  <ul className="dropdown-menu">
                    <li onClick={() => handleLinkClick('washing')}>
                      <Link to="/service/Washing-Machine/" className='Link'>Washing Machine Repair</Link>
                    </li>
                    <li onClick={() => handleLinkClick('refrigerator')}>
                      <Link to="/service/Refrigerator/" className='Link'>Refrigerator Repair</Link>
                    </li>
                    <li onClick={() => handleLinkClick('ac')}>
                      <Link to="/service/AirConditioner/" className='Link'>AirConditioner Repair </Link>
                    </li>
                    <li onClick={() => handleLinkClick('tv')}>
                      <Link to="/service/Television/" className='Link'>Television Repair</Link>
                    </li>
                    <li onClick={() => handleLinkClick('geyser')}>
                      <Link to="/service/Geyser/" className='Link'>Geyser Repair</Link>
                    </li>
                    <li onClick={() => handleLinkClick('microwave')}>
                      <Link to="/service/Microwave/" className='Link'>Microwave Repair</Link>
                    </li>
                  
                  </ul>
                )}
              </div>
            </li>
            <li>
              <p 
                className={menu === 'contact' ? 'active-link' : ''} 
                onClick={() => handleLinkClick('contact')}
              >
                <Link to="/contact" className='Link'>Contact</Link>
              </p> 
            </li>
          </ul>
        </div>

        <div className='phone-container'>
          <div className='phone'>
            <FaPhone className='phone-icon' />
          </div>
          <p>9908305008</p>
        </div>

        {/* Hamburger menu */}
        <div className="social-media">
          <div className="hamburger-menu" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            {showMediaIcons ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
