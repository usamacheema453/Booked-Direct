import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Main from './components/main/main';
import Work from './pages/work';
import Popular from './pages/Popular';
import Features from './pages/Features';
import Appointment from './pages/appointment';
import Client from './pages/Client';
import Pricing from './pages/Pricing';
import Trust from './pages/Trust';
import FAQ from './pages/FAQ';
import FinalCTA from './pages/FinalCTA';
import Footer from './components/footer/Footer';
import Feature from './pages/Feature';

const App=()=>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<><Navbar /><Main /><Work /><Popular /><Features /> <Pricing /> <Feature /><Client /><Trust /><FAQ /><FinalCTA /><Footer /></>} />
        <Route path="/services" element={<><Navbar /><Main /><Popular /><Footer /></>} />
        <Route path="/features" element={<><Navbar /><Features /><Trust /><Footer /></>} />
        <Route path="/pricing" element={<><Navbar /><Pricing /><FAQ /><Footer /></>} />
        <Route path="/appointment" element={<><Navbar /><Appointment /><FinalCTA /><Footer /></>} />
        <Route path="/how-it-works" element={<><Navbar /><Work /><FAQ /><Footer /></>} />
      </Routes>
    </Router>
  )
}

export default App;