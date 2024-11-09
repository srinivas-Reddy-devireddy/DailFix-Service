// import { useEffect, useState } from 'react';
// import '../styles/home.css';

// const Form = () => {
//     const [isOnline, setIsOnline] = useState(false);
//     const [formData, setFormData] = useState({
//         name: '',
//         mobile: '',
//         address: '',
//         serviceType: '',
//         date: '',
//         month: '',
//         year: ''
//     });

//     useEffect(() => {
//         // Set online status based on the time
//         const checkTime = () => {
//             const currentHour = new Date().getHours();
//             setIsOnline(currentHour >= 7 && currentHour < 23);
//         };
//         checkTime();
//         const timeInterval = setInterval(checkTime, 60000);
        
//         // Get current date, month, and year
//         const currentDate = new Date();
//         setFormData((prevData) => ({
//             ...prevData,
//             date: currentDate.getDate(),
//             month: currentDate.getMonth() + 1,
//             year: currentDate.getFullYear()
//         }));
        
//         return () => clearInterval(timeInterval);
//     }, []);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
    
//         const { name, mobile, address, serviceType, date, month, year } = formData;
    
//         try {
//             const response = await fetch('http://localhost:3001/create', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ name, mobile, address, serviceType, date, month, year })
//             });
    
//             if (response.ok) {
//                 alert("Submission completed successfully. Redirecting to WhatsApp...");
    
//                 // WhatsApp messaging setup
//                 const message = `New Service Request:\nName: ${name}\nMobile: ${mobile}\nAddress: ${address}\nService Type: ${serviceType}\nDate: ${date}/${month}/${year}`;
//                 const whatsappMessage = encodeURIComponent(message);
//                 const receiverWhatsAppUrl = `https://wa.me/919908305008?text=${whatsappMessage}`;
    
//                 // Open WhatsApp links in a new tab
//                 window.open(receiverWhatsAppUrl, '_blank');
    
//                 // Reset form
//                 setFormData({
//                     name: '',
//                     mobile: '',
//                     address: '',
//                     serviceType: '',
//                     date: '',
//                     month: '',
//                     year: ''
//                 });
//             } else {
//                 alert("Failed to submit. Please try again.");
//             }
//         } catch (error) {
//             console.error("Error submitting the form:", error);
//             alert("An error occurred. Please try again.");
//         }
//     };

//     return (
//         <div className="form-container">
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
//                     style={{marginTop:"-12px"}}
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
//                 style={{marginTop:"-12px"}}
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
//                             <div className="dot green-dot"></div> 
//                             <h3>Online (7 AM To 11 PM)</h3>
//                         </div>
//                         <p className="status">Our expert will call you within 5 to 10 minutes</p>
//                     </div>
//                 ) : (
//                     <div className="dots-container">
//                         <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"6px"}}>
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
//         const whatsappUrl = `https://wa.me/919908305008?text=${whatsappMessage}`;

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

// // const handleSubmit = (e) => {
// //     e.preventDefault();

// //     const { name, mobile, address, serviceType } = formData;
    
// //     // Combined message for both the service request and confirmation to the user
// //     const message = `New Service Request:\nName: ${name}\nMobile: ${mobile}\nAddress: ${address}\nService Type: ${serviceType}\n\nYour application data is received. We will get back to you shortly.`;
    
// //     // Encode the message for URL
// //     const whatsappMessage = encodeURIComponent(message);
    
// //     // WhatsApp API URL for the receiver (replace with the actual receiver number)
// //     const receiverWhatsAppUrl = `https://wa.me/916304490698?text=${whatsappMessage}`;
    
// //     // WhatsApp API URL for the sender
// //     const senderWhatsAppUrl = `https://wa.me/${mobile}?text=${whatsappMessage}`;

// //     // Show alert
// //     alert("Submission completed successfully. Redirecting to WhatsApp...");

// //     // Navigate to the receiver's WhatsApp chat
// //     window.location.href = receiverWhatsAppUrl;

// //     // After a short delay, navigate to the sender's WhatsApp chat
// //     setTimeout(() => {
// //         window.location.href = senderWhatsAppUrl;
// //     }, 5000); // Adjust the delay as needed

// //     // Reset the form
// //     setFormData({
// //         name: '',
// //         mobile: '',
// //         address: '',
// //         serviceType: ''
// //     });
// // }; 

// // const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const { name, mobile, address, serviceType } = formData;

// //     try {
// //         const response = await fetch('http://localhost:5000/add-customer-data', {
// //             method: 'POST',
// //             headers: { 'Content-Type': 'application/json' },
// //             body: JSON.stringify({ name, mobile, address, serviceType })
// //         });

// //         if (response.ok) {
// //             alert("Submission completed successfully. Redirecting to WhatsApp...");

// //             // WhatsApp messaging
// //             const message = `New Service Request:\nName: ${name}\nMobile: ${mobile}\nAddress: ${address}\nService Type: ${serviceType}\n\nYour application data is received. We will get back to you shortly.`;
// //             const whatsappMessage = encodeURIComponent(message);
// //             const receiverWhatsAppUrl = `https://wa.me/919908305008?text=${whatsappMessage}`;
// //             const senderWhatsAppUrl = `https://wa.me/${mobile}?text=${whatsappMessage}`;

// //             // Redirect to WhatsApp
// //             window.location.href = receiverWhatsAppUrl;
// //             setTimeout(() => {
// //                 window.location.href = senderWhatsAppUrl;
// //             }, 5000);

// //             // Reset form
// //             setFormData({
// //                 name: '',
// //                 mobile: '',
// //                 address: '',
// //                 serviceType: ''
// //             });
// //         } else {
// //             alert("Failed to submit. Please try again.");
// //         }
// //     } catch (error) {
// //         console.error("Error submitting the form:", error);
// //         alert("An error occurred. Please try again.");
// //     }
// // };


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

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const { name, mobile, address, serviceType } = formData;
        
//         try {
//             // Send data to backend API
//             const response = await fetch('http://localhost:3001/create', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ name, mobile, address, serviceType })
               
//             });
//             console.log(response)
//             if (response.ok) {
//                 alert("Submission completed successfully. Redirecting to WhatsApp...");

//                 // WhatsApp messaging
//                 const message = `New Service Request:\nName: ${name}\nMobile: ${mobile}\nAddress: ${address}\nService Type: ${serviceType}\n\nYour application data is received. We will get back to you shortly.`;
//                 const whatsappMessage = encodeURIComponent(message);
//                 const receiverWhatsAppUrl = `https://wa.me/919133870617?text=${whatsappMessage}`;
//                 const senderWhatsAppUrl = `https://wa.me/${mobile}?text=${whatsappMessage}`;

//                 // Redirect to WhatsApp
//                 window.location.href = receiverWhatsAppUrl;
//                 setTimeout(() => {
//                     window.location.href = senderWhatsAppUrl;
//                 }, 5000);

//                 // Reset form
//                 setFormData({
//                     name: '',
//                     mobile: '',
//                     address: '',
//                     serviceType: ''
//                 });
//             } else {
//                 alert("Failed to submit. Please try again.");
//             }
//         } catch (error) {
//             console.error("Error submitting the form:", error);
//             alert("An error occurred. Please try again.");
//         }
//     };
//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();
    
//     //     const { name, mobile, address, serviceType } = formData;
        
//     //     try {
//     //         // Send data to backend API
//     //         const response = await fetch('http://localhost:3001/create', {
//     //             method: 'POST',
//     //             headers: { 'Content-Type': 'application/json' },
//     //             body: JSON.stringify({ name, mobile, address, serviceType })
//     //         });
    
//     //         console.log(response);
    
//     //         if (response.ok) {
//     //             alert("Submission completed successfully.");
    
//     //             // WhatsApp messaging
//     //             const message = `New Service Request:\nName: ${name}\nMobile: ${mobile}\nAddress: ${address}\nService Type: ${serviceType}\n\nYour application data is received. We will get back to you shortly.`;
//     //             const whatsappMessage = encodeURIComponent(message);
    
//     //             // Send the message directly to the specified WhatsApp number
//     //             const whatsappUrl = `https://api.whatsapp.com/send?phone=919133870617&text=${whatsappMessage}`;
    
//     //             // Use fetch to send the message without navigating
//     //             const sendMessage = await fetch(whatsappUrl, {
//     //                 method: 'GET',
//     //             });
    
//     //             if (sendMessage.ok) {
//     //                 console.log('Message sent to WhatsApp successfully!');
//     //             } else {
//     //                 console.error('Failed to send WhatsApp message');
//     //             }
    
//     //             // Reset form
//     //             setFormData({
//     //                 name: '',
//     //                 mobile: '',
//     //                 address: '',
//     //                 serviceType: ''
//     //             });
//     //         } else {
//     //             alert("Failed to submit. Please try again.");
//     //         }
//     //     } catch (error) {
//     //         console.error("Error submitting the form:", error);
//     //         alert("An error occurred. Please try again.");
//     //     }
//     // };
    
//     return (
//         <div className="form-container">
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
//                             <div className="dot green-dot"></div> 
//                             <h3>Online (7 AM To 11 PM)</h3>
//                         </div>
//                         <p className="status">Our expert will call you within 5 to 10 minutes</p>
//                     </div>
//                 ) : (
//                     <div className="dots-container">
//                         <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"6px"}}>
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
