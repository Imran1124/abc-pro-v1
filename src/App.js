import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const NavBar = lazy(() => import('./Components/NavBar'))
const Footer = lazy(() => import('./Components/Footer'))
const LandingPage = lazy(() => import('./pages/LandingPage'))
const ApplyJobCard = lazy(() => import('./pages/ApplyJobCard'))
const Contact = lazy(() => import('./pages/Contact'))
const About = lazy(() => import('./pages/About'))

function App() {
  return (
    <>
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/applycard' element={<ApplyJobCard />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
