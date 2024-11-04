import React, { useEffect, useState } from 'react';
import '../../styles/services.css';
import FAQ from '../../components/FAQ';
import ac from '../../assets/ac.png'
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
<img src={ac} alt="" />      
</div>

      <div className='service-content-section'>
  <h1>Air Conditioner Repair Service</h1>
  <p>DailFix Service in Hyderabad offers expert repair for all types of air conditioners—split, window, and inverter models. Our certified technicians are skilled in handling issues with compressors, condensers, cooling coils, and other AC components to restore your appliance to peak performance.</p>
  <p>Located in Hyderabad, DailFix Service provides reliable, hassle-free repair services with quick response times and transparent pricing. Here’s why our customers trust us:</p>

  <ul>
    <li><span>Same-Day Service:</span> We aim for same-day or next-day repairs in Hyderabad, understanding the need for a functioning air conditioner, especially in warmer months.</li>
    <li><span>Skilled Technicians:</span> Our certified team is experienced in handling  All brands </li>
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

    <FAQ/>
 
  </div>
  );
};

export default AirConditioner;
