import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MoneyBeeScrollAnimation from './MoneyBeeScrollAnimation';
import { Zap, Target, Bot, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Global opacity for the entire animated layer system
  const globalAnimatedLayerOpacity = useTransform(scrollYProgress, [0.75, 0.85], [1, 0]);

  // Adjust individual piece opacities to fit within the 0-0.8 range
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.1], [0, -40]);

  const p1Opacity = useTransform(scrollYProgress, [0.15, 0.25, 0.35], [0, 1, 0]);
  const p1Y = useTransform(scrollYProgress, [0.15, 0.25, 0.35], [40, 0, -40]);

  const p2Opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, 1, 0]);
  const p2Y = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [40, 0, -40]);

  const p3Opacity = useTransform(scrollYProgress, [0.65, 0.75, 0.8], [0, 1, 0]);
  const p3Y = useTransform(scrollYProgress, [0.65, 0.75, 0.8], [40, 0, -40]);

  return (
    <div ref={containerRef} className="relative bg-white text-slate-900 font-sans min-h-[400vh] overflow-x-hidden">
      
      {/* ALL ANIMATED LAYERS (Fixed) - Fades out entirely before the black section */}
      <motion.div style={{ opacity: globalAnimatedLayerOpacity }} className="fixed inset-0 pointer-events-none">
        {/* Background Decoration */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[10%] right-[10%] w-[50%] h-[50%] bg-yellow-100/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] left-[10%] w-[50%] h-[50%] bg-orange-50/40 rounded-full blur-[120px]" />
        </div>

        {/* 3D Money Bee Animation Layer */}
        <div className="absolute inset-0 z-10 w-full h-full">
          <MoneyBeeScrollAnimation progress={scrollYProgress} />
        </div>

        {/* Hero Section */}
        <motion.section 
          style={{ opacity: heroOpacity, y: heroY }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-20"
        >
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 rounded-full bg-yellow-100 text-amber-700 text-xs font-black uppercase tracking-[0.3em] mb-6 text-center">
              Meet BudgetBee
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
              The Journey to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400">Wealth Starts Here.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              Budgeting shouldn't be a chore. It should be a beautiful, interactive journey shared with your friendly AI companion.
            </p>
          </div>
        </motion.section>

        {/* Core Pillar 1 */}
        <motion.section 
          style={{ opacity: p1Opacity, y: p1Y }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-20"
        >
          <div className="max-w-3xl">
            <div className="w-20 h-20 rounded-3xl bg-amber-500 text-white flex items-center justify-center mb-8 shadow-2xl mx-auto">
               <Zap className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6">Expense Tracking</h2>
            <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed">
              BudgetBee watches your velocity. Every transaction is automatically categorized, so you always know where your money goes.
            </p>
          </div>
        </motion.section>

        {/* Core Pillar 2 */}
        <motion.section 
          style={{ opacity: p2Opacity, y: p2Y }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-20"
        >
          <div className="max-w-3xl">
            <div className="w-20 h-20 rounded-3xl bg-orange-500 text-white flex items-center justify-center mb-8 shadow-2xl mx-auto">
               <Target className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6">Budget Planning</h2>
            <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed">
              Set your vision. Our AI forecasting helps you hit your goals by predicting your bank balance weeks into the future.
            </p>
          </div>
        </motion.section>

        {/* Core Pillar 3 */}
        <motion.section 
          style={{ opacity: p3Opacity, y: p3Y }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-20"
        >
          <div className="max-w-4xl w-full">
            <div className="w-20 h-20 rounded-3xl bg-yellow-400 text-black flex items-center justify-center mb-8 shadow-2xl mx-auto">
               <Bot className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6">AI Assistant Support</h2>
            <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed mb-12">
              Ask questions, get insights, and save better with 24/7 intelligent support tailored just for you.
            </p>
          </div>
        </motion.section>
      </motion.div>

      {/* spacer to allow scrolling */}
      <div className="h-[320vh]" />

      {/* FINAL STATIC BLACK FOOTER TRANSITION SECTION */}
      <section className="relative z-30 bg-black text-white py-32 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to start?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <button 
                onClick={() => window.location.hash = '#features'}
                className="bg-bee-yellow text-black px-12 py-6 rounded-3xl font-black hover:scale-105 active:scale-95 transition-all flex items-center gap-3 shadow-[0_20px_50px_rgba(251,191,36,0.15)] group"
               >
                  Enter Features <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
               </button>
               <button 
                onClick={() => window.location.hash = '#dashboard'}
                className="bg-white/5 backdrop-blur-xl border-2 border-white/10 px-12 py-6 rounded-3xl font-black text-white hover:bg-white/10 transition-all shadow-xl"
               >
                  Go to Dashboard
               </button>
            </div>
          </motion.div>
          
          <p className="text-white/40 font-medium text-sm">
            BudgetBee is the ultimate financial intelligence platform for modern wealth management.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
