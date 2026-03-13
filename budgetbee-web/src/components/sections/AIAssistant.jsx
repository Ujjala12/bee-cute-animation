import React from 'react';
import { motion } from 'framer-motion';
import { Bot, User } from 'lucide-react';

const AIAssistant = () => {
  return (
    <section id="ai-assistant" className="py-24 relative overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      <div className="absolute top-1/2 -left-1/4 w-96 h-96 bg-blue-100 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <Bot className="w-4 h-4" />
            AI Chatbot Included
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white transition-colors duration-500">Ask Questions, <br/><span className="text-blue-600 dark:text-blue-400">Get Intelligence.</span></h2>
          <p className="text-lg text-slate-600 dark:text-white/60 mb-8 leading-relaxed transition-colors duration-500">
            Stop guessing your financial status. Our built-in AI assistant analyzes your spending patterns, predicts future risk, and gives you direct answers to your money questions.
          </p>
          <ul className="space-y-4">
            {[
              "\"How much did I spend on food this month?\"",
              "\"Will I run out of money before the 30th?\"",
              "\"What's my biggest expense category?\""
            ].map((q, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-white/80 transition-colors duration-500">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
                <span className="italic">"{q}"</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-blue-200 dark:bg-blue-500/20 rounded-3xl blur-2xl transform rotate-3" />
          
          <div className="relative glass-card bg-white/80 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl transition-colors duration-500">
            {/* Mock Chat Header */}
            <div className="px-6 py-4 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 flex items-center gap-4 transition-colors duration-500">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white transition-colors duration-500">BudgetBee AI</h4>
                <div className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> Online
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-6 space-y-6">
              {/* User Message */}
              <div className="flex gap-4 items-end justify-end">
                <div className="bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-white px-4 py-3 rounded-2xl rounded-tr-sm max-w-[80%] text-sm transition-colors duration-500">
                  Will I run out of money this month?
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-white/20 flex items-center justify-center shrink-0 transition-colors duration-500">
                  <User className="w-4 h-4 text-slate-600 dark:text-white/70" />
                </div>
              </div>

              {/* Bot Message with Typing */}
              <div className="flex gap-4 items-end">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center shrink-0 transition-colors duration-500">
                  <Bot className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-900 dark:text-blue-50 px-4 py-3 rounded-2xl rounded-tl-sm max-w-[80%] text-sm leading-relaxed relative overflow-hidden group transition-colors duration-500">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "linear" }}
                    className="absolute inset-0 bg-slate-200/80 dark:bg-black/50 origin-right transition-colors duration-500"
                    style={{ right: 0, left: 'auto' }}
                  />
                  Your spending is safe for 12 more days based on current patterns. However, I recommend avoiding large purchases this weekend to guarantee a green month.
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AIAssistant;
