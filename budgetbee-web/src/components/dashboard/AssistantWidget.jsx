import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles, PieChart, FileText } from 'lucide-react';

const AssistantWidget = () => {
  return (
    <div className="glass-card p-8 h-full bg-gradient-to-br from-bee-yellow/10 via-transparent to-transparent relative overflow-hidden group/assistant rounded-[2.5rem] border-slate-200 dark:border-white/10">
      {/* Dynamic Glows */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-bee-yellow/15 rounded-full blur-[80px] -mr-24 -mt-24 group-hover/assistant:bg-bee-yellow/25 transition-all duration-700" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[60px] -ml-16 -mb-16" />
      
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center shadow-2xl shadow-black/5 group-hover/assistant:scale-110 transition-transform duration-500">
            <Bot className="w-8 h-8 text-bee-yellow" />
          </div>
          <div>
            <h3 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">Assistant</h3>
            <div className="text-[10px] text-bee-green font-black flex items-center gap-1.5 uppercase tracking-widest mt-1">
              <span className="w-2 h-2 rounded-full bg-bee-green animate-ping" />
              Intelligence Active
            </div>
          </div>
        </div>

        <div className="bg-white/40 dark:bg-white/2 backdrop-blur-md p-6 rounded-3xl border border-white dark:border-white/5 shadow-sm mb-10 group-hover/assistant:translate-y-[-5px] transition-transform duration-500">
          <p className="text-sm font-bold text-slate-700 dark:text-white/70 leading-relaxed italic">
            "Your electricity bill is <span className="text-amber-500">15% higher</span> than last month. Analyze the peak hours now?"
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-auto">
          {[
            { label: 'Analyze Expenses', icon: <PieChart className="w-5 h-5 text-blue-500" />, color: 'bg-blue-500/10' },
            { label: 'Generate Weekly Report', icon: <FileText className="w-5 h-5 text-purple-500" />, color: 'bg-purple-500/10' }
          ].map((action, i) => (
            <motion.button 
              key={i}
              whileHover={{ x: 8 }}
              className="flex items-center justify-between p-5 rounded-2xl bg-white/60 dark:bg-white/2 border border-slate-100 dark:border-white/5 hover:border-bee-yellow/40 hover:bg-white dark:hover:bg-white/5 transition-all group/btn shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl ${action.color} flex items-center justify-center group-hover/btn:scale-110 transition-transform`}>
                  {action.icon}
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-slate-600 dark:text-white/50">{action.label}</span>
              </div>
              <Sparkles className="w-4 h-4 text-bee-yellow opacity-0 group-hover/btn:opacity-100 transition-opacity" />
            </motion.button>
          ))}
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-100 dark:border-white/5">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-bee-yellow text-black p-5 rounded-2xl flex items-center justify-between cursor-pointer shadow-xl shadow-bee-yellow/20 relative overflow-hidden group/input"
          >
             <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/input:translate-x-[100%] transition-transform duration-1000" />
             <span className="text-xs font-black uppercase tracking-[0.2em] relative z-10">Ask AI Companion...</span>
             <Bot className="w-6 h-6 animate-bounce relative z-10" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AssistantWidget;
