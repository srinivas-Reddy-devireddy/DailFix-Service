
// import React, { useState } from 'react';
// import '../styles/contactform.css';

// function ContactForm() {
//   const [formData, setFormData] = useState({
//     email: '',
//     phone: '',
//   });
//   const [errors, setErrors] = useState({
//     email: false,
//     phone: false,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // Handle numeric input for phone to prevent non-numeric characters
//     if (name === 'phone') {
//       if (!/^\d*$/.test(value)) {
//         return; // Exit if the input is not a number
//       }
//     }

//     setFormData((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const validateEmail = (email) => {
//     const emailPattern = /^[a-zA-Z0-9._%+-]+@gami\.com$/;
//     return email === '' || emailPattern.test(email); // Valid or empty
//   };

//   const validatePhone = (phone) => {
//     return phone === '' || /^\d{10}$/.test(phone); // Must be exactly 10 digits or empty
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const isEmailValid = validateEmail(formData.email);
//     const isPhoneValid = validatePhone(formData.phone);

//     setErrors({
//       email: !isEmailValid,
//       phone: !isPhoneValid,
//     });

//     if (isEmailValid && isPhoneValid) {
//       // Proceed with form submission logic
//       console.log('Form Submitted', formData);
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Contact Us</h2>
//       <p>Fill Form Get a Free Quote</p>
//       <form className="contact-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Name</label>
//           <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Email*</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
           
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Phone</label>
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Your Phone Number"
//             className={errors.phone ? 'input-error' : ''}
//             value={formData.phone}
//             onChange={handleChange}
//             maxLength="10" // Restrict to 10 digits
//             required
//           />
//           {errors.phone && <small className="error-message">Phone must be a 10-digit number</small>}
//         </div>
//         <div className="form-group">
//           <label>Address (Street, City, Zip Code)</label>
//           <input type="text" name="address" placeholder="Your Address" onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Make and Model Number of Appliance</label>
//           <input type="text" name="appliance" placeholder="Appliance Make and Model" onChange={handleChange} />
//         </div>
        
//         {/* Optional Select Input */}
//         <div className="form-group">
//           <label>Preferred Contact Method (Optional)</label>
//           <select name="contactMethod" onChange={handleChange}>
//             <option value="">Select an option</option>
//             <option value="Washing Machine">Washing Machine</option>
//             <option value="Refrigerator">Refrigerator</option>
//             <option value="Geyser">Geyser</option>
//             <option value="Microwave Repair">Microwave Repair</option>
//             <option value="Air Conditioner">Air Conditioner</option>
//             <option value="TVS">TVS</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Describe the problem that you are having</label>
//           <textarea name="problem" placeholder="Describe the issue" onChange={handleChange}></textarea>
//         </div>
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// }

// export default ContactForm;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/contactform.css';

// function ContactForm({ setSubmittedData }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//     appliance: '',
//     contactMethod: '',
//     problem: '',
//   });
//   const [errors, setErrors] = useState({
//     email: false,
//     phone: false,
//   });
//   const navigate = useNavigate(); // Hook to navigate to the next page

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // Handle numeric input for phone to prevent non-numeric characters
//     if (name === 'phone') {
//       if (!/^\d*$/.test(value)) {
//         return; // Exit if the input is not a number
//       }
//     }

//     setFormData((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const validatePhone = (phone) => {
//     return phone === '' || /^\d{10}$/.test(phone); // Must be exactly 10 digits or empty
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const isPhoneValid = validatePhone(formData.phone);

//     setErrors({
//       phone: !isPhoneValid,
//     });

//     if (isPhoneValid) {
//       // Generate unique ID for the user
//       const userId = `ID${Math.floor(1000 + Math.random() * 9000)}`;

//       // Add userId to form data
//       const dataWithId = { ...formData, userId };

//       // Pass the form data to App component
//       setSubmittedData((prevData) => [...prevData, dataWithId]);

//       // Redirect to the submitted data page
//       navigate('/submitted');
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Contact Us</h2>
//       <p>Fill Form Get a Free Quote</p>
//       <form className="contact-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Name</label>
//           <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Email</label>
//           <input type="email" name="email" placeholder="Your Email" onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Phone</label>
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Your Phone Number"
//             className={errors.phone ? 'input-error' : ''}
//             value={formData.phone}
//             onChange={handleChange}
//             maxLength="10"
//             required
//           />
//           {errors.phone && <small className="error-message">Phone must be a 10-digit number</small>}
//         </div>
//         <div className="form-group">
//           <label>Address (Street, City, Zip Code)</label>
//           <input type="text" name="address" placeholder="Your Address" onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Make and Model Number of Appliance</label>
//           <input type="text" name="appliance" placeholder="Appliance Make and Model" onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Preferred Contact Method</label>
//           <select name="contactMethod" onChange={handleChange}>
//             <option value="">Select an option</option>
//             <option value="Washing Machine">Washing Machine</option>
//             <option value="Refrigerator">Refrigerator</option>
//             <option value="Geyser">Geyser</option>
//             <option value="Microwave Repair">Microwave Repair</option>
//             <option value="Air Conditioner">Air Conditioner</option>
//             <option value="TVS">TVS</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Describe the problem that you are having</label>
//           <textarea name="problem" placeholder="Describe the issue" onChange={handleChange}></textarea>
//         </div>
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// }

// export default ContactForm;



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/contactform.css';

// function ContactForm({ setSubmittedData }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//     appliance: '',
//     contactMethod: '',
//     problem: '',
//   });
//   const [errors, setErrors] = useState({
//     email: false,
//     phone: false,
//   });
//   const navigate = useNavigate(); // Hook to navigate to the next page

//   // Fetch data from localStorage on component mount
//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem('submittedData')) || [];
//     setSubmittedData(storedData);
//   }, [setSubmittedData]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // Handle numeric input for phone to prevent non-numeric characters
//     if (name === 'phone') {
//       if (!/^\d*$/.test(value)) {
//         return; // Exit if the input is not a number
//       }
//     }

//     setFormData((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const validatePhone = (phone) => {
//     return phone === '' || /^\d{10}$/.test(phone); // Must be exactly 10 digits or empty
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const isPhoneValid = validatePhone(formData.phone);

//     setErrors({
//       phone: !isPhoneValid,
//     });

//     if (isPhoneValid) {
//       // Generate unique ID for the user
//       const userId = `ID${Math.floor(1000 + Math.random() * 9000)}`;

//       // Add userId to form data
//       const dataWithId = { ...formData, userId };

//       // Update data in localStorage
//       const storedData = JSON.parse(localStorage.getItem('submittedData')) || [];
//       const updatedData = [...storedData, dataWithId];
//       localStorage.setItem('submittedData', JSON.stringify(updatedData));

//       // Pass the updated form data to App component
//       setSubmittedData(updatedData);

//       // Redirect to the submitted data page
//       navigate('/');
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Contact Us</h2>
//       <p>Fill Form Get a Free Quote</p>
//       <form className="contact-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Name</label>
//           <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Email</label>
//           <input type="email" name="email" placeholder="Your Email" onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Phone</label>
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Your Phone Number"
//             className={errors.phone ? 'input-error' : ''}
//             value={formData.phone}
//             onChange={handleChange}
//             maxLength="10"
//             required
//           />
//           {errors.phone && <small className="error-message">Phone must be a 10-digit number</small>}
//         </div>
//         <div className="form-group">
//           <label>Address (Street, City, Zip Code)</label>
//           <input type="text" name="address" placeholder="Your Address" onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Make and Model Number of Appliance</label>
//           <input type="text" name="appliance" placeholder="Appliance Make and Model" onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Preferred Contact Method</label>
//           <select name="contactMethod" onChange={handleChange}>
//             <option value="">Select an option</option>
//             <option value="Washing Machine">Washing Machine</option>
//             <option value="Refrigerator">Refrigerator</option>
//             <option value="Geyser">Geyser</option>
//             <option value="Microwave Repair">Microwave Repair</option>
//             <option value="Air Conditioner">Air Conditioner</option>
//             <option value="TVS">TVS</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Describe the problem that you are having</label>
//           <textarea name="problem" placeholder="Describe the issue" onChange={handleChange}></textarea>
//         </div>
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// }

// export default ContactForm;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/contactform.css';

// function ContactForm({ setSubmittedData }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//     appliance: '',
//     contactMethod: '',
//     problem: '',
//   });
//   const [errors, setErrors] = useState({
//     email: false,
//     phone: false,
//   });
//   const navigate = useNavigate(); // Hook to navigate to the next page

//   // Fetch data from localStorage on component mount
//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem('submittedData')) || [];
//     setSubmittedData(storedData);
//   }, [setSubmittedData]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // Handle numeric input for phone to prevent non-numeric characters
//     if (name === 'phone') {
//       if (!/^\d*$/.test(value)) {
//         return; // Exit if the input is not a number
//       }
//     }

//     setFormData((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const validatePhone = (phone) => {
//     return phone === '' || /^\d{10}$/.test(phone); // Must be exactly 10 digits or empty
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const isPhoneValid = validatePhone(formData.phone);

//     setErrors({
//       phone: !isPhoneValid,
//     });

//     if (isPhoneValid) {
//       // Generate unique ID for the user
//       const userId = `ID${Math.floor(1000 + Math.random() * 9000)}`;

//       // Add userId to form data
//       const dataWithId = { ...formData, userId };

//       // Update data in localStorage
//       const storedData = JSON.parse(localStorage.getItem('submittedData')) || [];
//       const updatedData = [...storedData, dataWithId];
//       localStorage.setItem('submittedData', JSON.stringify(updatedData));

//       // Pass the updated form data to App component
//       setSubmittedData(updatedData);

//       // Show alert after successful submission
//       alert('Your data has been successfully sent to our services!');

//       // Redirect to the submitted data page
//       navigate('/data');
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Contact Us</h2>
//       <p>Fill Form Get a Free Quote</p>
//       <form className="contact-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Name</label>
//           <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Email</label>
//           <input type="email" name="email" placeholder="Your Email" onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Phone</label>
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Your Phone Number"
//             className={errors.phone ? 'input-error' : ''}
//             value={formData.phone}
//             onChange={handleChange}
//             maxLength="10"
//             required
//           />
//           {errors.phone && <small className="error-message">Phone must be a 10-digit number</small>}
//         </div>
//        <div className="form-group">
// //           <label>Address (Street, City, Zip Code)</label>
// //           <input type="text" name="address" placeholder="Your Address" onChange={handleChange} />
// //         </div>
//         <div className="form-group">
// //           <label>Make and Model Number of Appliance</label>
// //           <input type="text" name="appliance" placeholder="Appliance Make and Model" onChange={handleChange} />
// //         </div>
//        <div className="form-group">
// //           <label>Preferred Contact Method</label>
// //           <select name="contactMethod" onChange={handleChange}>
// //             <option value="">Select an option</option>
// //             <option value="Washing Machine">Washing Machine</option>
// //             <option value="Refrigerator">Refrigerator</option>
// //             <option value="Geyser">Geyser</option>
// //             <option value="Microwave Repair">Microwave Repair</option>
// //             <option value="Air Conditioner">Air Conditioner</option>
// //             <option value="TVS">TVS</option>
// //           </select>
// //         </div>
//         <div className="form-group">
// //           <label>Describe the problem that you are having</label>
// //           <textarea name="problem" placeholder="Describe the issue" onChange={handleChange}></textarea>
// //         </div>
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// }

// export default ContactForm;   

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function ContactForm({ setSubmittedData }) {

  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    appliance: '',
    contactMethod: '',
    problem: '',
  });
  const [errors, setErrors] = useState({ phone: false });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone' && !/^\d*$/.test(value)) return; // Prevent non-numeric phone input
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validatePhone = (phone) => {
    return phone === '' || /^\d{10}$/.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isPhoneValid = validatePhone(formData.phone);
    setErrors({ phone: !isPhoneValid });

    if (isPhoneValid) {
      const userId = `ID${Math.floor(1000 + Math.random() * 9000)}`;
      const dataWithId = { ...formData, userId };

      // Store data in localStorage
      const storedData = JSON.parse(localStorage.getItem('submittedData')) || [];
      const updatedData = [...storedData, dataWithId];
      localStorage.setItem('submittedData', JSON.stringify(updatedData));

      // Update the state with the new data
      if (typeof setSubmittedData === 'function') {
        setSubmittedData(updatedData);
      } else {
        console.error('setSubmittedData is not a function');
      }

      alert('Your data has been successfully sent to our services!');
      navigate('/submitted');
    }
  };

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <p>Fill Form Get a Free Quote</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        {/* Form Inputs */}
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" placeholder="Your Email" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            className={errors.phone ? 'input-error' : ''}
            value={formData.phone}
            onChange={handleChange}
            maxLength="10"
            required
          />
          {errors.phone && <small className="error-message">Phone must be a 10-digit number</small>}
        </div>
        {/* Rest of the form fields */}
        <div className="form-group">
           <label>Address (Street, City, Zip Code)</label>
          <input type="text" name="address" placeholder="Your Address" onChange={handleChange} />
       </div>
        <div className="form-group">
         <label>Make and Model Number of Appliance</label>
         <input type="text" name="appliance" placeholder="Appliance Make and Model" onChange={handleChange} />
         </div>
       <div className="form-group">
           <label>Preferred Contact Method</label>
           <select name="contactMethod" onChange={handleChange}>
           <option value="">Select an option</option>
            <option value="Washing Machine">Washing Machine</option>
            <option value="Refrigerator">Refrigerator</option>
             <option value="Geyser">Geyser</option>
            <option value="Microwave Repair">Microwave Repair</option>
            <option value="Air Conditioner">Air Conditioner</option>
            <option value="TVS">TVS</option>
          </select>
        </div>
        <div className="form-group">
           <label>Describe the problem that you are having</label>
          <textarea name="problem" placeholder="Describe the issue" onChange={handleChange}></textarea>
       </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/contactform.css';

// function ContactForm({ setSubmittedData }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//     appliance: '',
//     contactMethod: '',
//     problem: '',
//   });
//   const [errors, setErrors] = useState({
//     email: false,
//     phone: false,
//   });
//   const navigate = useNavigate(); // Hook to navigate to the next page

//   // Fetch data from localStorage on component mount
//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem('submittedData')) || [];
//     setSubmittedData(storedData);
//   }, [setSubmittedData]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // Handle numeric input for phone to prevent non-numeric characters
//     if (name === 'phone') {
//       if (!/^\d*$/.test(value)) {
//         return; // Exit if the input is not a number
//       }
//     }

//     setFormData((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const validatePhone = (phone) => {
//     return phone === '' || /^\d{10}$/.test(phone); // Must be exactly 10 digits or empty
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const isPhoneValid = validatePhone(formData.phone);

//     setErrors({
//       phone: !isPhoneValid,
//     });

//     if (isPhoneValid) {
//       // Generate unique ID for the user
//       const userId = `ID${Math.floor(1000 + Math.random() * 9000)}`;

//       // Add current date and time
//       const currentDate = new Date().toLocaleString();

//       // Add userId and timestamp to form data
//       const dataWithId = { ...formData, userId, timestamp: currentDate };

//       // Update data in localStorage
//       const storedData = JSON.parse(localStorage.getItem('submittedData')) || [];
//       const updatedData = [...storedData, dataWithId];
//       localStorage.setItem('submittedData', JSON.stringify(updatedData));

//       // Pass the updated form data to App component
//       setSubmittedData(updatedData);

//       // Redirect to the submitted data page
//       navigate('/');
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Contact Us</h2>
//       <p>Fill Form Get a Free Quote</p>
//       <form className="contact-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Name</label>
//           <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Email</label>
//           <input type="email" name="email" placeholder="Your Email" onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Phone</label>
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Your Phone Number"
//             className={errors.phone ? 'input-error' : ''}
//             value={formData.phone}
//             onChange={handleChange}
//             maxLength="10"
//             required
//           />
//           {errors.phone && <small className="error-message">Phone must be a 10-digit number</small>}
//         </div>
//         <div className="form-group">
//           <label>Address (Street, City, Zip Code)</label>
//           <input type="text" name="address" placeholder="Your Address" onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Make and Model Number of Appliance</label>
//           <input type="text" name="appliance" placeholder="Appliance Make and Model" onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Preferred Contact Method</label>
//           <select name="contactMethod" onChange={handleChange}>
//             <option value="">Select an option</option>
//             <option value="Washing Machine">Washing Machine</option>
//             <option value="Refrigerator">Refrigerator</option>
//             <option value="Geyser">Geyser</option>
//             <option value="Microwave Repair">Microwave Repair</option>
//             <option value="Air Conditioner">Air Conditioner</option>
//             <option value="TVS">TVS</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Describe the problem that you are having</label>
//           <textarea name="problem" placeholder="Describe the issue" onChange={handleChange}></textarea>
//         </div>
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// }

// export default ContactForm;

