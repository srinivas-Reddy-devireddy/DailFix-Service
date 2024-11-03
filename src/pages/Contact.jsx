// import React from 'react'
// import Form from '../components/Form'
// import '../styles/contact.css'
// import { FaPhone, FaEnvelope } from 'react-icons/fa';

// const Contact = () => {
//   return (
//   //   <section className="contact-section">
//   //   <div className="background-image">
//   //    <h1 className='about'>Contact</h1>
//   //   </div>
//   //   <h1>We’re Always Ready to Serve you ! Request a Call Back</h1>
   
//   //     <div className='contact-container'>

//   //       <div>
//   //         <h3>Working area</h3>
//   //         <h2>Our AC Technician are available Across Hyderabad 24x7
//   //         </h2>
//   //         <p>You don't need to bother anymore with your AC & Other Home Appliances, just call us we'll reach your Doorstep in 90 minutes or less in Hyderabad and you get instant AC repair & Services.

//   //    </p>
//   // <p> <span>add phone icons</span>91338700</p>
//   // <p> <span>add email icons</span>srinureddy1595@gmail.com</p>
  
  
 
 
//   //       </div>
//   //       <div className='contact-form-container'>
//   //       <Form/>
//   //       </div>
       
//   //  </div>
   
        
//   //   </section>

//   <section className="about-section">
//   <div className="background-image">
//    <h1 className='about'>Contact</h1>
//   </div>
//   <div className="about-container">
//    <h2 className='welcome-heading'>We’re Always Ready to Serve you ! Request a Call Back</h2>
  
    
 
 
   


// <div className='contact-container'>

// <div className='contat-content'>
//          <h3 className='work'>Working area</h3>
//           <h2 className='available'>Our Expert Technician are available Across Hyderabad 
//           </h2>
//           <p className='Appliances'>
//           Just call us, and we’ll reach your Hyderabad doorstep in 2 Hours or less for fast, reliable repair and service."
//           </p>
//            <p className="cell">
//         <FaPhone className='icon-cell'/>{' '}
//         <a href="tel:91338700">91338700</a>
//       </p>
      
//       <span className="email">
//         <FaEnvelope className='icon-email' />{' '}
//         <a href="mailto:srinureddy1595@gmail.com">srinureddy1595@gmail.com</a>
//       </span>
  
// </div>
   

// <div className='contat-form'>
// <Form/>
// </div>

// </div>

   
//     {/* <p className="fade-up-bottom">
//     🛵 We know how vital your appliances are to daily life, and when they malfunction, it can throw everything off balance. That’s why our team is committed to delivering fast and efficient home service. Our skilled technicians prioritize your convenience by providing prompt home visits, equipped with the right tools and expertise to restore your appliances to peak performance. With our rapid response times, you can trust that we'll be there when you need us most—minimizing downtime and maximizing your comfort. Your convenience and satisfaction are our top priorities!
//     </p> */}

//     {/* <div className="contact-section" data-aos="fade-up">
//       <button>📞 Dial: <a href="tel:+9908305008">9908305008</a></button>
//     </div> */}
//   {/* </div> */}

//   {/* <section className="quick-service-section-about">
//   <div className="quick-service-content">
//     <h2>Quick Service is Our Top Priority!</h2>
//     <p>Our Experienced Repair Technicians are Available 7:00 AM to 11:00 PM Everyday</p>
//   </div>
//   <a href="/book-service" className="book-service-button">
//     <span role="img" aria-label="phone">📞 Book Service Now</span>
//   </a>
// </section> */}

// </div>

// </section>


//   )
// }

// export default Contact




import React from "react";
import Form from '../components/Form'
import '../styles/contact.css'
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <section className="about-section">

    <div className="background-image">
     <h1 className='about'>Contact</h1>
    </div>


     <h2 className='welcome-heading-contact'>We’re Always Ready to Serve you ! Request a Call Back</h2>
 
  
  
  
 

    <div className="contact-container slide-in ">

      <div className="contact-info">

       
         <div className='contat-content'>
           <h3 className='work'>Working area</h3>
            <h2 className='available'>Our Expert Technician are available Across Hyderabad 
            </h2>
            <p className='Appliances'>
            Just call us, and we’ll reach your Hyderabad doorstep in 2 Hours or less for fast, reliable repair and service."
            </p>
         </div>
    
     <div className="contact-info-box">
        <div className="info-box">
          <i className="icon location"></i>
          <h4>Location</h4>
          <p>H.No.16-11-404/14<br />Sbi Colony, Moosaram Bagh <br /> Malakpet, 500036</p>
        
        </div>
       
        <div className="info-box">
          <i className="icon location"></i>
          <h4>Our Timings
         </h4>
          <p> 7AM - 10PM</p>
        
        </div>
        
        <div className="info-box">
          <h4>Phone Number</h4>
          <p> 
          <FaPhone className='icon-cell'/> <a href="tel:9908305008">9908305008</a></p>
        </div>
       
        <div className="info-box">
          <i className="icon-email"></i>
          <h4>Email</h4>
          <p> <FaEnvelope className='icon-email' /> <a href="mailto:srinureddy1595@gmail.com">dailfixservice@gmail.com</a></p>
        </div>
    </div>


    </div>

      <div className="contat-form">
        {/* <h2>Contact Us</h2> */}
        <Form/>
      </div>


    </div>
   
    </section>
  );
};

export default ContactUs;
