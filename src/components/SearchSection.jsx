import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SearchSection = ({ query, setQuery, isSearching, searchResults, onSelectUser, error }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 relative z-20">
      <motion.form 
        onSubmit={handleSubmit}
        className={`glass-panel-heavy p-2 rounded-xl transition-all duration-300 ${isFocused ? 'ring-2 ring-brand-neon-blue shadow-[0_0_20px_rgba(14,165,233,0.3)]' : 'shadow-lg'}`}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="relative flex items-center">
          <div className="px-4">
            {isSearching ? (
              <Loader2 className="w-6 h-6 text-brand-neon-blue animate-spin" />
            ) : (
              <Search className={`w-6 h-6 transition-colors ${isFocused ? 'text-brand-neon-blue' : 'text-slate-400'}`} />
            )}
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)} // delay blur to allow clicks
            placeholder="Search GitHub users..."
            className="flex-1 bg-transparent border-none text-white text-lg placeholder-slate-500 focus:outline-none py-4 pr-4"
          />
        </div>
      </motion.form>

      {/* Decorative Blocks around search */}
      <div className="absolute -top-4 -right-8 w-8 h-8 bg-brand-neon-blue/20 border border-brand-neon-blue/50 rounded minecraft-corners rotate-12 -z-10 animate-float"></div>
      <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-brand-neon-purple/20 border border-brand-neon-purple/50 rounded minecraft-corners -rotate-12 -z-10 animate-float-delayed"></div>
    </div>
  );
};

export default SearchSection;
