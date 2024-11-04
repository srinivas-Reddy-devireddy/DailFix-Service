import React, { useEffect, useState } from 'react';
import '../../styles/services.css';
import FAQ from '../../components/FAQ';
import fridg from '../../assets/refrigerator.png'
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
        <img src={fridg} alt='' />
      </div>

      <div className='service-content-section'>
  <h1>Refrigerator Repair Service</h1>
  <p>DailFix Service in Hyderabad offers expert repair for all types of refrigerators—single-door, double-door, side-by-side, and French door models. Our certified technicians specialize in addressing issues with compressors, thermostats, cooling coils, and more, ensuring your appliance is restored to optimal functionality.</p>
  <p>Located in Hyderabad, DailFix Service provides reliable, hassle-free repair services with quick response times and transparent pricing. Here’s why our customers trust us:</p>

  <ul>
    <li><span>Same-Day Service:</span> We strive to provide same-day or next-day repairs in Hyderabad, understanding the necessity of a functioning refrigerator.</li>
    <li><span>Skilled Technicians:</span> Our certified team is experienced in handling All brands </li>
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

    <FAQ/>
 
  </div>
  );
};

export default FridgeRepair;
