import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import Footer from './components/layout/Footer';
import BeeBubble from './components/layout/BeeBubble';

function App() {
  const [currentPage, setCurrentPage] = useState('about');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'dashboard') {
        setCurrentPage('dashboard');
      } else if (hash === 'features') {
        setCurrentPage('features');
      } else if (hash === 'about' || !hash) {
        setCurrentPage('about');
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-bee-yellow selection:text-black">
      <Navbar />
      <main>
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'features' && <LandingPage />}
        {currentPage === 'dashboard' && <Dashboard />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
