import React from 'react';
import { motion } from 'framer-motion';
import AIAssistant from './sections/AIAssistant';
import GamifiedProfile from './sections/GamifiedProfile';
import OfflineFirst from './sections/OfflineFirst';
import CTA from './sections/CTA';

const LandingPage = () => {
  return (
    <div className="w-full">
      {/* Features Landing Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-white dark:bg-black transition-colors duration-500">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-bee-yellow/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-slate-900 dark:text-white"
          >
            Smart <span className="text-bee-yellow">Budgeting.</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-slate-500 dark:text-white/40 mb-10 font-medium">
            Take control of your finances with the power of AI. 
            All your expenses, savings, and reports in one intelligent dashboard.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <button 
              onClick={() => window.location.hash = '#dashboard'}
              className="bg-bee-yellow text-black px-10 py-5 rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-bee-yellow/20"
             >
                Enter Dashboard
             </button>
             <button 
              onClick={() => window.location.hash = '#about'}
              className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-white/10 transition-all text-slate-600 dark:text-white/70"
             >
                Watch The Story
             </button>
          </div>
        </div>

        {/* Floating Mini Mascot */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0, -10, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-32 h-32 opacity-40 grayscale hover:grayscale-0 transition-all cursor-pointer"
          onClick={() => window.location.hash = '#about'}
        >
          <img src="/bee-asset.png" className="w-full h-full object-contain" />
        </motion.div>
      </section>

      <AIAssistant />
      <GamifiedProfile />
      <OfflineFirst />
      <CTA />
    </div>
  );
};

export default LandingPage;
