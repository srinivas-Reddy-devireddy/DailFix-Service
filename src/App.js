
// import './App.css';
// import Header from './components/Header';
// import Footer from './pages/Footer';
// import Home from './pages/Home';

// function App() {
//   return (
//     <div className="App">
  // <Header/>
 
  // <Home/>
  // <Footer/>
//     </div>
//   );
// }

// export default App;   



// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ContactForm from './pages/ContactForm';
// import SubmittedData from './pages/SubmitedData';
// import Header from './components/Header';
// import Footer from './pages/Footer';
// import Home from './pages/Home';

// function App() {
//   const [submittedData, setSubmittedData] = useState([]);

//   return (
//     <Router>
//       <Routes>
//       <Header/>
 
//  <Home/>
//  <Footer/>
//         <Route path="/" element={<ContactForm setSubmittedData={setSubmittedData} />} />
//         <Route path="/submitted" element={<SubmittedData submittedData={submittedData} />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ContactForm from './pages/ContactForm';
// import SubmittedData from './pages/SubmitedData';
// import Header from './components/Header';
// import Footer from './pages/Footer';
// import Home from './pages/Home';

// function App() {
//   const [submittedData, setSubmittedData] = useState([]);

//   return (
//     <Router>
//       {/* Header and Footer are placed outside of Routes so they appear on every page */}
//       <Header />
//       <div className="content">
//         <Routes>
//           {/* Define your routes here */}
//           <Route path="/home" element={<Home />} />
//           <Route path="/contact" element={<ContactForm setSubmittedData={setSubmittedData} />} />
//           <Route path="/submitted" element={<SubmittedData submittedData={submittedData} />} />
//         </Routes>
//       </div>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ContactForm from './pages/ContactForm';
// import SubmittedData from './pages/SubmitedData';
// import Header from './components/Header';
// import Footer from './pages/Footer';
// import Home from './pages/Home';

// function App() {
//   const [submittedData, setSubmittedData] = useState([]);

//   // Load submitted data from localStorage on component mount
//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem('submittedData')) || [];
//     setSubmittedData(storedData);
//   }, []);

//   // Save submitted data to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem('submittedData', JSON.stringify(submittedData));
//   }, [submittedData]);

//   return (
//     <Router>
//       {/* Header and Footer are placed outside of Routes so they appear on every page */}
//       <Header />
//       <div className="content">
//         <Routes>
//           {/* Define your routes here */}
//           <Route path="/home" element={<Home />} />
//           <Route path="/contact" element={<ContactForm setSubmittedData={setSubmittedData} />} />
// <Route path="/submitted" element={<SubmittedData submittedData={submittedData} />} />
//     </Routes>
//       </div>
//       <Footer />
//     </Router>
//   );
// }

// export default App;  

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ContactForm from './pages/ContactForm';
// import SubmittedData from './pages/SubmitedData';
// import Header from './components/Header';
// import Footer from './pages/Footer';
// import Home from './pages/Home';

// function App() {
//   // State to hold submitted data
//   const [submittedData, setSubmittedData] = useState([]);

//   return (
//     <Router>
//       <Header />
//       <div className="content">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/contact" element={<ContactForm setSubmittedData={setSubmittedData} />} />
//           {/* Pass submittedData as a prop to SubmittedData */}
//           <Route path="/submitted" element={<SubmittedData submittedData={submittedData} />} />
//         </Routes>
//       </div>
//       {/* <Footer /> */}
//     </Router>
//   );
// }

// export default App;



import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactForm from './pages/ContactForm';
import SubmittedData from './pages/SubmitedData';
import Header from './components/Header';
import Footer from './pages/Footer';
// import Home from './pages/Home';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import './App.css';
import HomeMain from './pages/HomeMain';
import About from './pages/About';
import Contact from './pages/Contact';
import WashingMachineRepair from './pages/services/WashingMachineRepair';
import MicrowaveRepair from './pages/services/MicrowaveRepair';
import TelevisionRepair from './pages/services/TelevisionRepair';
import GeyserRepair from './pages/services/GeyeserRepair';

function App() {
  const [submittedData, setSubmittedData] = useState([]);

  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/about" element={<About />} />
          <Route path="/Washing-Machine" element={<WashingMachineRepair/>} />
          <Route path="/Microwave" element={<MicrowaveRepair/>} />
          <Route path="/Television" element={<TelevisionRepair/>} />
         <Route path="/Geyser" element={<GeyserRepair/>} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/contact" element={<ContactForm setSubmittedData={setSubmittedData} />} />
          <Route path="/submitted" element={<SubmittedData submittedData={submittedData} />} /> */}
        </Routes>
        <Footer/>
      </div>

      {/* Floating Round Icon Buttons */}
      <div className="floating-icons">
        <a href="tel:+9908305008" className="icon-button call" aria-label="Call">
          <FaPhoneAlt />
        </a>
        <a href="https://wa.me/9908305008" target="_blank" rel="noopener noreferrer" className="icon-button whatsapp" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
      </div>
    </Router>
  );
}

export default App;
