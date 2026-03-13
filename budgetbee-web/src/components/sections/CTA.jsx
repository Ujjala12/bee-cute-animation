import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-white dark:from-bee-yellow/5 dark:to-transparent transition-colors duration-500" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-400/20 dark:bg-bee-yellow/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-slate-900 dark:text-white transition-colors duration-500">
            Your Money Deserves a <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 dark:from-bee-yellow dark:to-orange-400">
              Smarter System
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-white/60 mb-12 transition-colors duration-500">
            Join thousands of users controlling their financial future with BudgetBee's intelligent tools and offline-first architecture.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative">
            <button className="bg-amber-400 dark:bg-bee-yellow text-slate-900 dark:text-bee-black px-10 py-5 rounded-full text-xl font-bold hover:bg-amber-500 dark:hover:bg-yellow-400 hover:scale-105 transition-all shadow-[0_10px_30px_rgba(251,191,36,0.5)] dark:shadow-[0_0_30px_rgba(255,215,0,0.3)] z-10">
              Start Using BudgetBee
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
