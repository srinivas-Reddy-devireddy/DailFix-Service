import React, { useEffect, useState } from 'react';
import '../../styles/services.css';
import washingimg from '../../assets/DALL·E 2024-10-26 14.34.18 - HD image of a washing machine repair scene with a black background, showing tools like wrenches and screwdrivers. The washing machine has an open pane.webp'
import FAQ from '../../components/FAQ';
const WashingMachineRepair = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 90000); // Delay to allow for mounting before animation

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);
  return (
    <div className='service-section  '>
       <div className="service-washing-background-image">
     <h1 className='about'>Washing Machine Repair/Service</h1>
    </div>
<div className='container-row slide-in'>
<div className='service-img-container'>
        <img src={washingimg} alt='Washing Machine Repair' />
      </div>

      <div className='service-content-section'>
        <h1>Washing Machine Repair Service</h1>
         <p>DailFix Service in Hyderabad offers expert repair for all washing machine types—top-load, front-load, and semi-automatic. Our certified technicians are skilled in resolving issues with drums, motors, control panels, and drainage, ensuring your appliance is quickly restored to optimal performance.

       </p>
       <p>Located in Hyderabad, DailFix Service provides trusted, hassle-free repair services with quick response times and transparent pricing. Here’s why our customers choose us:</p> 
       
        

  <ul>  
    <li> <span>Same-Day Service:</span> We offer same-day or next-day repairs in Hyderabad, recognizing the importance of a working washing machine.</li>    
<li> <span>Skilled Technicians:</span> Our certified team handles All brands </li>

<li> <span>Genuine Spare Parts:</span> We use original manufacturer parts for lasting repairs.</li>
<li> <span>Transparent Pricing:</span> DailFix Service offers clear pricing with no hidden charges.</li>
</ul>      
        <div className='service-section-row'> 
        <div className='service-offered'>
          <h2>Services We Offer</h2>
          <ul>
            <li>Drum and motor repairs</li>
            <li>Control panel troubleshooting</li>
            <li>Drainage and pump repair</li>
            <li>Water leakage solutions</li>
            <li>Routine maintenance and servicing</li>
          </ul>
        </div>

        {/* Why Choose Us Section */}
        <div className='why-choose-us'>
          <h2>Why Choose Us?</h2>
          <p>Our experienced technicians provide reliable repairs that earn customer trust.</p>
          <ul>
            <li>Experienced technicians</li>
            <li>100% customer satisfaction guarantee</li>
            <li>Transparent pricing</li>
            <li>Genuine spare parts</li>
            <li>Fast response time</li>
          </ul>
        </div>
        </div>
        {/* Services Offered Section */}
       

       

       
      </div>


 




</div>
{/* FAQ Section */}

    <FAQ/>
 
  </div>
  );
};

export default WashingMachineRepair;
