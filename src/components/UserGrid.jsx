import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const UserGrid = ({ users, totalUsers, onSelectUser, onLoadMore, hasMore, isLoadingMore }) => {
  const loadMoreRef = useRef(null);

  useEffect(() => {
    if (!hasMore || isLoadingMore || !loadMoreRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          onLoadMore();
        }
      },
      {
        rootMargin: '240px 0px',
      },
    );

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [hasMore, isLoadingMore, onLoadMore]);

  if (!users || users.length === 0) return null;

  return (
    <div className="w-full pb-12">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="w-3 h-3 bg-brand-neon-purple rounded-sm block shadow-[0_0_8px_rgba(139,92,246,0.8)]"></span>
          Search Results
        </h2>
        <span className="bg-slate-800 text-slate-300 text-xs px-2 py-1 rounded-md font-mono border border-slate-700">
          Showing {users.length} of {totalUsers?.toLocaleString() || users.length}
        </span>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
        {users.map((user, i) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: Math.min((i % 30) * 0.02, 0.3) }}
            whileHover={{ y: -5, scale: 1.05 }}
            onClick={() => onSelectUser(user)}
            className="glass-panel p-4 flex flex-col items-center justify-center cursor-pointer minecraft-corners voxel-shadow text-center group bg-slate-800/40 border-t-2 border-t-transparent hover:border-t-brand-neon-blue transition-all h-full"
          >
            <div className="relative mb-3 flex-shrink-0">
              <img 
                src={user.avatar_url} 
                alt={user.login} 
                className="w-16 h-16 rounded-full border-2 border-slate-700 group-hover:border-brand-neon-blue transition-colors z-10 relative"
              />
              <div className="absolute inset-0 bg-brand-neon-blue/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h3 className="text-sm font-semibold text-white break-words w-full truncate px-1">
              {user.login}
            </h3>
          </motion.div>
        ))}
      </div>

      {hasMore && (
        <div className="flex flex-col items-center mt-8 gap-4">
          <div
            ref={loadMoreRef}
            className="h-2 w-full"
            aria-hidden="true"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onLoadMore}
            disabled={isLoadingMore}
            className="flex items-center gap-2 bg-brand-neon-blue hover:bg-sky-400 disabled:opacity-50 text-white font-bold py-3 px-8 rounded-lg minecraft-corners shadow-[3px_3px_0_#0284c7] hover:shadow-[4px_4px_0_#0284c7] transition-all active:translate-y-1 active:translate-x-1 active:shadow-none"
          >
            {isLoadingMore && <Loader2 className="w-5 h-5 animate-spin" />}
            {isLoadingMore ? 'Loading more users...' : 'Load More Users'}
          </motion.button>
          <p className="text-center text-sm text-slate-400 max-w-xl">
            More results load automatically as you scroll. GitHub search exposes up to 1,000 matching users per query.
          </p>
        </div>
      )}
    </div>
  );
};

export default UserGrid;
