import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Coffee, Car, Home, MoreVertical, Edit2, ExternalLink } from 'lucide-react';

const RecentTransactions = () => {
  const transactions = [
    { name: 'Amazon Shopping', category: 'Shopping', date: 'Today, 2:30 PM', amount: '-\u20B91,250', icon: <ShoppingBag className="w-5 h-5" />, color: 'bg-blue-500', lightColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400' },
    { name: 'Starbucks Coffee', category: 'Food & Drink', date: 'Yesterday, 10:15 AM', amount: '-\u20B9450', icon: <Coffee className="w-5 h-5" />, color: 'bg-amber-500', lightColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400' },
    { name: 'Uber Ride', category: 'Transport', date: '11 Mar, 8:45 PM', amount: '-\u20B9320', icon: <Car className="w-5 h-5" />, color: 'bg-emerald-500', lightColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' },
    { name: 'Monthly Rent', category: 'Housing', date: '5 Mar, 11:00 AM', amount: '-\u20B922,000', icon: <Home className="w-5 h-5" />, color: 'bg-violet-500', lightColor: 'bg-violet-500/10 text-violet-600 dark:text-violet-400' },
  ];

  return (
    <div className="glass-card p-8 h-full flex flex-col group/container rounded-[2.5rem] border-slate-200 dark:border-white/10 relative overflow-hidden">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">Recent Activity</h3>
          <p className="text-xs font-medium text-slate-400 dark:text-white/30 uppercase tracking-widest mt-1">Transaction History</p>
        </div>
        <button className="bg-slate-100 dark:bg-white/5 hover:bg-bee-yellow hover:text-black p-2 rounded-xl transition-all duration-300">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-3 flex-grow overflow-y-auto pr-2 custom-scrollbar">
        {transactions.map((tx, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-white/2 hover:bg-slate-50 dark:hover:bg-white/5 border border-slate-100 dark:border-white/5 hover:border-bee-yellow/20 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-none transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-2xl ${tx.lightColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                {tx.icon}
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-bee-yellow transition-colors">{tx.name}</div>
                <div className="text-[10px] font-semibold text-slate-400 dark:text-white/20 uppercase tracking-widest mt-0.5">{tx.date}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm font-black text-slate-900 dark:text-white">{tx.amount}</div>
                <div className="text-[10px] font-bold text-slate-300 dark:text-white/10 uppercase">{tx.category}</div>
              </div>
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                 <button className="p-2 rounded-xl hover:bg-white dark:hover:bg-white/10 text-slate-400 shadow-sm transition-all">
                    <Edit2 className="w-4 h-4" />
                 </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <button className="mt-6 w-full py-4 rounded-2xl border-2 border-dashed border-slate-200 dark:border-white/5 text-slate-400 dark:text-white/20 text-sm font-bold hover:border-bee-yellow/40 hover:text-bee-yellow transition-all duration-300">
        View All Transactions
      </button>
    </div>
  );
};

export default RecentTransactions;
