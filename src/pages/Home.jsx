
import React, { useState, useEffect } from 'react';
import '../styles/home.css';

import Form from '../components/Form'
const HomeContent = () => {
  // Array of texts to display
  const serviceTexts = [
    'Washing Machine',
    'Refrigerator',
    'Air Conditioner',
    'Geyser',
    'Microwave',
    'Television'
  ];

  // State to manage the current displayed text
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [isOnline, setIsOnline] = useState(false);

  // Effect to change the text every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % serviceTexts.length);
    }, 20000); // 20000 milliseconds = 20 seconds

    return () => clearInterval(interval);
  }, [serviceTexts.length]);

  

  return (
    <section className="home-container">
      <div className="content-home">


        <div className="content-overlay">


          <div className="top-container">
           
            <div className='left-side-display-services'>
              <h1 className="left-side-display-services-text">
                Expert <span>{serviceTexts[currentIndex]}</span> Repair 
                Services in Hyderabad
              </h1>
              <p className='left-contnat'>Trusted experts with over 10+ years of top repair service in Hyderabad.</p>
              <p className='left-contnat-2'>Certified, skilled, and ready to resolve issues fast.</p>

              <button className='left-side-button' > <a  href="tel:+9908305008">📞 Call Now</a></button>
            </div>

         

            <div className='right-side-display-form'>
    <Form/>

   
           </div>


          </div>

          <div className="bottom-side-container">
             
             <div className=''>

              <p className="call-text">Give missed call to book</p>
              <p className="phone-number"> <a  href="tel:+9908305008"  className=''>📞 9908305008</a></p>

            <div className="features">
                <div className="feature">
                  <div className="circle">
                    <div className="tick-mark">&#10004;</div>
                  </div>
                  <span className="tick-mark-bottom-text">Since 10+ Years</span>
                </div>
                <div className="feature">
                  <div className="circle">
                    <div className="tick-mark">&#10004;</div>
                  </div>
                  <span className="tick-mark-bottom-text">100% On-time Service Guaranteed</span>
                </div>
                <div className="feature">
                  <div className="circle">
                    <div className="tick-mark">&#10004;</div>
                  </div>
                  <span className="tick-mark-bottom-text">Trusted Technicians</span>
                </div>
              </div>

            </div>
          
          </div>


        </div>

        
      </div>
    </section>
  );
};

export default HomeContent;
