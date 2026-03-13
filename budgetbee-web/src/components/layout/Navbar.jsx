import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Bell, Settings, User } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const isAboutPage = currentHash === '#about' || currentHash === '' || !currentHash;

  const handleLogoClick = (e) => {
    e.preventDefault();
    const hash = window.location.hash.replace('#', '');
    if (hash === 'about' || !hash) {
      window.location.hash = '#features';
    } else {
      window.location.hash = '#about';
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isAboutPage
          ? 'bg-black text-white border-b border-white/10 shadow-2xl'
          : (scrolled 
              ? 'bg-white/80 dark:bg-black/70 backdrop-blur-lg border-b border-black/5 dark:border-white/10 shadow-lg' 
              : 'bg-transparent')
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a href="#about" onClick={handleLogoClick} className="flex items-center gap-3">
            <img 
              src="/ezgif-5b52668c24556430-jpg/ezgif-frame-001.jpg" 
              alt="BudgetBee Logo" 
              className="w-10 h-10 rounded-full object-cover shadow-sm border-2 border-amber-500 dark:border-bee-yellow"
            />
            <span className={`font-bold text-2xl tracking-tight ${isAboutPage ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
              Budget<span className="text-amber-500 dark:text-bee-yellow">Bee</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {['Dashboard', 'Expenses', 'Reports', 'Forecasts'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`transition-colors relative group ${
                  isAboutPage 
                    ? 'text-white/80 hover:text-white' 
                    : 'text-slate-600 dark:text-white/70 hover:text-amber-600 dark:hover:text-white'
                }`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-amber-500 dark:bg-bee-yellow transition-all group-hover:w-full ${isAboutPage ? 'w-0' : 'w-0'}`}></span>
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              isAboutPage 
                ? 'hover:bg-white/10 text-white/70' 
                : 'hover:bg-black/5 dark:hover:bg-white/10 text-slate-600 dark:text-white/70'
            }`}
            title="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <button 
            className={`p-2 rounded-full transition-colors ${
              isAboutPage 
                ? 'hover:bg-white/10 text-white/70' 
                : 'hover:bg-black/5 dark:hover:bg-white/10 text-slate-600 dark:text-white/70'
            }`} 
            title="Notifications"
          >
             <Bell className="w-5 h-5" />
          </button>

          <button 
            className={`p-2 rounded-full transition-colors ${
              isAboutPage 
                ? 'hover:bg-white/10 text-white/70' 
                : 'hover:bg-black/5 dark:hover:bg-white/10 text-slate-600 dark:text-white/70'
            }`} 
            title="Settings"
          >
             <Settings className="w-5 h-5" />
          </button>

          <div 
            className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-colors ml-2 ${
              isAboutPage 
                ? 'bg-white/10 hover:bg-white/20 text-white' 
                : 'bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-600 dark:text-white/70'
            }`} 
            title="Profile"
          >
             <User className="w-5 h-5" />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
