// import React, {  useEffect,useState } from 'react';
// import '../styles/home.css';

// const Form = () => {
//     const [isOnline, setIsOnline] = useState(false);

//     useEffect(() => {
//         const checkTime = () => {
//           const currentHour = new Date().getHours();
//           setIsOnline(currentHour >= 10 && currentHour < 23);

//         };
    
//         // Initial check and setting an interval to update status
//         checkTime();
//         const timeInterval = setInterval(checkTime, 60000); // Check every 60 seconds
    
//         return () => clearInterval(timeInterval);
//       }, []);

//   return (
//     <div>


// <div className="form-container">
             
//              <form>
//            <input type="text" placeholder="Name" required />
//            <input type="tel" placeholder="Mobile No." required />
           
         
//            <input type="text" placeholder="Address" required />
         
          
//            <select required>
//              <option value="" disabled selected>Select Service Type</option>
//              <option value="washing-machine">Washing Machine</option>
//              <option value="refrigerator">Refrigerator</option>
//              <option value="air-conditioner">Air Conditioner</option>
//              <option value="geyser">Geyser</option>
//              <option value="microwave">Microwave</option>
//            </select>
         
//            <button type="submit" className="book-now-btn">Book Now</button>
//          </form>
         
//                        <p className="terms-text">
//                          By clicking Book Now, you agree to our <span>terms</span>
//                        </p>
//                        <p className="status-text">
//                          {isOnline ? (
//                            <>
//                               <div className="dots-container">
//                                <div className="dot green-dot"></div>Online ( 7 AM To 11 PM)
              
//                              </div>
//                              <p className='status'>Our expert will call you within 5 to 10 minutes</p>
                              
//                            </>
//                          ) : (
//                            <>
//                          <div className="dots-container">
                            
//                      <div className="dot red-dot"></div>Offline 
//                              </div>
//                              Our expert is available from 7 AM to 11 PM
//                            </>
//                          )}
//                        </p>
// </div>

//     </div>
//   )
// }

// export default Form


import React, { useEffect, useState } from 'react';
import '../styles/home.css';

const Form = () => {
    const [isOnline, setIsOnline] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        address: '',
        serviceType: ''
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

        const { name, mobile, address, serviceType } = formData;
        const message = `New Service Request:\nName: ${name}\nMobile: ${mobile}\nAddress: ${address}\nService Type: ${serviceType}`;
        
        // Encode the message for URL
        const whatsappMessage = encodeURIComponent(message);
        
        // WhatsApp API URL
        const whatsappUrl = `https://wa.me/919133870617?text=${whatsappMessage}`;

        // Show alert
        alert("Submission completed successfully. Click OK to send your request via WhatsApp.");
        
        // Open the WhatsApp link in a new tab
        window.open(whatsappUrl, '_blank');

        // Reset the form
        setFormData({
            name: '',
            mobile: '',
            address: '',
            serviceType: ''
        });
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    value={formData.name}
                    onChange={handleInputChange} 
                    required 
                />
                <input 
                    type="tel" 
                    name="mobile" 
                    placeholder="Mobile No." 
                    value={formData.mobile}
                    onChange={handleInputChange} 
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
                    <option value="" disabled>Select Service Type</option>
                    <option value="washing-machine">Washing Machine</option>
                    <option value="refrigerator">Refrigerator</option>
                    <option value="air-conditioner">Air Conditioner</option>
                    <option value="geyser">Geyser</option>
                    <option value="microwave">Microwave</option>
                </select>
                <button type="submit" className="book-now-btn">Book Now</button>
            </form>

            <p className="terms-text">
                By clicking Book Now, you agree to our <span>terms</span>
            </p>
            <p className="status-text">
                {isOnline ? (
                    <div className="dots-container">
                        <div className="dot green-dot"></div>Online (7 AM To 11 PM)
                        <p className="status">Our expert will call you within 5 to 10 minutes</p>
                    </div>
                ) : (
                    <div className="dots-container">
                        <div className="dot red-dot"></div>Offline
                        <p>Our expert is available from 7 AM to 11 PM</p>
                    </div>
                )}
            </p>
        </div>
    );
};

export default Form;
