import React, { useEffect, useState } from 'react';
import '../../styles/services.css';
// import geyserimg from '../../assets/DALL·E 2024-10-28 19.41.22 - A professional, high-definition image of a geyser repair scene. The image features a geyser technician working carefully on a water heater in a modern.webp'
const TelevisionRepair= () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 90000); // Delay to allow for mounting before animation

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);
  return (
    <div className='service-section  '>
       <div className="service-Television-background-image">
     <h1 className='about'>Television Repair/Service</h1>
    </div>
<div className='container-row slide-in'>
<div className='service-img-container'>
        <img src='https://png.pngtree.com/thumb_back/fh260/background/20230307/pngtree-professional-repair-engineer-repairing-broken-tv-photo-image_1833405.jpg' alt='Television Repair' />
      </div>

      <div className='service-content-section'>
  <h1>Television Repair Service</h1>
  <p>DailFix Service in Hyderabad offers expert repair for all types of televisions—LCD, LED, OLED, and plasma models. Our certified technicians are skilled in addressing issues with screens, circuit boards, power supply, and more, ensuring your TV is restored to optimal performance.</p>
  <p>Located in Hyderabad, DailFix Service provides reliable, hassle-free repair services with quick response times and clear pricing. Here’s why our customers trust us:</p>

  <ul>
    <li><span>Same-Day Service:</span> We aim for same-day or next-day repairs in Hyderabad, recognizing the need for a working television.</li>
    <li><span>Skilled Technicians:</span> Our certified team is experienced in handling brands like LG, Samsung, Sony, Panasonic, and more.</li>
    <li><span>Genuine Spare Parts:</span> We use original manufacturer parts to ensure long-lasting repairs.</li>
    <li><span>Transparent Pricing:</span> DailFix Service provides straightforward pricing without hidden charges.</li>
  </ul>

  <div className='service-section-row'>
    <div className='service-offered'>
      <h2>Services We Offer</h2>
      <ul>
        <li>Screen repairs and replacements</li>
        <li>Circuit board diagnostics</li>
        <li>Power supply repair</li>
        <li>Audio and video troubleshooting</li>
        <li>Routine maintenance and servicing</li>
      </ul>
    </div>

    {/* Why Choose Us Section */}
    <div className='why-choose-us'>
      <h2>Why Choose Us?</h2>
      <p>Our experienced technicians deliver dependable repairs that inspire customer confidence.</p>
      <ul>
        <li>Certified and experienced technicians</li>
        <li>Customer satisfaction guarantee</li>
        <li>Transparent and fair pricing</li>
        <li>Use of genuine spare parts</li>
        <li>Fast, reliable service</li>
      </ul>
    </div>
  </div>
</div>


 




</div>
{/* FAQ Section */}
<div className='faq-contact-container'>
<div className='faq-section'>
          <h2>Frequently Asked Questions</h2>
          <h4>1. How soon can you repair my TV?</h4>
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

export default TelevisionRepair;
