import React from 'react';
import { motion } from 'framer-motion';
import BalanceCard from './BalanceCard';
import BillsCategory from './BillsCategory';
import SpendingChart from './SpendingChart';
import SavingsGoals from './SavingsGoals';
import RecentTransactions from './RecentTransactions';
import AssistantWidget from './AssistantWidget';

const Dashboard = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-[#F8F9FA] dark:bg-[#050505] transition-colors duration-500">
      <div className="container mx-auto px-6">
        
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 relative">
          <div>
            <div className="text-xs font-bold text-bee-yellow uppercase tracking-[0.3em] mb-3">Overview</div>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white">
              Financial <span className="text-transparent bg-clip-text bg-gradient-to-r from-bee-yellow to-amber-500">Pulse.</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
             <button className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-6 py-3 rounded-2xl text-sm font-bold hover:bg-slate-50 dark:hover:bg-white/10 transition-all">
                Download PDF
             </button>
             <button className="bg-bee-yellow text-black px-6 py-3 rounded-2xl text-sm font-black hover:scale-105 transition-all shadow-lg shadow-bee-yellow/20">
                + New Entry
             </button>
          </div>
        </div>

        {/* 12-Column Grid Layout */}
        <div className="grid grid-cols-12 gap-8 items-stretch">
          
          {/* ROW 1 */}
          <div className="col-span-12 lg:col-span-8 flex flex-col">
             <BalanceCard />
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col">
             <BillsCategory />
          </div>

          {/* ROW 2 */}
          <div className="col-span-12 lg:col-span-8 flex flex-col">
             <SpendingChart />
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col">
             <SavingsGoals />
          </div>

          {/* ROW 3 */}
          <div className="col-span-12 lg:col-span-8 flex flex-col">
             <RecentTransactions />
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col">
             <AssistantWidget />
          </div>

        </div>

        {/* Footer info/Access to other modules */}
        <div className="mt-16 pt-12 border-t border-slate-200 dark:border-white/5 grid grid-cols-2 md:grid-cols-5 gap-8">
           {[
             { title: 'Expense Entry', count: '12 new' },
             { title: 'Receipt Scanning', count: 'Ready' },
             { title: 'Group Splitting', count: '3 active' },
             { title: 'Reports Page', count: 'Weekly Ready' },
             { title: 'Forecast Page', count: '7d trend' }
           ].map((item, i) => (
             <div key={i} className="cursor-pointer group">
                <div className="text-[10px] font-bold text-slate-400 dark:text-white/20 uppercase tracking-[0.2em] mb-2 group-hover:text-bee-yellow transition-colors">{item.title}</div>
                <div className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  {item.count}
                  <div className="w-1.5 h-1.5 rounded-full bg-bee-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
             </div>
           ))}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
