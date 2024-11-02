// import React, { useState, useEffect } from 'react';
// import '../styles/header.css';

// function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const closeMenuAfterDelay = 2 * 60 * 1000; // 2 minutes in milliseconds

//   // Function to open or close the menu
//   const toggleMenu = () => {
//     setIsMobileMenuOpen((prevState) => !prevState);
//   };

//   // Automatically close the menu after 2 minutes when it's open
//   useEffect(() => {
//     let timer;
//     if (isMobileMenuOpen) {
//       // Set the timer to close the menu after 2 minutes
//       timer = setTimeout(() => {
//         setIsMobileMenuOpen(false);
//       }, closeMenuAfterDelay);
//     }

//     // Clean up the timer if the component unmounts or menu state changes
//     return () => clearTimeout(timer);
//   }, [isMobileMenuOpen, closeMenuAfterDelay]); // Added `closeMenuAfterDelay` to dependency array

//   return (
//     <header className="header">
//       <div className="logo">YourLogo</div>
//       <div 
//         className="mobile-menu" 
//         onClick={toggleMenu}
//       >
//         {isMobileMenuOpen ? '✖' : '☰'}
//       </div>
//       <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
//         <a href="#home">Home</a>
//         <a href="#about">About</a>
//         <a href="#contact">Contact</a>
//         <a href="#privacy">Privacy</a>
//       </nav>
//     </header>
//   );
// }

// export default Header;


// import React , { useState }  from 'react'
// // import { FaBars, FaTimes } from "react-icons/fa";
// import '../styles/header.css';

// import { FaBars, FaTimes } from "react-icons/fa";
// // import { GiHamburgerMenu } from "react-icons/gi";
// // import { Close } from "react-icons/tfi";

// // import { Link } from "react-router-dom";
// import { FaPhone } from "react-icons/fa6";

//  const Navbar = ({setShow, size }) => {
//   const [showMediaIcons, setShowMediaIcons] = useState(false);
//   const [menu,setMenu]=useState('home')
//   return (
//     <>
//    <nav className="main-nav" >
//      {/* 1st logo part  */}
//      <div className='logo-section'>
//      <div className="logo" onClick={() => setShow(true)}>
//        <h2>
//          <span>D</span>ail
//          <span>F</span>ix
//          <span>S</span>ervices
         
//         </h2>
      
       
       
//      </div>
//      <p> <FaPhone className='phone'/>9441247387</p>
//      </div>
     
     
//       {/* 2nd menu part  */}
//       <div onClick={() => setShowMediaIcons(!showMediaIcons)}
//         className={
//           showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
//            }>
         
         
       
//         <ul onClick={() => setShowMediaIcons(!showMediaIcons)} >
//           <li onClick={() => setShowMediaIcons(!showMediaIcons)} >
//           <p   onClick={()=>{setMenu('home')}}>Home</p> {menu ==="home" ? <hr/>:''}
//            </li>
         
//            <li onClick={() => setShowMediaIcons(!showMediaIcons)}>
//            <p  onClick={()=>{setMenu('Features')}}>Services{menu ==="Features" ? <hr/>:''}</p>
//          </li>
//           <li onClick={() => setShowMediaIcons(!showMediaIcons)}>
//           <p  onClick={()=>{setMenu('Products')}}>About {menu ==="Products" ? <hr/>:''}</p>
//           </li>
//           <li onClick={() => setShowMediaIcons(!showMediaIcons)}>
//           <p   onClick={()=>{setMenu('Contact')}}>Contact {menu ==="Contact" ? <hr/>:''}</p>
//             </li>
//          </ul>
//        </div>

      
//        <div className="cart"  >
//          <span>
//            <i className="fas fa-cart-plus" ></i>
           
//           </span>
        
//           <span>{size}</span>
//         </div>
      
//        {/* 3rd social media links */}
//        <div className="social-media">
//          {/* <ul className="social-media-desktop">
       
       
//          </ul> */}

//          {/* hamburget menu start  */}
//          <div className="hamburger-menu" onClick={() => setShowMediaIcons(!showMediaIcons)}>
//            <div >
//             { showMediaIcons ? <FaTimes/>: <FaBars/>  }
//           </div>
//          </div>
//        </div>
//     </nav>

    
//    </>

//    )
//  }

// export default Navbar



// import React, { useState } from 'react';
// import { FaBars, FaTimes, FaPhone } from "react-icons/fa";
// import '../styles/header.css';

// const Navbar = ({ setShow, size }) => {
//   const [showMediaIcons, setShowMediaIcons] = useState(false);
//   const [menu, setMenu] = useState('home');
//   const [showServicesDropdown, setShowServicesDropdown] = useState(false);

//   return (
//     <>
//       <nav className="main-nav">
//         {/* 1st logo part */}
//         <div className='logo-section'>
//           <div className="logo" onClick={() => setShow(true)}>
//             <h2>
//               <span>D</span>ail
//               <span>F</span>ix
//               <span>S</span>ervices
//             </h2>
//           </div>
//           <p><FaPhone className='phone' />9441247387</p>
//         </div>

//         {/* 2nd menu part */}
//         <div onClick={() => setShowMediaIcons(!showMediaIcons)}
//           className={
//             showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
//           }>
//           <ul onClick={() => setShowMediaIcons(!showMediaIcons)}>
//             <li onClick={() => setShowMediaIcons(!showMediaIcons)}>
//               <p onClick={() => { setMenu('home') }}>Home</p> {menu === "home" ? <hr /> : ''}
//             </li>
//             <li onClick={() => setShowMediaIcons(!showMediaIcons)}>
//               {/* Services menu with dropdown */}
//               <div
//                 className="services-menu"
//                 onClick={(e) => {
//                   e.stopPropagation(); // Prevents the dropdown from closing on click
//                   setShowServicesDropdown(!showServicesDropdown);
//                 }}
//               >
//                 <p onClick={() => { setMenu('Features') }}>
//                   Services {menu === "Features" ? <hr /> : ''}
//                 </p>
//                 {/* Dropdown items */}
//                 {showServicesDropdown && (
//                   <ul className="dropdown-menu">
//                     <li onClick={() => { setMenu('service1'); setShowServicesDropdown(false); }}>Washing Machine Repair</li>
//                     <li onClick={() => { setMenu('service2'); setShowServicesDropdown(false); }}>Refregerator Repair</li>
//                     <li onClick={() => { setMenu('service3'); setShowServicesDropdown(false); }}>AC Repair</li>
//                     <li onClick={() => { setMenu('service1'); setShowServicesDropdown(false); }}>TV Repair</li>
//                     <li onClick={() => { setMenu('service2'); setShowServicesDropdown(false); }}>Geeser Repair</li>
//                     <li onClick={() => { setMenu('service3'); setShowServicesDropdown(false); }}>Micro Oven Repair</li>
         
//                   </ul>
//                 )}
//               </div>
//             </li>
//             <li onClick={() => setShowMediaIcons(!showMediaIcons)}>
//               <p onClick={() => { setMenu('Products') }}>About {menu === "Products" ? <hr /> : ''}</p>
//             </li>
//             <li onClick={() => setShowMediaIcons(!showMediaIcons)}>
//               <p onClick={() => { setMenu('Contact') }}>Contact {menu === "Contact" ? <hr /> : ''}</p>
//             </li>
//           </ul>
//         </div>

//         {/* Cart section */}
//         <div className="cart">
//           <span>
//             <i className="fas fa-cart-plus"></i>
//           </span>
//           <span>{size}</span>
//         </div>

//         {/* 3rd social media links */}
//         <div className="social-media">
//           {/* Hamburger menu start */}
//           <div className="hamburger-menu" onClick={() => setShowMediaIcons(!showMediaIcons)}>
//             <div>
//               {showMediaIcons ? <FaTimes /> : <FaBars />}
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;  



// import React, { useState } from 'react';
// import { FaBars, FaTimes, FaPhone, FaAngleDown, FaAngleUp } from "react-icons/fa";
// import '../styles/header.css';

// const Navbar = ({ setShow, size }) => {
//   const [showMediaIcons, setShowMediaIcons] = useState(false);
//   const [menu, setMenu] = useState('home');
//   const [showServicesDropdown, setShowServicesDropdown] = useState(false);

//   return (
//     <>
//       <nav className="main-nav">
//         {/* 1st logo part */}
//         <div className='logo-section'>
//           <div className="logo" onClick={() => setShow(true)}>
//             <h2>
//               <span>D</span>ail
//               <span>F</span>ix
//               <span>S</span>ervices
//             </h2>
//           </div>
//           <p><FaPhone className='phone' />9441247387</p>
//         </div>

//         {/* 2nd menu part */}
//         <div onClick={() => setShowMediaIcons(!showMediaIcons)}
//           className={
//             showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
//           }>
//           <ul onClick={() => setShowMediaIcons(!showMediaIcons)}>
//             <li onClick={() => setShowMediaIcons(!showMediaIcons)}>
//               <p onClick={() => { setMenu('home') }}>Home</p> {menu === "home" ? <hr /> : ''}
//             </li>
//             <li onClick={() => setShowMediaIcons(!showMediaIcons)}>
//               {/* Services menu with dropdown */}
//               <div
//                 className="services-menu"
//                 onClick={(e) => {
//                   e.stopPropagation(); // Prevents the dropdown from closing on click
//                   setShowServicesDropdown(!showServicesDropdown);
//                 }}
//               >
//                 <p onClick={() => { setMenu('Features') }}>
//                   Services {menu === "Features" ? <hr /> : ''}
//                 </p>
//                 {/* Dropdown arrow/close icon */}
//                 <span className="dropdown-icon">
//                   {showServicesDropdown ? <FaAngleUp /> : <FaAngleDown />}
//                 </span>

//                 {/* Dropdown items */}
//                 {showServicesDropdown && (
//                   <ul className="dropdown-menu">
//                     <li onClick={() => { setMenu('service1'); setShowServicesDropdown(false); }}>Washing Machine Repair</li>
//                     <li onClick={() => { setMenu('service2'); setShowServicesDropdown(false); }}>Refrigerator Repair</li>
//                     <li onClick={() => { setMenu('service3'); setShowServicesDropdown(false); }}>AC Repair</li>
//                     <li onClick={() => { setMenu('service1'); setShowServicesDropdown(false); }}>TV Repair</li>
//                     <li onClick={() => { setMenu('service2'); setShowServicesDropdown(false); }}>Geyser Repair</li>
//                     <li onClick={() => { setMenu('service3'); setShowServicesDropdown(false); }}>Microwave Oven Repair</li>
//                   </ul>
//                 )}
//               </div>
//             </li>
//             <li onClick={() => setShowMediaIcons(!showMediaIcons)}>
//               <p onClick={() => { setMenu('Products') }}>About {menu === "Products" ? <hr /> : ''}</p>
//             </li>
//             <li onClick={() => setShowMediaIcons(!showMediaIcons)}>
//               <p onClick={() => { setMenu('Contact') }}>Contact {menu === "Contact" ? <hr /> : ''}</p>
//             </li>
//           </ul>
//         </div>

       

//         {/* 3rd social media links */}
//         <div className="social-media">
//           {/* Hamburger menu start */}
//           <div className="hamburger-menu" onClick={() => setShowMediaIcons(!showMediaIcons)}>
//             <div>
//               {showMediaIcons ? <FaTimes /> : <FaBars />}
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;  



// import React, { useState } from 'react';
// import { FaBars, FaTimes, FaPhone, FaAngleDown, FaAngleUp } from "react-icons/fa";
// import '../styles/header.css';
// import dfs from '../assets/dfs-logo-letter-monogram-design-600nw-2481791937(1)(1).png'
// import { FaArrowRight } from "react-icons/fa";
// import { IoLocationOutline } from "react-icons/io5";
// import { BsClockHistory } from "react-icons/bs";
// const Navbar = ({ setShow, size }) => {
//   const [showMediaIcons, setShowMediaIcons] = useState(false);
//   const [menu, setMenu] = useState('home');
//   const [showServicesDropdown, setShowServicesDropdown] = useState(false);

//   return (
//     <>
//     <div className='header-top'>
//       <div>
//       <p> <IoLocationOutline className='icons-header' />DailFixServices Secunderabad, Hyderabad </p>
//       <p>
//         < BsClockHistory  className='icons-header' />Monday - Sunday: 8:00AM - 8:00PM</p>
   

//       </div>
//       <button>Quick Booking Service <FaArrowRight  className='icons-header'/></button>
//     </div>
//       <nav className="main-nav">
//         {/* 1st logo part */}

//         <div className='logo-section'>
//           <img src={dfs} alt="" />
//           <div className="logo" onClick={() => setShow(true)}>
//             <h2>
//               <span>D</span>ail
//               <span>F</span>ix
//               <span>S</span>ervices
//             </h2>
//           </div>
         
//         </div>


//         {/* 2nd menu part */}
//         <div
//           className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}
//           onClick={() => setShowMediaIcons(!showMediaIcons)}
//         >
//           <ul>
//             <li>
//               <p onClick={() => { setMenu('home'); setShowMediaIcons(false); }}>Home</p> 
//               {menu === "home" ? <hr /> : ''}
//             </li>
//             <li>
//               {/* Services menu with dropdown */}
//               <div
//                 className="services-menu"
//                 onClick={(e) => {
//                   e.stopPropagation(); // Prevents the dropdown from closing on click
//                   setShowServicesDropdown(!showServicesDropdown);
//                 }}
//               >
//                 <p onClick={() => { setMenu('Features') }}>
//                   Services {menu === "Features" ? <hr /> : ''}
//                 </p>
//                 {/* Dropdown arrow/close icon */}
//                 <span className="dropdown-icon">
//                   {showServicesDropdown ? <FaAngleUp /> : <FaAngleDown />}
//                 </span>

//                 {/* Dropdown items */}
//                 {showServicesDropdown && (
//                   <ul className="dropdown-menu">
//                     <li onClick={() => { setMenu('service1'); setShowServicesDropdown(false); }}>Washing Machine Repair</li>
//                     <li onClick={() => { setMenu('service2'); setShowServicesDropdown(false); }}>Refrigerator Repair</li>
//                     <li onClick={() => { setMenu('service3'); setShowServicesDropdown(false); }}>Air Conditioner</li>
                   
//                     <li onClick={() => { setMenu('service2'); setShowServicesDropdown(false); }}>Geyser Repair</li>
//                     <li onClick={() => { setMenu('service3'); setShowServicesDropdown(false); }}>Microwave Repair</li>
//                   </ul>
//                 )}
//               </div>
//             </li>
//             <li>
//               <p onClick={() => { setMenu('Products'); setShowMediaIcons(false); }}>About</p> 
//               {menu === "Products" ? <hr /> : ''}
//             </li>
//             <li>
//               <p onClick={() => { setMenu('Contact'); setShowMediaIcons(false); }}>Contact</p> 
//               {menu === "Contact" ? <hr /> : ''}
//             </li>
//           </ul>
//         </div>


//         <div className='phone-container' >

//           <div className='phone'>
//           <FaPhone  className='phone-icon' />
//           </div>
//           <p>9441247387</p>
          
//         </div>
        
       
//         {/* 3rd social media links */}
//         <div className="social-media">
//           {/* Hamburger menu start */}
//           <div className="hamburger-menu" onClick={() => setShowMediaIcons(!showMediaIcons)}>
//             {showMediaIcons ? <FaTimes /> : <FaBars />}
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import { FaBars, FaTimes, FaPhone, FaAngleDown, FaAngleUp } from "react-icons/fa";
// import '../styles/header.css';
// import dfs from '../assets/dfs-logo-letter-monogram-design-600nw-2481791937(1)(1).png'
// import { FaArrowRight } from "react-icons/fa";
// import { IoLocationOutline } from "react-icons/io5";
// import { BsClockHistory } from "react-icons/bs";
// import { Link } from "react-router-dom";

//   const Navbar = ({ setShow, size }) => {
//   const [showMediaIcons, setShowMediaIcons] = useState(false);
//   const [menu, setMenu] = useState('home');
//   const [showServicesDropdown, setShowServicesDropdown] = useState(false);

//   return (
//     <>
//     <div className='header-top'>
//       <div>
//       <p> <IoLocationOutline className='icons-header' />DailFix Services Secunderabad, Hyderabad </p>
//       <p>
//         < BsClockHistory  className='icons-header' />Monday - Sunday: 7:00AM - 11:00PM</p>
   

//       </div>
//       <button className='top-button'>Quick Booking Service <FaArrowRight  className='icons-header'/></button>
//     </div>
//       <nav className="main-nav">
//         {/* 1st logo part */}

//         <div className='logo-section'>
//           <img src={dfs} alt="" />
//           <div className="logo" onClick={() => setShow(true)}>
//             <h2>
//               <span>D</span>ail
//               <span>F</span>ix
//               <span> S</span>ervices
//             </h2>
//           </div>
         
//         </div>


//         {/* 2nd menu part */}
//         <div
//           className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}
//           onClick={() => setShowMediaIcons(!showMediaIcons)}
//         >
//           <ul>
//             <li>
//               <p > <Link to="/"   className='Link'>Home</Link></p> 
              
//             </li>
//             <li>
//               <p ><Link to="/about"  className='Link'> About</Link>
//              </p> 
             
//             </li>
//             <li>
//               {/* Services menu with dropdown */}
//               <div
//                 className="services-menu"
//                 onClick={(e) => {
//                   e.stopPropagation(); // Prevents the dropdown from closing on click
//                   setShowServicesDropdown(!showServicesDropdown);
//                 }}
//               >
//                 <p onClick={() => { setMenu('Features') }}>
//                   Services {menu === "Features" ? <hr /> : ''}
//                 </p>
//                 {/* Dropdown arrow/close icon */}
//                 <span className="dropdown-icon">
//                   {showServicesDropdown ?<FaAngleUp /> :<FaAngleDown />}
//                 </span>
     
//                 {/* Dropdown items */}
//                 {showServicesDropdown && (
//                   <ul className="dropdown-menu">
//                     <li > <Link to="Washing-Machine"   className='Link'>Washing Machine Repair</Link></li>
//                     <li > <Link to="/"   className='Link'>Refrigerator Repair</Link></li>
//                     <li ><Link to="/"   className='Link'>Air Conditioner</Link></li>
//                     <li > <Link to="/Television "   className='Link'>Television Repair</Link></li>

//                     <li > <Link to="/Geyser"   className='Link'>Geyser Repair</Link></li>
//                     <li > <Link to="/Microwave"   className='Link'>Microwave Repair</Link></li>
//                   </ul>
//                 )}
//               </div>
//             </li>
           
//             <li>
//               <p> <Link to="/contact" className='Link'>Contact</Link></p> 
             
//             </li>
//           </ul>
//         </div>


//       <div className='phone-container' >

//           <div className='phone'>
//           <FaPhone  className='phone-icon' />
//           </div>
//           <p>9908305008</p>
          
//         </div>
        
       
//         {/* 3rd social media links */}
//         <div className="social-media">
//           {/* Hamburger menu start */}
//           <div className="hamburger-menu" onClick={() => setShowMediaIcons(!showMediaIcons)}>
//             {showMediaIcons ? <FaTimes /> : <FaBars />}
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;


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
          <p> <IoLocationOutline className='icons-header' />DailFix Services Secunderabad, Hyderabad </p>
          <p>
            < BsClockHistory  className='icons-header' />Monday - Sunday: 7:00AM - 11:00PM
          </p>
        </div>
        <button className='top-button'>Quick Booking Service <FaArrowRight className='icons-header'/></button>
      </div>
      <nav className="main-nav">
        {/* 1st logo part */}
        <Link to="/" className='Link'> 
        <div className='logo-section'>
         
          <img src={dfs} alt="Logo" />
          <div className="logo" >
            <h2>
              <span>D</span>ail
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
                  Services {menu === "services" ? <hr /> : ''}
                </p>
                {/* Dropdown arrow/close icon */}
                <span className="dropdown-icon">
                  {showServicesDropdown ? <FaAngleUp /> : <FaAngleDown />}
                </span>

                {/* Dropdown items */}
                {showServicesDropdown && (
                  <ul className="dropdown-menu">
                    <li onClick={() => handleLinkClick('washing')}>
                      <Link to="/Washing-Machine" className='Link'>Washing Machine Repair</Link>
                    </li>
                    <li onClick={() => handleLinkClick('refrigerator')}>
                      <Link to="/Refrigerator" className='Link'>Refrigerator Repair</Link>
                    </li>
                    <li onClick={() => handleLinkClick('ac')}>
                      <Link to="/Air-Conditioner" className='Link'>Air Conditioner</Link>
                    </li>
                    <li onClick={() => handleLinkClick('tv')}>
                      <Link to="/Television" className='Link'>Television Repair</Link>
                    </li>
                    <li onClick={() => handleLinkClick('geyser')}>
                      <Link to="/Geyser" className='Link'>Geyser Repair</Link>
                    </li>
                    <li onClick={() => handleLinkClick('microwave')}>
                      <Link to="/Microwave" className='Link'>Microwave Repair</Link>
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
