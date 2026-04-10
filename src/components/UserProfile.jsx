import React from 'react';
import { MapPin, Link as LinkIcon, Users, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';

const StatBlock = ({ label, value, color }) => (
  <div className="theme-panel-solid p-3 rounded-lg border minecraft-corners flex flex-col items-center justify-center voxel-shadow relative overflow-hidden group">
    {/* Hover highlight effect */}
    <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity bg-gradient-to-b ${color}`}></div>
    <span className="theme-text-primary text-xl font-black z-10">{value}</span>
    <span className="theme-text-muted text-xs font-medium uppercase tracking-wider z-10">{label}</span>
  </div>
);

const UserProfile = ({ user }) => {
  if (!user) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-panel w-full max-w-sm overflow-hidden border-t-4 border-t-brand-neon-blue custom-voxel-shadow"
    >
      <div className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-r from-brand-neon-blue via-brand-neon-purple to-brand-neon-blue shadow-[0_0_15px_rgba(14,165,233,0.5)] animate-[spin_4s_linear_infinite]"></div>
            <img 
              src={user.avatar_url || 'https://via.placeholder.com/150'} 
              alt={user.login} 
              className="w-[88px] h-[88px] rounded-full absolute top-1 left-1 border-2 border-slate-900 object-cover z-10"
            />
            {/* Status indicator */}
            <div className="absolute bottom-1 right-1 w-5 h-5 bg-brand-neon-green rounded-sm border-2 border-slate-900 z-20 minecraft-corners shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
          </div>
          
          <h2 className="theme-text-primary mt-4 text-2xl font-bold">{user.name || user.login}</h2>
          <p className="text-brand-neon-blue font-mono text-sm mb-4">@{user.login}</p>
          
          {user.bio && (
            <p className="theme-text-soft text-sm mb-6 leading-relaxed max-w-xs">{user.bio}</p>
          )}

          <div className="w-full grid grid-cols-3 gap-3 mb-6">
            <StatBlock label="Repos" value={user.public_repos} color="from-brand-neon-blue to-transparent" />
            <StatBlock label="Followers" value={user.followers} color="from-brand-neon-purple to-transparent" />
            <StatBlock label="Following" value={user.following} color="from-brand-neon-green to-transparent" />
          </div>

          <div className="theme-panel-solid theme-text-muted w-full space-y-3 text-sm text-left p-4 rounded-xl border">
            {user.location && (
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-neon-orange" />
                <span>{user.location}</span>
              </div>
            )}
            {user.blog && (
              <div className="flex items-center gap-3">
                <LinkIcon className="w-4 h-4 text-brand-neon-blue" />
                <a href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`} target="_blank" rel="noopener noreferrer" className="hover:text-brand-neon-blue hover:underline">
                  {user.blog}
                </a>
              </div>
            )}
            {user.twitter_username && (
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-400"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                <a href={`https://twitter.com/${user.twitter_username}`} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 hover:underline">
                  @{user.twitter_username}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UserProfile;
