// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/loadpop.css';

import notFoundImage from '../assets/notfound.jpg'; // Adjust path if needed

const NotFound = () => {
    return (
        <div className="not-found">
            <img src={notFoundImage} alt="Not Found" className="not-found-image" />
            <h1>404</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className="home-link">Go back to Home</Link>
        </div>
    );
};

export default NotFound;


