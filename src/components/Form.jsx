
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
//         const whatsappUrl = `https://wa.me/919133870617?text=${whatsappMessage}`;

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

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const { name, mobile, address, serviceType } = formData;
    //     const message = `New Service Request:\nName: ${name}\nMobile: ${mobile}\nAddress: ${address}\nService Type: ${serviceType}`;
        
    //     // Encode the message for URL
    //     const whatsappMessage = encodeURIComponent(message);
        
    //     // WhatsApp API URL
    //     const whatsappUrl = `https://wa.me/919133870617?text=${whatsappMessage}`;

    //     // Show alert
    //     alert("Submission completed successfully. Click OK to send your request via WhatsApp.");
        
    //     // Open the WhatsApp link in a new tab
    //     window.open(whatsappUrl, '_blank');

    //     // Reset the form
    //     setFormData({
    //         name: '',
    //         mobile: '',
    //         address: '',
    //         serviceType: ''
    //     });
    // };
// const handleSubmit = (e) => {
//     e.preventDefault();

//     const { name, mobile, address, serviceType } = formData;
//     const message = `New Service Request:\nName: ${name}\nMobile: ${mobile}\nAddress: ${address}\nService Type: ${serviceType}`;
    
//     // Encode the message for URL
//     const whatsappMessage = encodeURIComponent(message);
    
//     // WhatsApp URL to submit service request
//     const whatsappUrl = `https://wa.me/919133870617?text=${whatsappMessage}`;
    
//     // Default confirmation message for user
//     const userConfirmationMessage = encodeURIComponent("Your application data is received. We will get back to you shortly.");
    
//     // URL to send confirmation message to user's WhatsApp
//     const userWhatsappUrl = `https://wa.me/${formData.mobile}?text=${userConfirmationMessage}`;

//     // Alert user before navigating
//     alert("Submission completed successfully. Click OK to send your request via WhatsApp.");
    
//     // Open WhatsApp links
//     window.open(whatsappUrl, '_blank'); // To send request to service
//     window.open(userWhatsappUrl, '_blank'); // To confirm to user

//     // Reset form fields
//     setFormData({
//         name: '',
//         mobile: '',
//         address: '',
//         serviceType: ''
//     });
// };     
const handleSubmit = (e) => {
    e.preventDefault();

    const { name, mobile, address, serviceType } = formData;
    
    // Combined message for both the service request and confirmation to the user
    const message = `New Service Request:\nName: ${name}\nMobile: ${mobile}\nAddress: ${address}\nService Type: ${serviceType}\n\nYour application data is received. We will get back to you shortly.`;
    
    // Encode the message for URL
    const whatsappMessage = encodeURIComponent(message);
    
    // WhatsApp API URL for a single message
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
                    <option value="television">Television</option>

                </select>
                <button type="submit" className="book-now-btn">Book Now</button>
            </form>

            <p className="terms-text">
                By clicking Book Now, you agree to our <span>terms</span>
            </p>
            <p className="status-text">
                {isOnline ? (
                    <div className="dots-container">
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"6px"}}>
                        <div className="dot green-dot"></div> 
                        <h3 >Online (7 AM To 11 PM)</h3>
                        </div>
                        
                        <p className="status">Our expert will call you within 5 to 10 minutes</p>
                    </div>
                ) : (
                    <div className="dots-container">
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"6px"}}>
                        <div className="dot red-dot"></div>
                        <h3> Offline</h3>
                        </div>
                       
                        <p className="status">Our expert is available from 7 AM to 11 PM</p>
                    </div>
                )}
            </p>
        </div>
    
       
    );
};

export default Form;





