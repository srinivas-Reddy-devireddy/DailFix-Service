import React, { useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Import the checkmark icon from React Icons
import '../styles/home.css'; // Ensure this CSS file contains necessary styles
import { Link } from 'react-router-dom';

const Confirmation = () => {
   

    return (
        <div className="not-found">
            <div className="confirm-section">
              
             <FaCheckCircle className="confirm-logo" />
                <h3>Thank you for visiting DialFix Services!</h3>
                <h2>Your Service request has been sent successfully.</h2>
                <p> We will contact you shortly.</p>
               <Link to="/" className="home-link">Go back to Home</Link>
            </div>

           

           

        </div>
    );
};

export default Confirmation;
