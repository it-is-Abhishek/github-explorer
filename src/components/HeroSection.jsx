import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-brand-neon-purple/30 text-brand-neon-purple text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-sm bg-brand-neon-purple animate-pulse"></span>
            Voxel Explorer V1.0
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-6 drop-shadow-sm tracking-tight">
            Explore GitHub <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon-blue via-sky-400 to-brand-neon-purple">Like Never Before</span>
          </h1>
          
          <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            A highly visual, block-inspired interface combining modern design with playful aesthetics. Traverse repositories with style.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-900 px-8 py-3 text-lg font-bold rounded-lg minecraft-corners shadow-[4px_4px_0_#94a3b8] hover:shadow-[6px_6px_0_#cbd5e1] transition-shadow"
            >
              Get Started
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-panel text-white px-8 py-3 text-lg font-bold rounded-lg minecraft-corners border-slate-600 hover:border-brand-neon-purple transition-all shadow-[4px_4px_0_rgba(139,92,246,0.3)]"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
