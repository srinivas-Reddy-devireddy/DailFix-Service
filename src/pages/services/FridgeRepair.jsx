import React, { useEffect, useState } from 'react';
import '../../styles/services.css';
// import washingimg from '../../assets/DALL·E 2024-10-26 14.34.18 - HD image of a washing machine repair scene with a black background, showing tools like wrenches and screwdrivers. The washing machine has an open pane.webp'
const FridgeRepair = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 90000); // Delay to allow for mounting before animation

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);
  return (
    <div className='service-section  '>
       <div className="service-fridg-background-image">
     <h1 className='about'>Refrigerator Repair/Service</h1>
    </div>
<div className='container-row slide-in'>
<div className='service-img-container'>
        <img src='https://img.freepik.com/premium-photo/refrigerator-with-malfunctioning-ice-maker-being-repaired_1283887-12120.jpg?semt=ais_hybrid' alt='Microwave Repair' />
      </div>

      <div className='service-content-section'>
  <h1>Refrigerator Repair Service</h1>
  <p>DailFix Service in Hyderabad offers expert repair for all types of refrigerators—single-door, double-door, side-by-side, and French door models. Our certified technicians specialize in addressing issues with compressors, thermostats, cooling coils, and more, ensuring your appliance is restored to optimal functionality.</p>
  <p>Located in Hyderabad, DailFix Service provides reliable, hassle-free repair services with quick response times and transparent pricing. Here’s why our customers trust us:</p>

  <ul>
    <li><span>Same-Day Service:</span> We strive to provide same-day or next-day repairs in Hyderabad, understanding the necessity of a functioning refrigerator.</li>
    <li><span>Skilled Technicians:</span> Our certified team is experienced in handling brands like LG, Samsung, Whirlpool, Godrej, Haier, and more.</li>
    <li><span>Genuine Spare Parts:</span> We use original manufacturer parts to ensure durable repairs.</li>
    <li><span>Transparent Pricing:</span> DailFix Service offers clear pricing without hidden charges.</li>
  </ul>

  <div className='service-section-row'>
    <div className='service-offered'>
      <h2>Services We Offer</h2>
      <ul>
        <li>Compressor replacement and repair</li>
        <li>Thermostat adjustment and diagnostics</li>
        <li>Cooling coil and gas refill</li>
        <li>Defrost and temperature control repair</li>
        <li>Routine maintenance and servicing</li>
      </ul>
    </div>

    {/* Why Choose Us Section */}
    <div className='why-choose-us'>
      <h2>Why Choose Us?</h2>
      <p>Our experienced technicians provide reliable repairs, earning the trust of our customers.</p>
      <ul>
        <li>Certified and experienced technicians</li>
        <li>Customer satisfaction guarantee</li>
        <li>Transparent and fair pricing</li>
        <li>Use of genuine spare parts</li>
        <li>Fast, dependable service</li>
      </ul>
    </div>
  </div>
</div>





</div>
{/* FAQ Section */}
<div className='faq-contact-container'>
<div className='faq-section'>
          <h2>Frequently Asked Questions</h2>
          <h4>1. How soon can you repair my Microwave?</h4>
          <p>We offer same-day or next-day repair services based on your location and the availability of technicians.</p>
          
          <h4>2. Do you provide a warranty on repairs?</h4>
          <p>Yes, we provide a 3-month warranty on parts and labor for all repairs.</p>
          
          <h4>3. How do I book a repair service?</h4>
          <p>You can contact us through our website or call our customer support to schedule a convenient repair appointment.</p>
        </div>

        <div className='service-contact'>
          <h2>Contact Us</h2>
          <div className='call-book'>
          <button>  <a 
    href="tel:+19908305008" 
    className="call-link"
  >
    📞 Call Now
  </a></button>
      <button>Book Appointment</button>
          </div>
       
        </div>

</div>
    
 
  </div>
  );
};

export default FridgeRepair;
