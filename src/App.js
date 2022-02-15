import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const NavBar = lazy(() => import('./Components/NavBar'))
const Footer = lazy(() => import('./Components/Footer'))
const LandingPage = lazy(() => import('./pages/LandingPage'))
const ApplyJobCard = lazy(() => import('./pages/ApplyJobCard'))
const ApplyJobCard1 = lazy(() => import('./pages/ApplyJobCard1'))
const Contact = lazy(() => import('./pages/Contact'))
const About = lazy(() => import('./pages/About'))
const ApplyJobCard2 = lazy(() => import('./pages/ApplyJobCard2'))

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/applycard' element={<ApplyJobCard />} />
        <Route path='/applycard1' element={<ApplyJobCard1 />} />
        <Route path='/applycard2' element={<ApplyJobCard2 />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
