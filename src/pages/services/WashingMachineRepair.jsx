import React, { useEffect, useState } from 'react';
import '../../styles/services.css';
import washingimg from '../../assets/DALL·E 2024-10-26 14.34.18 - HD image of a washing machine repair scene with a black background, showing tools like wrenches and screwdrivers. The washing machine has an open pane.webp'
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
        {/* <p>We offer professional repair services for all types of washing machines, including top-load, front-load, and semi-automatic models. Our technicians are experienced and certified, ensuring quality service every time.</p> */}
        {/* <p>DailFix Service in Hyderabad offers expert washing machine repair services for all types of washing machines, including top-load, front-load, and semi-automatic models. Whether you’re facing issues with your machine’s drum, motor, control panel, or drainage, we have you covered. Our certified technicians are trained to handle complex repairs with precision, ensuring your appliance is back up and running in no time.</p> */}
        <p>DailFix Service in Hyderabad offers expert repair for all washing machine types—top-load, front-load, and semi-automatic. Our certified technicians are skilled in resolving issues with drums, motors, control panels, and drainage, ensuring your appliance is quickly restored to optimal performance.

       </p>
       <p>Located in Hyderabad, DailFix Service provides trusted, hassle-free repair services with quick response times and transparent pricing. Here’s why our customers choose us:</p> 
        {/* <p>Located in Hyderabad, DailFix brings local, trusted repair services right to your doorstep. With our quick response times and transparent pricing, we aim to make washing machine repair as hassle-free as possible. Here’s why our Hyderabad customers trust us: */}
        {/* </p> */}
        

  <ul>  
    <li> <span>Same-Day Service:</span> We offer same-day or next-day repairs in Hyderabad, recognizing the importance of a working washing machine.</li>    
{/* <li>Same-Day Service: We strive to offer same-day or next-day service within Hyderabad, understanding how essential a functioning washing machine is for every household.</li> */}
{/* <li>Skilled Technicians: Our team of experienced professionals is certified to handle a range of washing machine brands, including LG, Samsung, Whirlpool, IFB, Bosch, and more.</li>  */}
<li> <span>Skilled Technicians:</span> Our certified team handles various brands like LG, Samsung, Whirlpool, IFB, and Bosch.</li>

<li> <span>Genuine Spare Parts:</span> We use original manufacturer parts for lasting repairs.</li>
<li> <span>Transparent Pricing:</span> DailFix Service offers clear pricing with no hidden charges.</li>
{/* <li>Genuine Spare Parts: We use only original parts directly from the manufacturer, ensuring long-lasting repairs.</li>  */}
{/* <li>Affordable, Transparent Pricing: With DailFix, you know exactly what you’re paying for. No hidden charges, just honest service.</li>  */}
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
<div className='faq-contact-container'>
<div className='faq-section'>
          <h2>Frequently Asked Questions</h2>
          <h4>1. How soon can you repair my washing machine?</h4>
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

export default WashingMachineRepair;
