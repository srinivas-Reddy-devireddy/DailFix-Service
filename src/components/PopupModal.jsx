
import React, { useEffect } from 'react';
import '../styles/loadpop.css';

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
          Expert Technicians | 24/7 Service | Book Now</p>
          <a href="tel:+9908305008" className="call-button">
            Call Us Now
          </a>
             </div>
      </div>
    </div>
  );
}

export default PopupModal;
