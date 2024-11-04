import React from 'react'
import { Link } from 'react-router-dom'

const FAQ = () => {
  return (
    <div>

<div className='faq-contact-container'>
<div className='faq-section'>
          <h2>Frequently Asked Questions</h2>
          <h4>1. How soon can you repair my washing machine?</h4>
          <p>We offer same-day or next-day repair services based on your location and the availability of technicians.</p>
          
          <h4>2. Do you provide a warranty on repairs?</h4>
          <p>Yes, we provide a 2-month warranty on parts and labor for all repairs.</p>
          
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
          <Link to='/Home/booking-form' className='Link'>  <button>Book Service Now</button></Link>                
          </div>
       
        </div>

</div>
    </div>
  )
}

export default FAQ