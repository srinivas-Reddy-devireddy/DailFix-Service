import React from 'react';
import '../styles/footer.css'; // Import CSS for styling
import { FaPhone, FaEnvelope ,FaMapMarkerAlt,FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
   <footer class="footer">
<div className="footer-container">
<div className="ourservices-info">
  <h2>Our Services</h2>
 <ul>
  <li> <Link to='/service/Washing-Machine/' className='Link' style={{color:"white"}}> Washing Machine Repair</Link></li>
 <li> <Link to='/service/AirConditioner/' className='Link' style={{color:"white"}}> AC Repair Service </Link></li>
 <li> <Link to='/service/Refrigerator/' className='Link' style={{color:"white"}}>Refrigerator Repair </Link></li>
 <li> <Link to='/service/Geyser/' className='Link' style={{color:"white"}}>Geyser Repair </Link></li>
 <li> <Link to='/service/Television/' className='Link' style={{color:"white"}}>TV Repair  Service </Link></li>
 <li> <Link to='/service/Microwave/' className='Link' style={{color:"white"}}>Microwave Oven Repair </Link></li>
 </ul>
  </div>

 
 <div className="contact--info">
      <h2>Contact Us</h2>
      <p>Ask For Free Quote on your repair!</p>

      <p>
        <FaPhone className="cell-icon-f" /> <a href="tel:9908305008">9908305008</a>
      </p>
      <p>
        <FaEnvelope className="email-icon-f" /> <a href="mailto:mstechnoservice@gmail.com">mstechnoservice@gmail.com</a>
      </p>
      <p>
        <FaMapMarkerAlt className="location-icon-f" />
        H.No.16-11-404/14, Sbi Colony, Moosaram Bagh, Malakpet, 500036
      </p>

      <div className="social-media-icons">
        <h3>Follow Us</h3>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook" aria-label="Facebook">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>
    </div>
<div className="map-container">
 
  <iframe
title="Google Map Location"
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.7221224148!2d78.43752271499529!3d17.378653364161196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9901092fde77%3A0x549b642dfa3a79b9!2sSBI%20Colony%2C%20Moosarambagh%2C%20Hyderabad%2C%20Telangana%20500013!5e0!3m2!1sen!2sin!4v1698254024467!5m2!1sen!2sin"
allowFullScreen
loading="lazy"
style={{ border: 0, width: '88%', height: '220px' }}
></iframe>
</div>

<div className='privacy-container'>
   <h3>Disclaimer</h3>
<p>We deal only out of warranty products through expert technicians at client doorstep</p>


 <h3>Copyright</h3>
<p>We are independent service providers and not associated with any trademarks or brands</p>

<h3>Privacy Policy</h3>

<p>We offer service with one month post service warranty with expert technicians.</p>

</div>

</div>
<div className='full-width'></div>

 <p className="copy-right">
  &copy; 2024 DailFix Services. All Rights Reserved
</p>

</footer>
  );
};

export default Footer;
