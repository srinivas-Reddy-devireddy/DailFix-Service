import React, { useEffect, useState } from 'react';
import '../../styles/services.css';
import FAQ from '../../components/FAQ';
import geyser from '../../assets/greyser.png'
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
<img src={geyser} alt="" />
      </div>

      <div className='service-content-section'>
  <h1>Geyser Repair Service</h1>
  <p>DailFix Service in Hyderabad offers expert repair for all types of geysers—instant, storage, and gas models. Our certified technicians specialize in resolving issues with heating elements, thermostats, tanks, and more, ensuring your geyser is restored to optimal functionality.</p>
  <p>Located in Hyderabad, DailFix Service provides reliable, hassle-free repair services with quick response times and transparent pricing. Here’s why our customers trust us:</p>

  <ul>
    <li><span>Same-Day Service:</span> We offer same-day or next-day repairs in Hyderabad, understanding the need for a working geyser, especially in colder months.</li>
    <li><span>Skilled Technicians:</span> Our certified team is experienced in handling All brands .</li>
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

    <FAQ/>
 
  </div>
  );
};

export default GeyserRepair;
