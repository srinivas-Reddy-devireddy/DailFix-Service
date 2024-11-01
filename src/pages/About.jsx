// import React from 'react';
import '../styles/about.css';
import { FaSnowflake, FaTools, FaFan, FaTv, FaWrench } from 'react-icons/fa';  // Import icons from react-icons
import Footer from './Footer';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const About = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1200 });
//   }, []);

  return (
    <section className="about-section">
      <div className="background-image">
       <h1 className='about'>About</h1>
      </div>
      <div className="about-container slide-in ">
    <h2 className='welcome-heading'>Welcome to DialFix Service Home Appliance Repair & Services</h2>
       <h4 className="fade-up">
        Seamless Appliance Solutions, One Dial to Fix It All!
        </h4>
        <p className='life-text'>          
        Life's demands are nonstop, and your appliances should be, too. At DialFix Service, we provide swift, reliable repairs to keep your home running smoothly, anytime you need. Just dial us—hassle-free solutions await!
      </p>
      {/* <div className="about-content"> */}
     
       


<div className='ouraboutservice'>

<div>
      <h3 className="ouser-heading">🏠 Our Comprehensive Services:</h3>
        <ul className="service-list" data-aos="fade-up">
          <li><FaSnowflake className="service-icon" /> Refrigerator Repairs</li>
          <li><FaTools className="service-icon" /> Washing Machine Services</li>
          <li><FaFan className="service-icon" /> Microwave Repair Services</li>
          <li><FaTv className="service-icon" /> AC Repair And Services</li>
          <li><FaWrench className="service-icon" /> Geyser Repair Services</li>
        </ul>
</div>
       
<div>
<h3 className='ouser-heading'>🛠️ Why Choose DialFix Service ?</h3>
        <ul className="why-choose-list" data-aos="fade-up">
          <li>Rapid Response</li>
          <li>Skilled and Certified Professionals</li>
          <li>Transparent Pricing</li>
          <li>Genuine Parts</li>
          <li>Guaranteed Customer Satisfaction</li>
          <li>Personalized Care for Every Appliance</li>
         
        </ul>

</div>


</div>

       
        <p className="fade-up-bottom">
        🛵 We know how vital your appliances are to daily life, and when they malfunction, it can throw everything off balance. That’s why our team is committed to delivering fast and efficient home service. Our skilled technicians prioritize your convenience by providing prompt home visits, equipped with the right tools and expertise to restore your appliances to peak performance. With our rapid response times, you can trust that we'll be there when you need us most—minimizing downtime and maximizing your comfort. Your convenience and satisfaction are our top priorities!
        </p>

        <div className="contact-section" data-aos="fade-up">
          <button>📞 Dial: <a href="tel:+9908305008">9908305008</a></button>
        </div>
      {/* </div> */}

      <section className="quick-service-section-about">
      <div className="quick-service-content">
        <h2>Quick Service is Our Top Priority!</h2>
        <p>Our Experienced Repair Technicians are Available 7:00 AM to 11:00 PM Everyday</p>
      </div>
      <a href="/book-service" className="book-service-button">
        <span role="img" aria-label="phone"> Book Service Now</span>
      </a>
    </section>

</div>
  
    </section>
  );
};

export default About;
