import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MoneyBeeScrollAnimation from '../MoneyBeeScrollAnimation';
import { Zap, CalendarHeart, ShieldCheck, Camera, Users, Coins } from 'lucide-react';

const features = [
  {
    title: 'Less Manual Work',
    description: 'Scan receipts, detect UPI messages, or add expenses instantly without typing.',
    icon: <Camera className="w-6 h-6 text-amber-500" />,
    color: 'from-amber-500/10',
  },
  {
    title: 'Future Risk Prediction',
    description: 'BudgetBee predicts risky days before your money runs out using AI intelligence.',
    icon: <Zap className="w-6 h-6 text-red-500" />,
    color: 'from-red-500/10',
  },
  {
    title: 'Spending Calendar',
    description: 'Green days represent safe spending while red days warn about risky spending.',
    icon: <CalendarHeart className="w-6 h-6 text-green-500" />,
    color: 'from-green-500/10',
  },
  {
    title: 'AI Money Assistant',
    description: 'An AI chatbot that answers financial questions and provides insights.',
    icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
    color: 'from-blue-500/10',
  },
  {
    title: 'Cash + UPI Tracking',
    description: 'Track both physical cash and digital payments together seamlessly.',
    icon: <Coins className="w-6 h-6 text-purple-500" />,
    color: 'from-purple-500/10',
  },
  {
    title: 'Group Integration',
    description: 'Group debts automatically affect your personal budget to keep you in control.',
    icon: <Users className="w-6 h-6 text-orange-500" />,
    color: 'from-orange-500/10',
  },
];

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const aboutOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const aboutY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  
  const featuresOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);
  const featuresY = useTransform(scrollYProgress, [0.4, 0.7], [50, 0]);

  return (
    <section ref={containerRef} className="relative w-full bg-white transition-colors duration-500 overflow-hidden">
      
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-bee-yellow/20 rounded-full blur-[120px]" />
      </div>

      {/* About Content Overlay */}
      <motion.div 
        style={{ opacity: aboutOpacity, y: aboutY }}
        className="fixed inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-6 text-center"
      >
        <div className="max-w-4xl">
          <div className="text-amber-600 font-black uppercase tracking-[0.4em] mb-4 text-sm">About The Application</div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-6 tracking-tighter drop-shadow-sm">
            Meet <span className="text-amber-500">BudgetBee.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            Your intelligent 3D financial companion. We combine cutting-edge AI with beautiful scrollytelling to make managing wealth feel like an adventure.
          </p>
        </div>
      </motion.div>

      {/* Features Content Overlay */}
      <motion.div 
        style={{ opacity: featuresOpacity, y: featuresY }}
        className="fixed inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-6"
      >
        <div className="container mx-auto max-w-6xl">
           <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Powerful <span className="text-amber-500">Features</span></h2>
              <p className="text-slate-600 font-medium">Everything you need to master your money in one place.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pointer-events-auto">
              {features.map((feature, index) => (
                <div key={index} className="glass-card p-6 bg-white/50 border border-slate-200 shadow-sm rounded-3xl hover:shadow-md transition-all">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} to-transparent flex items-center justify-center mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
           </div>
        </div>
      </motion.div>

      {/* Scrollytelling Animation layer (takes up full width and height) */}
      <div className="relative z-10 w-full">
        <MoneyBeeScrollAnimation />
      </div>
    </section>
  );
};

export default Hero;
