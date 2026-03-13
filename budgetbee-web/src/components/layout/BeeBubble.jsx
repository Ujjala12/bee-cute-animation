import React from 'react';
import { motion } from 'framer-motion';

const BeeBubble = () => {
  const handleClick = () => {
    window.location.hash = '#landing';
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        y: [0, -15, 0]
      }}
      transition={{ 
        scale: { duration: 0.5 },
        opacity: { duration: 0.5 },
        y: { 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }
      }}
      whileHover={{ scale: 1.1, cursor: 'pointer' }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-[100] w-20 h-20 group"
    >
      <div className="absolute inset-0 bg-bee-yellow rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity animate-pulse" />
      <div className="relative w-full h-full rounded-full border-4 border-bee-yellow bg-white dark:bg-black overflow-hidden shadow-2xl flex items-center justify-center p-1">
        <img 
          src="/ezgif-5b52668c24556430-jpg/ezgif-frame-001.jpg" 
          alt="Bee Portal" 
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="bg-black/80 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest py-2 px-4 rounded-xl border border-white/10 whitespace-nowrap">
          Go To About
        </div>
      </div>
    </motion.div>
  );
};

export default BeeBubble;
