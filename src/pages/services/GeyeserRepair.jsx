import React, { useEffect, useState } from 'react';
import '../../styles/services.css';
import geyserimg from '../../assets/DALL·E 2024-10-28 19.41.22 - A professional, high-definition image of a geyser repair scene. The image features a geyser technician working carefully on a water heater in a modern.webp'

const GeyserRepair= () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 90000); // Delay to allow for mounting before animation

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);
  return (
    <div className='service-section  '>
       <div className="service-geyeser-background-image">
     <h1 className='about'>Geyser Repair/Service</h1>
    </div>
<div className='container-row slide-in'>
<div className='service-img-container'>
        <img src='https://img.freepik.com/premium-photo/technician-replacing-broken-water-heater-with-new-installation_857340-11579.jpg' alt='Television Repair' />
      </div>

      <div className='service-content-section'>
  <h1>Geyser Repair Service</h1>
  <p>DailFix Service in Hyderabad offers expert repair for all types of geysers—instant, storage, and gas models. Our certified technicians specialize in resolving issues with heating elements, thermostats, tanks, and more, ensuring your geyser is restored to optimal functionality.</p>
  <p>Located in Hyderabad, DailFix Service provides reliable, hassle-free repair services with quick response times and transparent pricing. Here’s why our customers trust us:</p>

  <ul>
    <li><span>Same-Day Service:</span> We offer same-day or next-day repairs in Hyderabad, understanding the need for a working geyser, especially in colder months.</li>
    <li><span>Skilled Technicians:</span> Our certified team is experienced in handling top brands like Bajaj, Crompton, Havells, Racold, and more.</li>
    <li><span>Genuine Spare Parts:</span> We use original parts directly from manufacturers for lasting repairs.</li>
    <li><span>Transparent Pricing:</span> DailFix Service ensures straightforward pricing without hidden charges.</li>
  </ul>

  <div className='service-section-row'>
    <div className='service-offered'>
      <h2>Services We Offer</h2>
      <ul>
        <li>Heating element replacement</li>
        <li>Thermostat repair</li>
        <li>Tank leakage repair</li>
        <li>Pressure valve adjustments</li>
        <li>Routine maintenance and servicing</li>
      </ul>
    </div>

    {/* Why Choose Us Section */}
    <div className='why-choose-us'>
      <h2>Why Choose Us?</h2>
      <p>Our skilled technicians provide dependable repairs, giving customers confidence and peace of mind.</p>
      <ul>
        <li>Certified and experienced technicians</li>
        <li>Customer satisfaction guarantee</li>
        <li>Transparent, fair pricing</li>
        <li>Genuine spare parts</li>
        <li>Fast and efficient service</li>
      </ul>
    </div>
  </div>
</div>


 




</div>
{/* FAQ Section */}
<div className='faq-contact-container'>
<div className='faq-section'>
          <h2>Frequently Asked Questions</h2>
          <h4>1. How soon can you repair my Geyser?</h4>
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
    href="tel:+19133870617" 
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

export default GeyserRepair;
