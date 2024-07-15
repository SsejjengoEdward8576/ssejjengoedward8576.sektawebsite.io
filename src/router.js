import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ServicesProducts from './components/ServiceProduct';
import OurWorks from './components/OurWorks';
import AboutUs from './components/AboutUs';
import Contacts from './components/Contacts';
import RegistrationForm from './components/RegistrationForm';
import SearchResults from './components/SearchResults';

const AppRouter = () => {
  const items = [
    { id: 1, name: 'Item 1', description: 'Description 1' },
    { id: 2, name: 'Item 2', description: 'Description 2' },
    { id: 3, name: 'Item 3', description: 'Description 3' },
    // more items...
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service-product" element={<ServicesProducts />} />
        <Route path="/our-works" element={<OurWorks />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/registrationform" element={<RegistrationForm />} />
        <Route path="/search" element={<SearchResults items={items} />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
