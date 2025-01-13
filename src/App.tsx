import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#FAF9F6]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;