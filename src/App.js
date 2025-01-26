import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactForm from './pages/ContactForm';
import Header from './components/Header';
import Footer from './pages/Footer';
// import { FaPhoneAlt } from 'react-icons/fa';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import './App.css';
import HomeMain from './pages/HomeMain';
import About from './pages/About';
import Contact from './pages/Contact';
import WashingMachineRepair from './pages/services/WashingMachineRepair';
import MicrowaveRepair from './pages/services/MicrowaveRepair';
import TelevisionRepair from './pages/services/TelevisionRepair';
import GeyserRepair from './pages/services/GeyeserRepair';
import NotFound from './pages/NotFound';
import FridgeRepair from './pages/services/FridgeRepair';
import AirConditioner from './pages/services/AirConditioner';
// import PopupModal from './components/PopupModal';
// import LoadingSpinner from './components/LoadingSpinner';
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop component
import Confirmation from './components/Confirmation';
// import AdminData from './components/AdminData';
import ReactPixel from 'react-facebook-pixel';
import TagManager from 'react-gtm-module'; // Import GTM module








function App() {
  const [showModal, setShowModal] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Facebook Pixel
    ReactPixel.init('1502258350628246', {
      autoConfig: true,
      debug: false,
    });
    ReactPixel.pageView(); // Track the initial page view
  }, []); // This useEffect runs only once on component mount

  useEffect(() => {
    // Initialize Google Tag Manager with the provided GTM ID
    TagManager.initialize({ gtmId: 'GTM-5FJRFR79' });  // Replace 'GTM-XXXXXXX' with your actual GTM ID
  }, []);

  useEffect(() => {
    const loadingTimer = setTimeout(() => setLoading(false), 2000); // Show spinner for 2 seconds
    return () => clearTimeout(loadingTimer);
  }, []);

  const closeModal = () => setShowModal(false);

  return (
    <Router>
    <ScrollToTop /> {/* Add ScrollToTop here */}
    {/* {loading && <LoadingSpinner />}
    {!loading && ( */}
      <>
        {/* {showModal && <PopupModal closeModal={closeModal} />} */}
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomeMain />} />
            <Route path="/about" element={<About />} />
            <Route path="/service/Washing-Machine/" element={<WashingMachineRepair />} />
            <Route path="/service/Microwave/" element={<MicrowaveRepair />} />
            <Route path="/service/Television/" element={<TelevisionRepair />} />
            <Route path="/service/Geyser/" element={<GeyserRepair />} />
            <Route path="/service/Refrigerator/" element={<FridgeRepair />} />
            <Route path="/service/AirConditioner/" element={<AirConditioner />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Home/booking-form/" element={<ContactForm />} />
       
              <Route path="/thank-you" element={<Confirmation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </>
    {/* )} */}

    {/* Floating Round Icon Buttons, only visible when not loading */}
    {/* {!loading && ( */}
      <div className="floating-icons">
        <a href="tel:9908305008" className="icon-button call" aria-label="Call">
          <FaPhoneAlt />
        </a>
        // <a href="https://wa.me/919989183030" target="_blank" rel="noopener noreferrer" className="icon-button whatsapp" aria-label="WhatsApp">
        //   <FaWhatsapp />
        // </a>
      </div>
    {/* )} */}
  </Router>
  )
}

export default App
