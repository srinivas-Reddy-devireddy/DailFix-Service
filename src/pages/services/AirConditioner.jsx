import React, { useEffect, useState } from 'react';
import '../../styles/services.css';
// import washingimg from '../../assets/DALL·E 2024-10-26 14.34.18 - HD image of a washing machine repair scene with a black background, showing tools like wrenches and screwdrivers. The washing machine has an open pane.webp'
const AirConditioner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 90000); // Delay to allow for mounting before animation

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);
  return (
    <div className='service-section  '>
       <div className="service-AirConditioner-background-image">
     <h1 className='about'>AirConditioner Repair/Service</h1>
    </div>
<div className='container-row slide-in'>
<div className='service-img-container'>
        <img src='https://img.freepik.com/free-photo/repairman-doing-air-conditioner-service_1303-26541.jpg' alt='Microwave Repair' />
      </div>

      <div className='service-content-section'>
  <h1>Air Conditioner Repair Service</h1>
  <p>DailFix Service in Hyderabad offers expert repair for all types of air conditioners—split, window, and inverter models. Our certified technicians are skilled in handling issues with compressors, condensers, cooling coils, and other AC components to restore your appliance to peak performance.</p>
  <p>Located in Hyderabad, DailFix Service provides reliable, hassle-free repair services with quick response times and transparent pricing. Here’s why our customers trust us:</p>

  <ul>
    <li><span>Same-Day Service:</span> We aim for same-day or next-day repairs in Hyderabad, understanding the need for a functioning air conditioner, especially in warmer months.</li>
    <li><span>Skilled Technicians:</span> Our certified team is experienced in handling brands like Daikin, LG, Samsung, Voltas, Carrier, and more.</li>
    <li><span>Genuine Spare Parts:</span> We use original manufacturer parts to ensure durable repairs and efficient cooling.</li>
    <li><span>Transparent Pricing:</span> DailFix Service offers straightforward pricing without hidden charges.</li>
  </ul>

  <div className='service-section-row'>
    <div className='service-offered'>
      <h2>Services We Offer</h2>
      <ul>
        <li>Compressor repair and replacement</li>
        <li>Condenser coil cleaning and maintenance</li>
        <li>Gas refilling and cooling restoration</li>
        <li>Thermostat and temperature control repair</li>
        <li>Routine maintenance and servicing</li>
      </ul>
    </div>

    {/* Why Choose Us Section */}
    <div className='why-choose-us'>
      <h2>Why Choose Us?</h2>
      <p>Our experienced technicians provide dependable repairs that inspire customer confidence.</p>
      <ul>
        <li>Certified and experienced technicians</li>
        <li>Customer satisfaction guarantee</li>
        <li>Transparent and fair pricing</li>
        <li>Use of genuine spare parts</li>
        <li>Fast and reliable service</li>
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

export default AirConditioner;
