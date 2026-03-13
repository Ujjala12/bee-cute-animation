import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, TrendingUp, TrendingDown } from 'lucide-react';

const BalanceCard = () => {
  return (
    <div className="glass-card p-0 h-full flex flex-col overflow-hidden relative group rounded-[2.5rem] border-slate-200 dark:border-white/10">
      {/* Dynamic Background Pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-bee-yellow/10 rounded-full blur-[80px] -mr-32 -mt-32 group-hover:bg-bee-yellow/20 transition-all duration-700" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/5 rounded-full blur-[60px] -ml-24 -mb-24" />
      
      <div className="p-8 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <motion.div 
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="w-12 h-12 rounded-2xl bg-gradient-to-br from-bee-yellow to-amber-500 flex items-center justify-center shadow-lg shadow-bee-yellow/20"
            >
              <Wallet className="w-6 h-6 text-black" />
            </motion.div>
            <div>
              <span className="text-xs font-black text-slate-400 dark:text-white/30 uppercase tracking-[0.2em]">Total Balance</span>
              <div className="flex items-center gap-2 text-bee-green text-xs font-bold mt-0.5">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+8.4% <span className="text-slate-400 font-medium">this month</span></span>
              </div>
            </div>
          </div>
          
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-black bg-slate-200 dark:bg-white/10 flex items-center justify-center text-[10px] font-bold">
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter leading-none mb-4">
            ₹1,24,500<span className="text-bee-yellow text-2xl ml-1">.00</span>
          </h2>
          <div className="flex gap-2">
            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-[10px] font-black text-slate-500 dark:text-white/40 uppercase tracking-widest border border-slate-200 dark:border-white/5">Primary Account</span>
            <span className="px-3 py-1 rounded-full bg-bee-yellow/10 text-[10px] font-black text-bee-yellow uppercase tracking-widest border border-bee-yellow/20">Active Now</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/50 dark:bg-white/2 backdrop-blur-md p-5 rounded-3xl border border-white dark:border-white/5 shadow-sm group/card"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <div className="text-[10px] text-slate-400 dark:text-white/30 uppercase font-black tracking-widest">Target</div>
            </div>
            <div className="text-2xl font-black text-slate-900 dark:text-white group-hover/card:text-blue-500 transition-colors">₹45,000</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/50 dark:bg-white/2 backdrop-blur-md p-5 rounded-3xl border border-white dark:border-white/5 shadow-sm group/card"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-bee-yellow animate-pulse" />
              <div className="text-[10px] text-slate-400 dark:text-white/30 uppercase font-black tracking-widest">Left</div>
            </div>
            <div className="text-2xl font-black text-slate-900 dark:text-white group-hover/card:text-bee-yellow transition-colors">₹12,450</div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Progress Section */}
      <div className="mt-auto bg-slate-900 dark:bg-white/[0.03] p-8 text-white relative overflow-hidden">
        <div className="flex justify-between items-end mb-4 relative z-10">
          <div>
            <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] mb-1">Budget Velocity</div>
            <div className="text-lg font-bold">Safe Zone <span className="text-bee-yellow text-sm font-medium opacity-60 ml-1">72% Consumed</span></div>
          </div>
          <div className="text-right">
             <div className="text-xs font-bold text-bee-green flex items-center gap-1">
                <TrendingDown className="w-3 h-3" />
                -12% Expenses
             </div>
          </div>
        </div>
        
        <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden relative z-10 border border-white/5">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "72%" }}
            transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
            className="h-full bg-gradient-to-r from-bee-yellow to-amber-500 rounded-full relative"
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse" />
          </motion.div>
        </div>
        
        {/* Subtle decorative element */}
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-bee-yellow/10 to-transparent skew-x-12 translate-x-16" />
      </div>
    </div>
  );
};

export default BalanceCard;
