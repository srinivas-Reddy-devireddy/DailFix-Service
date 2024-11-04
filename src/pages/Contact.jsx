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
          <p> <FaEnvelope className='icon-email' /> <a href="mailto:mstechnoservice@gmail.com">mstechnoservice@gmail.com</a></p>
        </div>
    </div>


    </div>

      <div className="contat-form">
      
        <Form/>
      </div>


    </div>
   
    </section>
  );
};

export default ContactUs;
