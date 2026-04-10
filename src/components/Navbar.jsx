import React from 'react';
import { Search, Box } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-panel-heavy border-b-0 rounded-none shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <motion.div 
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="bg-brand-neon-purple p-2 rounded-md minecraft-corners shadow-[2px_2px_0_#9d4edd]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white w-6 h-6"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </motion.div>
            <span className="text-white font-bold text-xl tracking-tight flex items-center gap-1">
              Git<span className="text-brand-neon-blue">Block</span> <Box className="w-4 h-4 text-brand-neon-blue inline-block mb-1" />
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400 group-focus-within:text-brand-neon-blue transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Jump to..."
                className="bg-white/5 border border-white/10 text-white text-sm rounded-md minecraft-corners focus:ring-1 focus:ring-brand-neon-blue focus:border-brand-neon-blue block w-64 pl-10 p-2 transition-all group-hover:bg-white/10"
              />
              <div className="absolute inset-x-0 -bottom-[1px] h-[1px] bg-gradient-to-r from-transparent via-brand-neon-purple to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Explore</a>
            <motion.button 
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="bg-brand-neon-blue hover:bg-sky-400 text-white px-4 py-2 text-sm font-semibold rounded-md minecraft-corners shadow-[2px_2px_0_#0284c7] hover:shadow-[3px_3px_0_#0284c7] transition-all"
            >
              Sign In
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
