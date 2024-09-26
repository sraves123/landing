import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import test1 from "../images/test1.jpg";
// import MultiStepRegistrationForm from './MultiStepRegistrationForm';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LoginPage from './LoginPage';


const LandingPage = () => {
    const navigate = useNavigate();
    const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleButtonClick = () => {
    //give access to authorised users
    navigate('/form');
  };
  const handleloginclick = () => {
    setIsLoginVisible(true); // Show the Login component
  };
  const handleloginclose = () => {
    // navigate('/login');
    setIsLoginVisible(false);
  };

  return (
    <div
      className="flex flex-col min-h-screen  text-white"
      style={{ backgroundImage: `url(${test1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Navigation Bar */}
      <nav className="absolute top-6 right-40 flex space-x-7">
        {/* <a href="/home" className="text-white hover:text-gray-400 transition duration-300">Home</a>
        <a href="/about" className="text-white hover:text-gray-400 transition duration-300">About Us</a>
        <a href="/services" className="text-white hover:text-gray-400 transition duration-300">Services</a> */}
        <button className="bg-white text-blue-600 py-2 px-4 rounded-full hover:bg-gray-400 transition duration-300" onClick={handleloginclick}>
          Login
        </button>
        {isLoginVisible && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <span onClick={handleloginclose} style={closeButtonStyle}>&times;</span>
            <LoginPage />
          </div>
        </div>
      )}
      
      </nav>
      {/* <div className="absolute bottom-15 top-24 right-0  w-1/3 md:w-1/4 p-10">
       <div className="animate-zoom">
          <img 
            src={lab1} 
            alt="Descriptive Alt Text" 
            className="w-64 h-64 rounded-full shadow-2xl" 
          />
        </div></div> */}
      {/* <div className="absolute bottom-15 top-24 right-6  w-1/3 md:w-1/4 p-20">
       <div className="animate-zoom">
          <img 
            src={bglanding5} 
            alt="Descriptive Alt Text" 
            className="w-64 h-64 rounded-full shadow-2xl" 
          />
        </div></div> */}
        {/* <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white">
        Your Content
       </div>  */}
      {/* <div className="absolute bottom-8 top-22 right-20 rounded-full w-1/2 md:w-1/4 p-20" >
        <div className="animate-zoom">
          <img 
            src={lab} 
            alt="Descriptive Alt Text" 
            className="w-64 h-64 rounded-full shadow-2xl" 
          />
        </div>
      </div> */}

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-10 absolute top-10 ">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-purple-400 to-white bg-clip-text text-transparent animate-slide-in-left">The New Standard For</h1>
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#f7fdff] via-pink-500 to-purple-500 bg-clip-text text-transparent animate-slide-in-right">
          Quick-Serve
        </h1>
        <p className="text-lg mb-7 text-white">Your one-stop solution for fast and reliable services.</p>
        <p className="text-lg mb-5 text-white left-30"><span className="text-3xl font-bold mb-10">O</span>ur lab surveys are integral to enhancing the quality, efficiency, and effectiveness of laboratory operations across various domains.
          They not only support scientific inquiry but also contribute significantly to improving patient outcomes and ensuring compliance with regulations.</p>
        <button className="bg-white text-blue-600 py-2 px-4 rounded-full hover:bg-gray-400 transition duration-300" onClick={handleButtonClick}>
          Start Survey
        </button>
      </div>

      {/* Image Section */}
      {/* <div className="flex flex-col items-right justify-center w-full md:w-1/2 p-4 bg-slate-400">
        <div className="animate-zoom">
          <img 
            src={bglanding5} 
            alt="Descriptive Alt Text" 
            className="w-64 h-64 rounded-3xl shadow-3xl" 
          />
        </div>
      </div> */}

      {/* Get in Touch Section */}
      <div className="flex flex-col items-left justify-left mt-auto py-8 p-6 ">
        <h2 className="text-l font-bold mb-3">Get in Touch</h2>
        <div className="flex space-x-3">
          <a href="mailto:info@example.com" className="text-white hover:text-gray-400 transition duration-300">
            <FontAwesomeIcon icon={faEnvelope} size="x" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition duration-300">
            <FontAwesomeIcon icon={faFacebook} size="x" />
          </a>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition duration-300">
            <FontAwesomeIcon icon={faGlobe} size="x" />
          </a>
        </div>
      </div>
    </div>
  );
};
const modalStyle = {
    position: 'fixed',
    top: 20,
    left: 0,
    right: 0,
    bottom: 0,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'right',
  };
  
  const modalContentStyle = {
    // backgroundColor: 'white',
    // padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    width: '400px',
  };
  const closeButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '15px',
  fontSize: '24px',
  cursor: 'pointer',
  hover:'bg-pink-500',
  rounded:'full', 
};

export default LandingPage;
