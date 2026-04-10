import React from 'react';
import { Box, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = ({ theme, onToggleTheme }) => {
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
            <span className="theme-text-primary font-bold text-xl tracking-tight flex items-center gap-1">
              Git<span className="text-brand-neon-blue">Block</span> <Box className="w-4 h-4 text-brand-neon-blue inline-block mb-1" />
            </span>
          </div>

          <motion.button
            type="button"
            whileHover={{ y: -1 }}
            whileTap={{ y: 0 }}
            onClick={onToggleTheme}
            className="theme-toggle-button"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-brand-neon-blue" />
            ) : (
              <Moon className="w-4 h-4 text-brand-neon-purple" />
            )}
            <span className="theme-text-primary text-sm font-semibold">
              {theme === 'dark' ? 'Light Theme' : 'Dark Theme'}
            </span>
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
