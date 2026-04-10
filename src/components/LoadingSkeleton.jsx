import React from 'react';

export const UserSkeleton = () => {
  return (
    <div className="glass-panel w-full max-w-sm overflow-hidden border-t-4 border-slate-700">
      <div className="p-6 flex flex-col items-center">
        <div className="w-[88px] h-[88px] rounded-full skeleton-shimmer mb-4 border border-slate-700"></div>
        <div className="w-32 h-6 rounded-md skeleton-shimmer mb-2"></div>
        <div className="w-24 h-4 rounded-md skeleton-shimmer mb-6"></div>
        
        <div className="w-full grid grid-cols-3 gap-3 mb-6">
          <div className="h-16 rounded-lg skeleton-shimmer border border-slate-700 minecraft-corners"></div>
          <div className="h-16 rounded-lg skeleton-shimmer border border-slate-700 minecraft-corners"></div>
          <div className="h-16 rounded-lg skeleton-shimmer border border-slate-700 minecraft-corners"></div>
        </div>
        
        <div className="w-full space-y-3 p-4 rounded-xl border border-slate-800 bg-slate-900/40">
          <div className="w-3/4 h-4 rounded-md skeleton-shimmer"></div>
          <div className="w-1/2 h-4 rounded-md skeleton-shimmer"></div>
          <div className="w-2/3 h-4 rounded-md skeleton-shimmer"></div>
        </div>
      </div>
    </div>
  );
};

export const RepoSkeletonGrid = () => {
  return (
    <div className="w-full">
      <div className="w-32 h-8 rounded-md skeleton-shimmer mb-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="glass-panel p-5 h-36 border border-slate-700 flex flex-col justify-between minecraft-corners">
            <div>
              <div className="w-1/2 h-6 rounded-md skeleton-shimmer mb-3"></div>
              <div className="w-full h-4 rounded-md skeleton-shimmer mb-2"></div>
              <div className="w-5/6 h-4 rounded-md skeleton-shimmer"></div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="w-24 h-4 rounded-md skeleton-shimmer"></div>
              <div className="w-16 h-4 rounded-md skeleton-shimmer"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
