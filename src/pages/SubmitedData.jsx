// import React from 'react';
// import { Link } from 'react-router-dom';

// function SubmittedData({ submittedData }) {
//   return (
//     <div>
//       <h2>Submitted Data</h2>
//       {submittedData.length === 0 ? (
//         <p>No data submitted yet.</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>User ID</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>Address</th>
//               <th>Appliance</th>
//               <th>Contact Method</th>
//               <th>Problem Description</th>
//             </tr>
//           </thead>
//           <tbody>
//             {submittedData.map((data, index) => (
//               <tr key={index}>
//                 <td>{data.userId}</td>
//                 <td>{data.name}</td>
//                 <td>{data.email}</td>
//                 <td>{data.phone}</td>
//                 <td>{data.address}</td>
//                 <td>{data.appliance}</td>
//                 <td>{data.contactMethod}</td>
//                 <td>{data.problem}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//       <Link to="/">Go back to the form</Link>
//     </div>
//   );
// }

// export default SubmittedData;


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// function SubmittedData() {
//   const [submittedData, setSubmittedData] = useState([]);

//   // Fetch data from localStorage when the component loads
//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem('submittedData')) || [];
//     setSubmittedData(storedData);
//   }, []);

//   return (
//     <div>
//       <h2>Submitted Data</h2>
//       {submittedData.length === 0 ? (
//         <p>No data submitted yet.</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>User ID</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>Address</th>
//               <th>Appliance</th>
//               <th>Contact Method</th>
//               <th>Problem Description</th>
//             </tr>
//           </thead>
//           <tbody>
//             {submittedData.map((data, index) => (
//               <tr key={index}>
//                 <td>{data.userId}</td>
//                 <td>{data.name}</td>
//                 <td>{data.email}</td>
//                 <td>{data.phone}</td>
//                 <td>{data.address}</td>
//                 <td>{data.appliance}</td>
//                 <td>{data.contactMethod}</td>
//                 <td>{data.problem}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//       <Link to="/">Go back to the form</Link>
//     </div>
//   );
// }

// export default SubmittedData;



// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import * as XLSX from 'xlsx'; // Import xlsx library for generating Excel files

// function SubmittedData() {
//   const [submittedData, setSubmittedData] = useState([]);
//   const [isAdmin, setIsAdmin] = useState(false); // Assume isAdmin is set based on user role

//   // Fetch data from localStorage when the component loads
//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem('submittedData')) || [];
//     setSubmittedData(storedData);

//     // Simulate admin check (this would normally be done via authentication)
//     const userRole = localStorage.getItem('userRole'); // assuming user role is stored
//     if (userRole === 'admin') {
//       setIsAdmin(true); // Set true if the user is an admin
//     }
//   }, []);

//   // Function to download data as Excel
//   const handleDownloadExcel = () => {
//     const worksheet = XLSX.utils.json_to_sheet(submittedData); // Convert JSON data to sheet
//     const workbook = XLSX.utils.book_new(); // Create a new workbook
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Submitted Data'); // Append sheet to workbook

//     // Export the workbook as an Excel file
//     XLSX.writeFile(workbook, 'submitted_data.xlsx');
//   };

//   return (
//     <div>
//       <h2>Submitted Data</h2>
//       {submittedData.length === 0 ? (
//         <p>No data submitted yet.</p>
//       ) : (
//         <div>
//           <table>
//             <thead>
//               <tr>
//                 <th>User ID</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>Address</th>
//                 <th>Appliance</th>
//                 <th>Contact Method</th>
//                 <th>Problem Description</th>
//               </tr>
//             </thead>
//             <tbody>
//               {submittedData.map((data, index) => (
//                 <tr key={index}>
//                   <td>{data.userId}</td>
//                   <td>{data.name}</td>
//                   <td>{data.email}</td>
//                   <td>{data.phone}</td>
//                   <td>{data.address}</td>
//                   <td>{data.appliance}</td>
//                   <td>{data.contactMethod}</td>
//                   <td>{data.problem}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Show download button only to admins */}
//           {isAdmin && (
//             <button onClick={handleDownloadExcel} style={{color:"red"}}>
//               Download Excel
//             </button>
//           )}
//         </div>
//       )}
//       <Link to="/">Go back to the form</Link>
//     </div>
//   );
// }

// export default SubmittedData; 



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import LoginPopup from '../components/LoginAdmin'; // Import the LoginPopup component

// function SubmittedData({ submittedData }) {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

//   useEffect(() => {
//     // Check if the user has already logged in by looking for a flag in localStorage
//     const loggedInStatus = localStorage.getItem('isLoggedIn');
//     if (loggedInStatus === 'true') {
//       setIsLoggedIn(true); // If they have logged in before, no need to show popup
//     }
//   }, []);

//   // Function to handle login success
//   const handleLogin = (success) => {
//     if (success) {
//       setIsLoggedIn(true); // Set login status to true if login is successful
//       localStorage.setItem('isLoggedIn', 'true'); // Store login status in localStorage
//     }
//   };

//   return (
//     <div>
//       {!isLoggedIn && <LoginPopup onLogin={handleLogin} />} {/* Show popup only if not logged in */}

//       {isLoggedIn && (
//         <div>
//           <h2>Submitted Data</h2>
//           {submittedData.length === 0 ? (
//             <p>No data submitted yet.</p>
//           ) : (
//             <table>
//               <thead>
//                 <tr>
//                   <th>User ID</th>
//                   <th>Name</th>
//                   <th>Email</th>
//                   <th>Phone</th>
//                   <th>Address</th>
//                   <th>Appliance</th>
//                   <th>Contact Method</th>
//                   <th>Problem Description</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {submittedData.map((data, index) => (
//                   <tr key={index}>
//                     <td>{data.userId}</td>
//                     <td>{data.name}</td>
//                     <td>{data.email}</td>
//                     <td>{data.phone}</td>
//                     <td>{data.address}</td>
//                     <td>{data.appliance}</td>
//                     <td>{data.contactMethod}</td>
//                     <td>{data.problem}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//           <Link to="/">Go back to the form</Link>
//         </div>
//       )}
//     </div>
//   );
// }

// export default SubmittedData;  



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import LoginPopup from '../components/LoginAdmin'; // Assuming you already have this component
// import * as XLSX from 'xlsx'; // Import the xlsx library

// function SubmittedData({ submittedData }) {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

//   useEffect(() => {
//     // Check if the user has already logged in by looking for a flag in localStorage
//     const loggedInStatus = localStorage.getItem('isLoggedIn');
//     if (loggedInStatus === 'true') {
//       setIsLoggedIn(true); // If they have logged in before, no need to show popup
//     }
//   }, []);

//   // Function to handle login success
//   const handleLogin = (success) => {
//     if (success) {
//       setIsLoggedIn(true); // Set login status to true if login is successful
//       localStorage.setItem('isLoggedIn', 'true'); // Store login status in localStorage
//     }
//   };

//   // Function to download data as Excel
//   const handleDownloadExcel = () => {
//     const ws = XLSX.utils.json_to_sheet(submittedData); // Convert data to sheet
//     const wb = XLSX.utils.book_new(); // Create a new workbook
//     XLSX.utils.book_append_sheet(wb, ws, 'Submitted Data'); // Append the sheet to the workbook
//     XLSX.writeFile(wb, 'submitted_data.xlsx'); // Download the file as submitted_data.xlsx
//   };

//   return (
//     <div>
//       {!isLoggedIn && <LoginPopup onLogin={handleLogin} />} {/* Show popup only if not logged in */}

//       {isLoggedIn && (
//         <div>
//           <h2>Submitted Data</h2>
//           {submittedData.length === 0 ? (
//             <p>No data submitted yet.</p>
//           ) : (
//             <>
//               <table>
//                 <thead>
//                   <tr>
//                     <th>User ID</th>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Phone</th>
//                     <th>Address</th>
//                     <th>Appliance</th>
//                     <th>Contact Method</th>
//                     <th>Problem Description</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {submittedData.map((data, index) => (
//                     <tr key={index}>
//                       <td>{data.userId}</td>
//                       <td>{data.name}</td>
//                       <td>{data.email}</td>
//                       <td>{data.phone}</td>
//                       <td>{data.address}</td>
//                       <td>{data.appliance}</td>
//                       <td>{data.contactMethod}</td>
//                       <td>{data.problem}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               {/* Button to download data as Excel */}
//               <button onClick={handleDownloadExcel}>Download Data as Excel</button>
//             </>
//           )}
//           <Link to="/">Go back to the form</Link>
//         </div>
//       )}
//     </div>
//   );
// }

// export default SubmittedData;


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import LoginPopup from '../components/LoginAdmin';
// import * as XLSX from 'xlsx';

// function SubmittedData({ submittedData }) {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
//   const [storedData, setStoredData] = useState([]); // To store data from localStorage

//   useEffect(() => {
//     // Check if the user has already logged in by looking for a flag in localStorage
//     const loggedInStatus = localStorage.getItem('isLoggedIn');
//     if (loggedInStatus === 'true') {
//       setIsLoggedIn(true); // If they have logged in before, no need to show popup
//     }

//     // Retrieve any previously stored data from localStorage
//     const savedData = JSON.parse(localStorage.getItem('submittedData'));
//     if (savedData) {
//       setStoredData(savedData); // Set stored data if available
//     }
//   }, []);

//   useEffect(() => {
//     // Whenever the submittedData prop changes, save it to localStorage
//     if (submittedData.length > 0) {
//       const combinedData = [...storedData, ...submittedData];
//       localStorage.setItem('submittedData', JSON.stringify(combinedData)); // Save combined data
//       setStoredData(combinedData); // Update state with combined data
//     }
//   }, [submittedData]);

//   // Function to handle login success
//   const handleLogin = (success) => {
//     if (success) {
//       setIsLoggedIn(true);
//       localStorage.setItem('isLoggedIn', 'true');
//     }
//   };

//   // Function to download data as Excel
//   const handleDownloadExcel = () => {
//     const ws = XLSX.utils.json_to_sheet(storedData); // Use storedData for downloading
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Submitted Data');
//     XLSX.writeFile(wb, 'submitted_data.xlsx');
//   };

//   return (
//     <div>
//       {!isLoggedIn && <LoginPopup onLogin={handleLogin} />} {/* Show popup only if not logged in */}

//       {isLoggedIn && (
//         <div>
//           <h2>Customers Data</h2>
//           {storedData.length === 0 ? (
//             <p>No data submitted yet.</p>
//           ) : (
//             <>
//               <table>
//                 <thead>
//                   <tr>
//                     <th>User ID</th>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Phone</th>
//                     <th>Address</th>
//                     <th>Appliance</th>
//                     <th>Contact Method</th>
//                     <th>Problem Description</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {storedData.map((data, index) => (
//                     <tr key={index}>
//                       <td>{data.userId}</td>
//                       <td>{data.name}</td>
//                       <td>{data.email}</td>
//                       <td>{data.phone}</td>
//                       <td>{data.address}</td>
//                       <td>{data.appliance}</td>
//                       <td>{data.contactMethod}</td>
//                       <td>{data.problem}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <button onClick={handleDownloadExcel}>Download Data as Excel</button>
//             </>
//           )}
//           <Link to="/">Go back to the Home</Link>
//         </div>
//       )}
//     </div>
//   );
// }

// export default SubmittedData;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoginPopup from '../components/LoginAdmin';
import * as XLSX from 'xlsx';

function SubmittedData({ submittedData }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [storedData, setStoredData] = useState([]); // Local state to manage data

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }

    // Use submittedData to set initial storedData
    if (submittedData.length > 0) {
      setStoredData(submittedData);
    } else {
      // Retrieve data from localStorage if no data is passed
      const savedData = JSON.parse(localStorage.getItem('submittedData'));
      if (savedData) setStoredData(savedData);
    }
  }, [submittedData]);

  const handleLogin = (success) => {
    if (success) {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
    }
  };

  const handleDownloadExcel = () => {
    const ws = XLSX.utils.json_to_sheet(storedData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Submitted Data');
    XLSX.writeFile(wb, 'submitted_data.xlsx');
  };

  return (
    <div>
      {!isLoggedIn && <LoginPopup onLogin={handleLogin} />}

      {isLoggedIn && (
        <div>
          <h2>Customers Data</h2>
          {storedData.length === 0 ? (
            <p>No data submitted yet.</p>
          ) : (
            <>
              <table>
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Appliance</th>
                    <th>Contact Method</th>
                    <th>Problem Description</th>
                  </tr>
                </thead>
                <tbody>
                  {storedData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.userId}</td>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.phone}</td>
                      <td>{data.address}</td>
                      <td>{data.appliance}</td>
                      <td>{data.contactMethod}</td>
                      <td>{data.problem}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={handleDownloadExcel}>Download Data as Excel</button>
            </>
          )}
          <Link to="/">Go back to the Home</Link>
        </div>
      )}
    </div>
  );
}

export default SubmittedData;



// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import LoginPopup from '../components/LoginAdmin';
// import * as XLSX from 'xlsx';

// function SubmittedData({ submittedData }) {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
//   const [storedData, setStoredData] = useState([]); // To store data from localStorage

//   useEffect(() => {
//     // Check if the user has already logged in by looking for a flag in localStorage
//     const loggedInStatus = localStorage.getItem('isLoggedIn');
//     if (loggedInStatus === 'true') {
//       setIsLoggedIn(true); // If they have logged in before, no need to show popup
//     }

//     // Retrieve any previously stored data from localStorage
//     const savedData = JSON.parse(localStorage.getItem('submittedData'));
//     if (savedData) {
//       setStoredData(savedData); // Set stored data if available
//     }
//   }, []);

//   useEffect(() => {
//     // Whenever the submittedData prop changes, save it to localStorage
//     if (submittedData.length > 0) {
//       const combinedData = [...storedData, ...submittedData];
//       localStorage.setItem('submittedData', JSON.stringify(combinedData)); // Save combined data
//       setStoredData(combinedData); // Update state with combined data
//     }
//   }, [submittedData]);

//   // Function to handle login success
//   const handleLogin = (success) => {
//     if (success) {
//       setIsLoggedIn(true);
//       localStorage.setItem('isLoggedIn', 'true');
//     }
//   };

//   // Function to download data as Excel
//   const handleDownloadExcel = () => {
//     const ws = XLSX.utils.json_to_sheet(storedData); // Use storedData for downloading
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Submitted Data');
//     XLSX.writeFile(wb, 'submitted_data.xlsx');
//   };

//   return (
//     <div>
//       {!isLoggedIn && <LoginPopup onLogin={handleLogin} />} {/* Show popup only if not logged in */}

//       {isLoggedIn && (
//         <div>
//           <h2>Customers Data</h2>
//           {storedData.length === 0 ? (
//             <p>No data submitted yet.</p>
//           ) : (
//             <>
//               <table className="responsive-table">
//                 <thead>
//                   <tr>
//                     <th>User ID</th>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Phone</th>
//                     <th>Address</th>
//                     <th>Appliance</th>
//                     <th>Contact Method</th>
//                     <th>Problem Description</th>
//                     <th>Submission Time</th> {/* New column for time */}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {storedData.map((data, index) => (
//                     <tr key={index}>
//                       <td>{data.userId}</td>
//                       <td>{data.name}</td>
//                       <td>{data.email}</td>
//                       <td>{data.phone}</td>
//                       <td>{data.address}</td>
//                       <td>{data.appliance}</td>
//                       <td>{data.contactMethod}</td>
//                       <td>{data.problem}</td>
//                       <td>{data.timestamp}</td> {/* Display submission time */}
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <button onClick={handleDownloadExcel}>Download Data as Excel</button>
//             </>
//           )}
//           <Link to="/">Go back to the Home</Link>
//         </div>
//       )}
//     </div>
//   );
// }

// export default SubmittedData;


