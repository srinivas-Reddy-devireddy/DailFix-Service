
import React, { useState, useEffect } from 'react';
import { FaToolbox } from 'react-icons/fa';
import { FaPhoneAlt, FaClipboardCheck, FaMapMarkerAlt, FaShieldAlt } from 'react-icons/fa';
import { FaSnowflake, FaTools, FaFan, FaTv, FaWrench } from 'react-icons/fa';  // Import icons from react-icons
import imge1 from '../assets/refrigerator_machine_technician_1.jpg'
import imge2 from '../assets/washingmachine3.jpg'
import imge3 from '../assets/washing_machine_technician1.jpg'
import imge4 from '../assets/washing_machine_technician_4.jpg'
import imge5 from '../assets/washing_machine_2.jpg'
import '../styles/home.css';
import { Link } from 'react-router-dom';

const Home2 = () => {
  const [experience, setExperience] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    imge1,imge2,imge3,imge4,imge5
      ];

  // Count-up animation for Experience (9+)
  useEffect(() => {
    const targetExperience = 13;
    if (experience < targetExperience) {
      const interval = setInterval(() => {
        setExperience((prev) => {
          if (prev < targetExperience) {
            return prev + 1;
          }
          clearInterval(interval);
          return targetExperience;
        });
      }, 1000);
    }
  }, [experience]);

  // Count-up animation for Customer Satisfaction (100%)
  useEffect(() => {
    const targetSatisfaction = 100;
    if (satisfaction < targetSatisfaction) {
      const interval = setInterval(() => {
        setSatisfaction((prev) => {
          if (prev < targetSatisfaction) {
            return prev + 1;
          }
          clearInterval(interval);
          return targetSatisfaction;
        });
      }, 800);
    }
  }, [satisfaction]);

  // Slider automatic transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="home2-container">
 {/* hero-top Section */}
      <section className="hero-section">
         {/* Image Slider */}
         <div className="hero-image">
          <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        </div>
        <div className="hero-content">
          <h1>Quick Service/Repair <span>Across Hyderabad</span></h1>
          <p> 
            Hyderabad DialFix Service is a professional home appliance repair company. Since 2013, it has been our belief that our customers deserve top quality service and repairs at a fair price.
          </p>
          <p className="mission">
            Our mission is to serve our customers with quality service and Reapir a guarantee on all work undertaken.
          </p>
          <div className="stats">
            <div className="stat">
              <FaToolbox className="icon" />
              <h2 className='animation-exp'>{experience}+</h2>
              <p className='sta-paragrap'>Years Experience</p>
            </div>
            <div className="stat">
              <FaToolbox className="icon" />
              <h2 className='animation-exp' >{satisfaction}%</h2>
              <p className='sta-paragrap'>Customer Satisfaction</p>
            </div>
          </div>
        </div>

       
      </section>

 {/* Services Section */}
      <section className="services-section">
        <h2>Choosing the Right Home Appliances Repair and Service </h2>
        <div className="services-container">
          <div className="service-list">
            <h3>Need an Service and Repair Technician for:</h3>
            
             <ul >
          <li><FaSnowflake className="service-icon" /> Refrigerator Repairs</li>
          <li><FaTools className="service-icon" /> Washing Machine Services</li>
          <li><FaFan className="service-icon" /> Microwave Repair Services</li>
          <li><FaTv className="service-icon" /> AC Repair Services</li>
          <li><FaWrench className="service-icon" /> Geyser Repair Services</li>
          <li><FaTv className="service-icon" /> Television Repair Services</li>
        </ul>
          </div>
          <div className="why-choose">
            <h3>Why Choose Hyderabad DialFix Service for  Repair Service in Hyderabad?</h3>
            <ul>
              <li>Qualified Technicians</li>
              <li>In-house Technicians with 10+ years of experience</li>
              <li>High-Quality Repairing</li>
             <li>High-skilled Service Expertise</li>
              <li>Trusted by 5000 Customers Every Year</li>
              <li>One Visit Repair Fix Guaranteed</li>
            </ul>
          </div>
        </div>
        
      </section>
      

      {/* quick-service-section */}

      <section className="quick-service-section">
      <div className="quick-service-content">
        <h2>Quick Service is Our Top Priority!</h2>
        <p>Our Service Specialists, Available 7:00 AM to 11:00 PM Everyday</p>
      </div>
     
      <Link to='/Home/booking-form/' className='Link'> <button href="" className="book-service-button"> <span role="img" aria-label="phone">Book Service Now</span> </button> </Link> 
     
    </section>



      {/* Feature Section */}
      <section className="feature-section">
     <h2>Book us for a completely <span>100% hassle-free</span> experience</h2>
        <div className="feature-steps">
          <div className="feature-step ">
          <a href="tel:9908305008" className="cta-button">
          <div className="icon-circle call-hover">
              <FaPhoneAlt className="feature-icon" />
            </div>
          </a>
            
            <h3>Book an Appointment</h3>
            <p>Book Your Appointment via Phone or Online</p>
            <h6>Step-1</h6>
          </div>
          <div className="feature-step">
            <div className="icon-circle">
              <FaClipboardCheck className="feature-icon" />
            </div>
            <h3>Confirm Appointment</h3>
            <p>Your Appointment Will Be Confirmed After We Review Your Requirements.</p>
            <h6>Step-2</h6>
          </div>
          <div className="feature-step">
            <div className="icon-circle">
              <FaMapMarkerAlt className="feature-icon" />
            </div>
            <h3>Visit Customer Site</h3>
            <p>Get a Technician at Your Doorstep in Under 2 Hours</p>
            <h6>Step-3</h6>
          </div>
          <div className="feature-step">
            <div className="icon-circle">
              <FaShieldAlt className="feature-icon" />
            </div>
            <h3>Get your Job Done</h3>
            <p>Appliance Repairs Done at Your Location for 100% Transparenc</p>
            <h6>Step-4</h6>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home2;  
