
import React, { useEffect } from 'react';
import '../styles/loadpop.css';
import { FaCheck } from 'react-icons/fa';

function PopupModal({ closeModal }) {
  useEffect(() => {
    const timer = setTimeout(() => closeModal(), 8000000); // Close after 8 seconds
    return () => clearTimeout(timer);
  }, [closeModal]);

  return (
    <div className="popup-modal-overlay">
      <div className="popup-modal">
        {/* Close Icon in top-right corner */}
        <span className="close-icon" onClick={closeModal}>&times;</span>
        
        <h2>Welcome to DailFix Service</h2>
        <p>Your trusted solution for appliance repairs!</p>
        <div style={{ display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
         
          <p className='service-pop'>Washing Machines | Fridges | Microwaves | Geyser | Freezer
         </p>
         <h4> Expert Technicians | 24/7 Service | Book Now</h4>
         <ul className="why-choose-us">
      <h4 style={{marginLeft:"-20px"}}>Why Choose Us</h4>
      <li><FaCheck className="icon" /> Prompt Service</li>
      <li><FaCheck className="icon" /> Skilled Technicians</li>
      <li><FaCheck className="icon" /> Transparent Pricing</li>
      <li><FaCheck className="icon" /> Customer Satisfaction</li>
    </ul>
          <a href="tel:9908305008" className="call-button green">
            Call Us Now
          </a>
          <button className="call-button" onClick={closeModal}>Start Now</button>
             </div>
      </div>
    </div>
  );
}

export default PopupModal;
