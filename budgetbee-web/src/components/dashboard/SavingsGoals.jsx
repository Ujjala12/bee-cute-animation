import React from 'react';
import { motion } from 'framer-motion';
import { Target, Home, Car, Plane } from 'lucide-react';

const SavingsGoals = () => {
  const goals = [
    { title: 'New House', current: '\u20B98.5k', target: '\u20B920k', progress: 42.5, icon: <Home className="w-5 h-5 text-blue-500" />, color: 'bg-blue-500', shadow: 'shadow-blue-500/20' },
    { title: 'Dream Car', current: '\u20B94.2k', target: '\u20B912k', progress: 35, icon: <Car className="w-5 h-5 text-emerald-500" />, color: 'bg-emerald-500', shadow: 'shadow-emerald-500/20' },
    { title: 'Europe Trip', current: '\u20B91.8k', target: '\u20B93k', progress: 60, icon: <Plane className="w-5 h-5 text-amber-500" />, color: 'bg-amber-500', shadow: 'shadow-amber-500/20' },
  ];

  return (
    <div className="glass-card p-8 h-full flex flex-col group/goals relative overflow-hidden rounded-[2.5rem] border-slate-200 dark:border-white/10">
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div>
          <h3 className="text-xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <Target className="w-5 h-5 text-orange-400" />
            Milestones
          </h3>
          <p className="text-[10px] font-bold text-slate-400 dark:text-white/20 uppercase tracking-widest mt-1">Active Targets</p>
        </div>
        <button className="text-[10px] font-black text-bee-yellow uppercase tracking-widest hover:text-white transition-colors">Add Goal</button>
      </div>

      <div className="space-y-8 flex-grow relative z-10">
        {goals.map((goal, i) => (
          <div key={i} className="group/item">
            <div className="flex items-end justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 flex items-center justify-center shrink-0 shadow-sm group-hover/item:scale-110 group-hover/item:shadow-lg ${goal.shadow} transition-all duration-300`}>
                  {goal.icon}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white group-hover/item:text-bee-yellow transition-colors">{goal.title}</div>
                  <div className="text-[10px] font-black text-slate-400 dark:text-white/20 uppercase tracking-widest mt-0.5">{goal.current} <span className="text-slate-200 dark:text-white/5 mx-1">/</span> {goal.target}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-black text-slate-900 dark:text-white tracking-tighter leading-none">{goal.progress}%</div>
                <div className="text-[9px] font-bold text-slate-300 dark:text-white/10 uppercase mt-1">Achievement</div>
              </div>
            </div>
            
            <div className="h-3 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden relative border border-slate-50 dark:border-white/[0.02]">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${goal.progress}%` }}
                transition={{ duration: 1.5, delay: i * 0.1, ease: "circOut" }}
                className={`h-full ${goal.color} rounded-full relative overflow-hidden`}
              >
                 <div className="absolute inset-0 bg-white/20 animate-pulse" />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-8 py-4 bg-slate-50 dark:bg-white/2 border border-slate-200 dark:border-white/5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-bee-yellow hover:text-black hover:border-bee-yellow transition-all duration-300 shadow-sm">
        Review Financial Strategy
      </button>
    </div>
  );
};

export default SavingsGoals;
