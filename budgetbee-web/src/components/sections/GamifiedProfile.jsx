import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Target, Flame } from 'lucide-react';

const badges = [
  { icon: <Star className="w-6 h-6 text-yellow-500" />, title: "Smart Saver", text: "Saved 20% of income" },
  { icon: <Target className="w-6 h-6 text-red-400" />, title: "Debt Destroyer", text: "Cleared 1st loan" },
  { icon: <Trophy className="w-6 h-6 text-purple-400" />, title: "Budget Master", text: "30 days under budget" },
];

const GamifiedProfile = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-600 dark:text-purple-400 text-sm font-medium mb-6 transition-colors duration-500">
            <Trophy className="w-4 h-4" />
            Financial Growth Made Fun
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white transition-colors duration-500">Play Your Way <br/>to <span className="text-purple-600 dark:text-purple-400">Financial Freedom.</span></h2>
          <p className="text-lg text-slate-600 dark:text-white/60 mb-8 leading-relaxed transition-colors duration-500">
            Budgeting doesn't have to be boring. Track your saving streaks, earn badges for good habits, and compete with friends or yourself.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 p-8 rounded-[2.5rem] relative overflow-hidden shadow-2xl transition-colors duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 dark:bg-purple-500/20 blur-[100px] transition-colors duration-500" />
            
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 dark:from-bee-yellow dark:to-orange-400 p-1">
                  <div className="w-full h-full bg-slate-100 dark:bg-black rounded-full flex items-center justify-center overflow-hidden transition-colors duration-500">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=transparent" alt="Avatar" className="w-14 h-14" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-slate-900 dark:text-white transition-colors duration-500">Alex's Profile</h3>
                  <div className="text-sm text-slate-500 dark:text-white/50 transition-colors duration-500">Level 12 Financier</div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 text-orange-600 dark:text-orange-400 rounded-full font-bold transition-colors duration-500">
                <Flame className="w-4 h-4" /> 14 Day Streak
              </div>
            </div>

            <div className="mb-6 relative z-10">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-500 dark:text-white/60 transition-colors duration-500">Level Progress</span>
                <span className="font-medium text-slate-900 dark:text-white transition-colors duration-500">8,400 / 10,000 XP</span>
              </div>
              <div className="h-3 w-full bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden transition-colors duration-500">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "84%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-purple-500 to-amber-400 dark:to-bee-yellow rounded-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10">
              {badges.map((badge, idx) => (
                <div key={idx} className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 flex flex-col items-center text-center hover:bg-slate-50 dark:hover:bg-white/10 transition-colors cursor-pointer shadow-sm dark:shadow-none">
                  <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-black/50 flex items-center justify-center mb-3 transition-colors duration-500">
                    {badge.icon}
                  </div>
                  <div className="font-bold text-sm mb-1 text-slate-900 dark:text-white transition-colors duration-500">{badge.title}</div>
                  <div className="text-xs text-slate-500 dark:text-white/40 transition-colors duration-500">{badge.text}</div>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default GamifiedProfile;
