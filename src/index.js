import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ServicesProducts from './components/ServiceProduct';
import OurWorks from './components/OurWorks';
import AboutUs from './components/AboutUs';
import Contacts from './components/Contacts';
import RegistrationForm from './components/RegistrationForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/service-product" element={<ServicesProducts />} />
                <Route path="/our-works" element={<OurWorks />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path='/registrationform' element={<RegistrationForm />} />
            </Routes>
        </Router>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
