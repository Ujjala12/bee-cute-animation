import React from 'react';
import { motion } from 'framer-motion';
import { WifiOff, CloudSnow, ShieldCheck } from 'lucide-react';

const OfflineFirst = () => {
  return (
    <section className="py-24 relative overflow-hidden border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative aspect-square max-w-md mx-auto w-full"
          >
            {/* Center Phone Mockup abstraction */}
            <div className="absolute inset-0 rounded-[3rem] border-8 border-white/5 bg-black/50 glass-card flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1)_0%,transparent_70%)]" />
              
              <div className="z-10 flex flex-col items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl relative">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 rounded-full border-2 border-bee-yellow/50"
                  />
                  <WifiOff className="w-8 h-8 text-bee-yellow" />
                </div>
                
                <div className="text-center px-8">
                  <div className="text-xl font-bold mb-2">100% Functional Offline</div>
                  <div className="text-xs text-white/50 bg-black/50 px-3 py-1.5 rounded-full inline-block">Local Storage Active</div>
                </div>
              </div>

              {/* Decorative floating elements */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
                className="absolute top-12 left-8 w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center backdrop-blur-md"
              >
                <CloudSnow className="w-5 h-5 text-blue-400" />
              </motion.div>

              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                className="absolute bottom-12 right-8 w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center backdrop-blur-md"
              >
                <ShieldCheck className="w-5 h-5 text-orange-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for the <br/><span className="text-bee-yellow">Real World.</span></h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Connectivity drops shouldn't stop you from controlling your money. BudgetBee is built with an <strong>offline-first architecture</strong>, meaning you can open the app, log expenses, and check budgets instantly—even with zero bars.
            </p>

            <div className="space-y-6">
              {[
                { icon: <WifiOff className="w-5 h-5 text-bee-yellow"/>, title: "Always Accessible", desc: "No loading screens when you open the app. Your data is stored locally first." },
                { icon: <CloudSnow className="w-5 h-5 text-blue-400"/>, title: "Background Sync", desc: "The moment you reconnect, changes are quietly synced to the cloud." },
                { icon: <ShieldCheck className="w-5 h-5 text-bee-green"/>, title: "Total Privacy", desc: "Your data never leaves your device until it needs to sync securely." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-white/60 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OfflineFirst;
