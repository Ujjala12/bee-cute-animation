import React from 'react';
import { motion } from 'framer-motion';

const SpendingChart = () => {
  return (
    <div className="glass-card p-8 h-full relative overflow-hidden group/chart rounded-[2.5rem] border-slate-200 dark:border-white/10">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] -ml-32 -mt-32" />
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 relative z-10">
        <div>
          <h3 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">Cash Velocity</h3>
          <p className="text-[10px] font-bold text-slate-400 dark:text-white/20 uppercase tracking-[0.2em] mt-1">Flow vs Previous Window</p>
        </div>
        <div className="flex items-center gap-6 bg-slate-50 dark:bg-white/5 px-5 py-2.5 rounded-2xl border border-slate-100 dark:border-white/5 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-bee-yellow shadow-sm shadow-bee-yellow/20" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-white/50">Current</span>
          </div>
          <div className="w-px h-3 bg-slate-200 dark:bg-white/10" />
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/20" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-white/30">Previous</span>
          </div>
        </div>
      </div>

      <div className="relative h-64 w-full px-2 pl-12 group-hover/chart:translate-y-[-5px] transition-transform duration-500">
        {/* Y-axis (Value Indicators) */}
        <div className="absolute left-0 inset-y-0 flex flex-col justify-between py-1 text-[9px] font-black text-slate-300 dark:text-white/10 uppercase tracking-tighter">
           <span>₹40k</span>
           <span>₹30k</span>
           <span>₹20k</span>
           <span>₹10k</span>
           <span>₹0</span>
        </div>

        {/* SVG Area Chart */}
        <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Previous Month Line */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            d="M 0 80 Q 25 90, 50 60 T 100 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="text-slate-200 dark:text-white/10"
          />

          {/* Gradient Area Fill */}
          <motion.path
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.5 }}
             d="M 0 90 L 10 70 L 20 85 L 30 40 L 40 60 L 50 20 L 60 45 L 70 30 L 80 50 L 90 20 L 100 10 L 100 100 L 0 100 Z"
             fill="url(#chartGradient)"
          />

          {/* This Month Performance Line */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "circOut" }}
            d="M 0 90 L 10 70 L 20 85 L 30 40 L 40 60 L 50 20 L 60 45 L 70 30 L 80 50 L 90 20 L 100 10"
            fill="none"
            stroke="#FBBF24"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-[0_0_15px_rgba(251,191,36,0.2)]"
          />
        </svg>

        {/* X-axis Labels */}
        <div className="absolute left-10 right-2 bottom-[-32px] flex justify-between">
          {['Week 1', 'Week 2', 'Week 3', 'Week 4'].map((label, i) => (
            <span key={i} className="text-[10px] font-black text-slate-400 dark:text-white/20 uppercase tracking-widest hover:text-bee-yellow transition-colors cursor-default">
              {label}
            </span>
          ))}
        </div>
        
        {/* Premium Grid lines */}
        <div className="absolute left-10 right-2 inset-y-0 pointer-events-none flex flex-col justify-between py-1">
          {[1, 2, 3, 4, 5].map(line => (
             <div key={line} className="w-full h-px bg-gradient-to-r from-transparent via-slate-100 dark:via-white/[0.03] to-transparent" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpendingChart;
