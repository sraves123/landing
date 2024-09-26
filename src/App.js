import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MultiStepRegistrationForm from "./components/MultiStepRegistrationForm";
import Home from "./components/Home";
import LandingPage from "./components/Landing";
import Aboutus from "./components/Aboutus";
import Services from "./components/Services";
import LoginPage from "./components/LoginPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/form" element={<MultiStepRegistrationForm />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<Aboutus />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
    </Router>
  );
};

export default App;
