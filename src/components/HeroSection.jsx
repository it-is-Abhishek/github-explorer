import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const HeroSection = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Decorative Blocks Background */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-brand-neon-purple/20 border border-brand-neon-purple/50 rounded-lg minecraft-corners animate-float z-0 backdrop-blur-sm shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-brand-neon-blue/10 border border-brand-neon-blue/30 rounded-xl minecraft-corners animate-float-delayed z-0 backdrop-blur-md shadow-[0_0_20px_rgba(14,165,233,0.3)]"></div>
      <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-brand-neon-green/20 border border-brand-neon-green/40 rounded-md minecraft-corners animate-float-slow z-0 shadow-[0_0_10px_rgba(34,197,94,0.4)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="theme-hero-title text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-sm tracking-tight">
            Explore GitHub <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon-blue via-sky-400 to-brand-neon-purple">Like Never Before</span>
          </h1>
          
          <p className="theme-text-muted mt-4 text-xl max-w-2xl mx-auto mb-10">
            A highly visual, block-inspired interface combining modern design with playful aesthetics. Traverse repositories with style.
          </p>

          <div className="flex justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowDetails((current) => !current)}
              className="glass-panel theme-text-primary px-8 py-3 text-lg font-bold rounded-lg minecraft-corners hover:border-brand-neon-purple transition-all shadow-[4px_4px_0_rgba(139,92,246,0.3)]"
            >
              {showDetails ? 'Hide Details' : 'Learn More'}
            </motion.button>
          </div>

          <AnimatePresence>
            {showDetails ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.25 }}
                className="glass-panel theme-text-soft mt-8 max-w-3xl mx-auto rounded-2xl p-6 text-left"
              >
                <h2 className="theme-text-primary text-2xl font-bold mb-3">
                  What this website does
                </h2>
                <p className="mb-3">
                  GitHub Explorer helps you search GitHub users, inspect their public
                  profiles, and browse repositories in one dashboard.
                </p>
                <p className="mb-3">
                  You can search users with debouncing, load more matching results,
                  open a user profile, sort repositories by stars or forks, and
                  filter repositories by programming language.
                </p>
                <p>
                  The dashboard also includes light and dark theme switching, plus a
                  back action so you can return to the search results after opening a
                  profile.
                </p>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
