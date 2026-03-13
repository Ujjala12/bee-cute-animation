import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, CalendarHeart, ShieldCheck, Camera, Users, Coins } from 'lucide-react';

const features = [
  {
    title: 'Less Manual Work',
    description: 'Scan receipts, detect UPI messages, or add expenses instantly without typing.',
    icon: <Camera className="w-6 h-6 text-bee-yellow" />,
    color: 'from-bee-yellow/20',
  },
  {
    title: 'Future Risk Prediction',
    description: 'BudgetBee predicts risky days before your money runs out using AI intelligence.',
    icon: <Zap className="w-6 h-6 text-bee-red" />,
    color: 'from-bee-red/20',
  },
  {
    title: 'Color Spending Calendar',
    description: 'Green days represent safe spending while red days warn about risky spending.',
    icon: <CalendarHeart className="w-6 h-6 text-bee-green" />,
    color: 'from-bee-green/20',
  },
  {
    title: 'AI Money Assistant',
    description: 'An AI chatbot that answers financial questions and provides insights using your spending data.',
    icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
    color: 'from-blue-400/20',
  },
  {
    title: 'Cash + UPI Tracking',
    description: 'Track both physical cash and digital payments together seamlessly.',
    icon: <Coins className="w-6 h-6 text-purple-400" />,
    color: 'from-purple-400/20',
  },
  {
    title: 'Group Expense Integration',
    description: 'Group debts automatically affect your personal budget to keep you in control.',
    icon: <Users className="w-6 h-6 text-orange-400" />,
    color: 'from-orange-400/20',
  },
];

const Features = () => {
  const containerRef = useRef(null);
  
  return (
    <section id="features" className="py-24 relative bg-slate-50 dark:bg-black transition-colors duration-500" ref={containerRef}>
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white transition-colors duration-500">Everything You Need to <span className="text-amber-500 dark:text-bee-yellow">Master Wealth</span></h2>
          <p className="text-xl text-slate-600 dark:text-white/60 transition-colors duration-500">
            A comprehensive suite of tools designed to remove financial stress and bring clarity to your spending habits.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-8 group relative overflow-hidden bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:shadow-xl dark:hover:shadow-none transition-all duration-300"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} to-transparent opacity-0 group-hover:opacity-10 dark:group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-6 transition-colors duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white transition-colors duration-500">{feature.title}</h3>
                <p className="text-slate-600 dark:text-white/60 leading-relaxed max-w-[280px] transition-colors duration-500">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
