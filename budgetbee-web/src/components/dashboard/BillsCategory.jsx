import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Apple, Zap, Car, MoreVertical } from 'lucide-react';

const BillsCategory = () => {
  return (
    <div className="glass-card p-8 h-full flex flex-col relative overflow-hidden group/bills rounded-[2.5rem] border-slate-200 dark:border-white/10">
      <div className="flex flex-col gap-10 h-full relative z-10">
        {/* Upcoming Bills */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-bee-yellow" />
                Scheduled
              </h3>
              <p className="text-[10px] font-bold text-slate-400 dark:text-white/20 uppercase tracking-widest mt-1">Next 14 Days</p>
            </div>
            <motion.div 
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center cursor-pointer"
            >
              <MoreVertical className="w-5 h-5 text-slate-400" />
            </motion.div>
          </div>

          <div className="space-y-3">
            {[
              { title: 'Electricity', date: 'Mar 15 (3d left)', amount: '\u20B92,450', icon: <Zap className="w-5 h-5" />, color: 'bg-amber-500/10 text-amber-600', priority: 'High' },
              { title: 'Internet', date: 'Mar 17 (5d left)', amount: '\u20B9999', icon: <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" />, color: 'bg-blue-500/10 text-blue-600', priority: 'Standard' },
            ].map((bill, i) => (
              <motion.div 
                key={i} 
                whileHover={{ x: 5 }}
                className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-white/2 border border-slate-100 dark:border-white/5 hover:border-bee-yellow/20 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${bill.color} flex items-center justify-center`}>
                    {bill.icon}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">{bill.title}</div>
                    <div className="text-[10px] font-semibold text-slate-400 dark:text-white/30 truncate">{bill.date}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-black text-slate-900 dark:text-white">{bill.amount}</div>
                  <div className={`text-[9px] font-black uppercase tracking-tighter ${bill.priority === 'High' ? 'text-amber-500' : 'text-slate-300'}`}>{bill.priority}</div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-6 py-4 bg-slate-900 dark:bg-white text-white dark:text-black rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl shadow-black/10 transition-all"
          >
            Pay All Dues
          </motion.button>
        </div>

        {/* Category Breakdown */}
        <div className="flex flex-col mt-auto pt-6 border-t border-slate-100 dark:border-white/5">
          <div className="flex flex-col mb-6">
            <h3 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">Breakdown</h3>
            <p className="text-[10px] font-bold text-slate-400 dark:text-white/20 uppercase tracking-widest mt-1">By Expenditure</p>
          </div>

          <div className="flex items-center gap-8 px-4">
            <div className="relative w-32 h-32 shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="15.915" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-slate-100 dark:text-white/5" />
                <motion.circle 
                  initial={{ strokeDasharray: "0 100" }}
                  animate={{ strokeDasharray: "45 55" }}
                  transition={{ duration: 1.5, ease: "circOut" }}
                  cx="18" cy="18" r="15.915" fill="none" stroke="#FFD700" strokeWidth="3.5" strokeDashoffset="25" strokeLinecap="round" 
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                 <div className="text-[10px] font-black text-slate-400 dark:text-white/20 uppercase tracking-[0.2em] mb-0.5">Spent</div>
                 <div className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">{"\u20B9"}32K</div>
              </div>
            </div>

            <div className="flex-grow space-y-2">
              {[
                { label: 'Food', color: 'bg-bee-yellow', val: '45%' },
                { label: 'Transport', color: 'bg-bee-green', val: '30%' },
                { label: 'Misc', color: 'bg-blue-500', val: '25%' },
              ].map((cat, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${cat.color}`} />
                    <span className="text-[9px] font-black text-slate-400 dark:text-white/30 uppercase tracking-widest">{cat.label}</span>
                  </div>
                  <span className="text-[10px] font-black text-slate-900 dark:text-white">{cat.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-bee-yellow/5 rounded-full blur-[80px]" />
    </div>
  );
};

export default BillsCategory;
