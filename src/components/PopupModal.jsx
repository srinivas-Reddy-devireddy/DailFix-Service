// components/PopupModal.js
import React, { useEffect } from 'react';
import '../styles/loadpop.css';

function PopupModal({ closeModal }) {
  useEffect(() => {
    const timer = setTimeout(() => closeModal(), 8000); // Close after 8 seconds
    return () => clearTimeout(timer);
  }, [closeModal]);

  return (
    <div className="popup-modal-overlay">
      <div className="popup-modal">
        <h2>Welcome to DailFix Service</h2>
        <p>Your trusted solution for appliance repairs!</p>
        <div style={{display:"flex",flexDirection:'column',justifyContent:"center",alignItems:"center"}}>
        {/* Call Button */}
         <a href="tel:+9908305008" className="call-button">
          Call Us Now
        </a>
        {/* Get Started Button */}
        <button onClick={closeModal} className="close-button">Get Started</button>

       
        </div>
         
      </div>
    </div>
  );
}

export default PopupModal;
