



// import React, { useEffect, useState } from 'react';
// import '../styles/home.css';

// const Form = () => {
//     const [isOnline, setIsOnline] = useState(false);
//     const [formData, setFormData] = useState({
//         name: '',
//         mobile: '',
//         address: '',
//         serviceType: ''
//     });



//     useEffect(() => {
//         const checkTime = () => {
//             const currentHour = new Date().getHours();
//             setIsOnline(currentHour >= 7 && currentHour < 23);
//         };

//         checkTime();
//         const timeInterval = setInterval(checkTime, 60000);
//         return () => clearInterval(timeInterval);
//     }, []);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });

        

        
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const { name, mobile, address, serviceType } = formData;
//         const message = `New Service Request:\nName: ${name}\nMobile: ${mobile}\nAddress: ${address}\nService Type: ${serviceType}`;
        
//         // Encode the message for URL
//         const whatsappMessage = encodeURIComponent(message);
        
//         // WhatsApp API URL
//         const whatsappUrl = `https://wa.me/919989183030?text=${whatsappMessage}`;

//         // Show alert
//         alert("Submission completed successfully. Click OK to send your request via WhatsApp.");
        
//         // Open the WhatsApp link in a new tab
//         window.open(whatsappUrl, '_blank');

//         // Reset the form
//         setFormData({
//             name: '',
//             mobile: '',
//             address: '',
//             serviceType: ''
//         });
//     };

//     return (
       
//  <div className="form-container">
//             <form onSubmit={handleSubmit}>
//                 <input 
//                     type="text" 
//                     name="name" 
//                     placeholder="Name" 
//                     value={formData.name}
//                     onChange={handleInputChange} 
//                     required 
//                 />
//                 <input 
//                     type="tel" 
//                     name="mobile" 
//                     placeholder="Mobile No." 
//                     value={formData.mobile}
//                     onChange={handleInputChange} 
//                     // onChange={ handleChange}
//                     required 
//                 //    min={10}
// maxLength={10}
//                 />  
//                  {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
//                 <input 
//                     type="text" 
//                     name="address" 
//                     placeholder="Address" 
//                     value={formData.address}
//                     onChange={handleInputChange} 
//                     required 
//                 />
//                 <select 
//                     name="serviceType" 
//                     value={formData.serviceType}
//                     onChange={handleInputChange} 
//                     required
//                 >
//                     <option value="" disabled>Select Service Type</option>
//                     <option value="washing-machine">Washing Machine</option>
//                     <option value="refrigerator">Refrigerator</option>
//                     <option value="air-conditioner">Air Conditioner</option>
//                     <option value="geyser">Geyser</option>
//                     <option value="microwave">Microwave</option>
//                     <option value="television">Television</option>

//                 </select>
//                 <button type="submit" className="book-now-btn">Book Now</button>
//             </form>

//             <p className="terms-text">
//                 By clicking Book Now, you agree to our <span>terms</span>
//             </p>
//             <p className="status-text">
//                 {isOnline ? (
//                     <div className="dots-container">
//                         <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"6px"}}>
//                         <div className="dot green-dot"></div> 
//                         <h3 >Online (7 AM To 11 PM)</h3>
//                         </div>
                        
//                         <p className="status">Our expert will call you within 5 to 10 minutes</p>
//                     </div>
//                 ) : (
//                     <div className="dots-container">
//                         <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"6px"}}>
//                         <div className="dot red-dot"></div>
//                         <h3> Offline</h3>
//                         </div>
                       
//                         <p className="status">Our expert is available from 7 AM to 11 PM</p>
//                     </div>
//                 )}
//             </p>
//         </div>
    
       
//     );
// };

// export default Form;


// import React, { useRef, useState, useEffect } from 'react';
// import emailjs from 'emailjs-com';
// import '../styles/home.css';

// const Form = () => {
//     const form = useRef(); // Reference for the form
//     const [isOnline, setIsOnline] = useState(false);
//     const [formData, setFormData] = useState({
//         name: '',
//         mobile: '',
//         address: '',
//         serviceType: '',
//     });

//     useEffect(() => {
//         const checkTime = () => {
//             const currentHour = new Date().getHours();
//             setIsOnline(currentHour >= 7 && currentHour < 23);
//         };

//         checkTime();
//         const timeInterval = setInterval(checkTime, 60000);
//         return () => clearInterval(timeInterval);
//     }, []);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Sending form data using EmailJS
//         emailjs
//             .sendForm(
//                 'service_4gh00tp',        // Replace with your Service ID
//                 'template_lk46hit',       // Replace with your Template ID
//                 form.current,             // Form reference
//                 '8_9MWeqjo6P0y_5fl'       // Replace with your Public Key (User ID)
//             )
//             .then(
//                 (result) => {
//                     console.log('SUCCESS!', result.text);
//                     alert('Submission completed successfully. Your request has been sent via email.');

//                     // Reset form fields
//                     setFormData({
//                         name: '',
//                         mobile: '',
//                         address: '',
//                         serviceType: '',
//                     });
//                 },
//                 (error) => {
//                     console.error('FAILED...', error);
//                     alert('Failed to send email. Please try again later.');
//                 }
//             );
//     };

//     return (
//         <div className="form-container">
//             <form ref={form} onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     required
//                 />
//                 <input
//                     type="tel"
//                     name="mobile"
//                     placeholder="Mobile No."
//                     value={formData.mobile}
//                     onChange={handleInputChange}
//                     maxLength={10}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="address"
//                     placeholder="Address"
//                     value={formData.address}
//                     onChange={handleInputChange}
//                     required
//                 />
//                 <select
//                     name="serviceType"
//                     value={formData.serviceType}
//                     onChange={handleInputChange}
//                     required
//                 >
//                     <option value="" disabled>
//                         Select Service Type
//                     </option>
//                     <option value="washing-machine">Washing Machine</option>
//                     <option value="refrigerator">Refrigerator</option>
//                     <option value="air-conditioner">Air Conditioner</option>
//                     <option value="geyser">Geyser</option>
//                     <option value="microwave">Microwave</option>
//                     <option value="television">Television</option>
//                 </select>
//                 <button type="submit" className="book-now-btn">
//                     Book Now
//                 </button>
//             </form>

//             <p className="terms-text">
//                 By clicking Book Now, you agree to our <span>terms</span>
//             </p>
//             <p className="status-text">
//                 {isOnline ? (
//                     <div className="dots-container">
//                         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px' }}>
//                             <div className="dot green-dot"></div>
//                             <h3>Online (7 AM To 11 PM)</h3>
//                         </div>
//                         <p className="status">Our expert will call you within 5 to 10 minutes</p>
//                     </div>
//                 ) : (
//                     <div className="dots-container">
//                         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px' }}>
//                             <div className="dot red-dot"></div>
//                             <h3>Offline</h3>
//                         </div>
//                         <p className="status">Our expert is available from 7 AM to 11 PM</p>
//                     </div>
//                 )}
//             </p>
//         </div>
//     );
// };

// export default Form;



// import React, { useRef, useState, useEffect } from 'react';
// import emailjs from 'emailjs-com';
// import '../styles/home.css';

// const Form = () => {
//     const form = useRef(); // Reference for the form
//     const [isOnline, setIsOnline] = useState(false);
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         mobile: '',
//         address: '',
//         serviceType: '',
//     });

//     useEffect(() => {
//         const checkTime = () => {
//             const currentHour = new Date().getHours();
//             setIsOnline(currentHour >= 7 && currentHour < 23);
//         };

//         checkTime();
//         const timeInterval = setInterval(checkTime, 60000);
//         return () => clearInterval(timeInterval);
//     }, []);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Sending form data using EmailJS
//         emailjs
//             .sendForm(
//                 'service_4gh00tp',        // Replace with your Service ID
//                 'template_lk46hit',       // Replace with your Template ID
//                 form.current,             // Form reference
//                 '8_9MWeqjo6P0y_5fl'       // Replace with your Public Key (User ID)
//             )
//             .then(
//                 (result) => {
//                     console.log('SUCCESS!', result.text);
//                     alert('Submission completed successfully. Your request has been sent via email.');

//                     // Reset form fields
//                     setFormData({
//                         name: '',
//                         email: '',
//                         mobile: '',
//                         address: '',
//                         serviceType: '',
//                     });
//                 },
//                 (error) => {
//                     console.error('FAILED...', error);
//                     alert('Failed to send email. Please try again later.');
//                 }
//             );
//     };

//     return (
//         <div className="form-container">
//             <form ref={form} onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     required
//                 />
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                 />
//                 <input
//                     type="tel"
//                     name="mobile"
//                     placeholder="Mobile No."
//                     value={formData.mobile}
//                     onChange={handleInputChange}
//                     maxLength={10}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="address"
//                     placeholder="Address"
//                     value={formData.address}
//                     onChange={handleInputChange}
//                     required
//                 />
//                 <select
//                     name="serviceType"
//                     value={formData.serviceType}
//                     onChange={handleInputChange}
//                     required
//                 >
//                     <option value="" disabled>
//                         Select Service Type
//                     </option>
//                     <option value="washing-machine">Washing Machine</option>
//                     <option value="refrigerator">Refrigerator</option>
//                     <option value="air-conditioner">Air Conditioner</option>
//                     <option value="geyser">Geyser</option>
//                     <option value="microwave">Microwave</option>
//                     <option value="television">Television</option>
//                 </select>
//                 <button type="submit" className="book-now-btn">
//                     Book Now
//                 </button>
//             </form>

//             <p className="terms-text">
//                 By clicking Book Now, you agree to our <span>terms</span>
//             </p>
//             <p className="status-text">
//                 {isOnline ? (
//                     <div className="dots-container">
//                         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px' }}>
//                             <div className="dot green-dot"></div>
//                             <h3>Online (7 AM To 11 PM)</h3>
//                         </div>
//                         <p className="status">Our expert will call you within 5 to 10 minutes</p>
//                     </div>
//                 ) : (
//                     <div className="dots-container">
//                         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px' }}>
//                             <div className="dot red-dot"></div>
//                             <h3>Offline</h3>
//                         </div>
//                         <p className="status">Our expert is available from 7 AM to 11 PM</p>
//                     </div>
//                 )}
//             </p>
//         </div>
//     );
// };

// export default Form;



import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import '../styles/home.css';

const Form = () => {
    const form = useRef(); // Reference for the form
    const navigate = useNavigate(); // Navigation hook
    const [isOnline, setIsOnline] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        address: '',
        serviceType: '',
    });

    useEffect(() => {
        const checkTime = () => {
            const currentHour = new Date().getHours();
            setIsOnline(currentHour >= 7 && currentHour < 23);
        };

        checkTime();
        const timeInterval = setInterval(checkTime, 60000);
        return () => clearInterval(timeInterval);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Sending form data using EmailJS
        emailjs
            .sendForm(
                'service_4gh00tp',        // Replace with your Service ID
                'template_lk46hit',       // Replace with your Template ID
                form.current,             // Form reference
                '8_9MWeqjo6P0y_5fl'       // Replace with your Public Key (User ID)
            )
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);

                    // Navigate to the confirmation page after success
                    navigate('/thank-you');
                },
                (error) => {
                    console.error('FAILED...', error);
                    alert('Failed to send email. Please try again later.');
                }
            );
    };

    return (
        <div className="form-container">
            <form ref={form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile No."
                    value={formData.mobile}
                    onChange={handleInputChange}
                    maxLength={10}
                    required
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                />
                <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    required
                >
                    <option value="" disabled>
                        Select Service Type
                    </option>
                    <option value="washing-machine">Washing Machine</option>
                    <option value="refrigerator">Refrigerator</option>
                    <option value="air-conditioner">Air Conditioner</option>
                    <option value="geyser">Geyser</option>
                    <option value="microwave">Microwave</option>
                    <option value="television">Television</option>
                </select>
                <button type="submit" className="book-now-btn">
                    Book Now
                </button>
            </form>

            <p className="terms-text">
                By clicking Book Now, you agree to our <span>terms</span>
            </p>
            <p className="status-text">
                {isOnline ? (
                    <div className="dots-container">
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px' }}>
                            <div className="dot green-dot"></div>
                            <h3>Online (7 AM To 11 PM)</h3>
                        </div>
                        <p className="status">Our expert will call you within 5 to 10 minutes</p>
                    </div>
                ) : (
                    <div className="dots-container">
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px' }}>
                            <div className="dot red-dot"></div>
                            <h3>Offline</h3>
                        </div>
                        <p className="status">Our expert is available from 7 AM to 11 PM</p>
                    </div>
                )}
            </p>
        </div>
    );
};

export default Form;
