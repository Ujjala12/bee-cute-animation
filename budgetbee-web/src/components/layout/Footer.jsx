import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#E2E8F0] dark:bg-black border-t border-slate-300 dark:border-white/10 pt-20 pb-10 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 text-xl font-bold tracking-tight mb-6">
              <div className="w-6 h-6 rounded-full bg-amber-500 dark:bg-bee-yellow flex items-center justify-center text-white dark:text-black text-xs font-bold shadow-sm">
                B
              </div>
              <span className="text-slate-900 dark:text-white">Budget<span className="text-amber-500 dark:text-bee-yellow">Bee</span></span>
            </div>
            <p className="text-slate-600 dark:text-white/50 text-sm max-w-sm mb-8 leading-relaxed">
              Financial Intelligence Webservice. Connect your personal budget, group expenses, and future predictions into one smart intelligent system.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-white/50">
              <li><a href="#" className="hover:text-amber-600 dark:hover:text-bee-yellow transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-amber-600 dark:hover:text-bee-yellow transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-amber-600 dark:hover:text-bee-yellow transition-colors">AI Assistant</a></li>
              <li><a href="#" className="hover:text-amber-600 dark:hover:text-bee-yellow transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-white/50">
              <li><a href="#" className="hover:text-amber-600 dark:hover:text-bee-yellow transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-amber-600 dark:hover:text-bee-yellow transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-amber-600 dark:hover:text-bee-yellow transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-amber-600 dark:hover:text-bee-yellow transition-colors">Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-white/50">
              <li><a href="#" className="hover:text-amber-600 dark:hover:text-bee-yellow transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-600 dark:hover:text-bee-yellow transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-amber-600 dark:hover:text-bee-yellow transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-300 dark:border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 dark:text-white/40 gap-4">
          <p>© 2026 BudgetBee Inc. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Designed with</span>
            <span className="text-red-500">♥</span>
            <span>for Financial Intelligence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
