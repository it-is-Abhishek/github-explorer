import React, { useState, useMemo } from 'react';
import { Star, GitFork, Circle, ExternalLink, Filter, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';

const getLanguageColor = (lang) => {
  const colors = {
    JavaScript: 'bg-yellow-400',
    TypeScript: 'bg-blue-400',
    Python: 'bg-green-500',
    Java: 'bg-orange-500',
    HTML: 'bg-red-500',
    CSS: 'bg-blue-500',
    Ruby: 'bg-red-600',
    Go: 'bg-cyan-500',
    Rust: 'bg-orange-600',
  };
  return colors[lang] || 'bg-slate-400';
};

const RepoCard = ({ repo, index, isBookmarked, onToggleBookmark }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.05, 0.5) }}
      whileHover={{ y: -5 }}
      className="glass-panel theme-panel-subtle p-5 group flex flex-col h-full minecraft-corners voxel-shadow-purple relative overflow-hidden border"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-neon-purple to-brand-neon-blue opacity-50 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="flex justify-between items-start mb-3">
        <h3 className="theme-text-primary text-lg font-bold group-hover:text-brand-neon-blue transition-colors break-words pr-4">
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            {repo.name}
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h3>
        <button
          type="button"
          onClick={() => onToggleBookmark(repo)}
          className={`bookmark-toggle ${isBookmarked ? 'bookmark-toggle-active' : ''}`}
          aria-label={isBookmarked ? 'Remove bookmark' : 'Save bookmark'}
        >
          <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
        </button>
      </div>
      
      <p className="theme-text-muted text-sm mb-4 flex-grow line-clamp-3">
        {repo.description || "No description provided for this repository."}
      </p>
      
      <div className="theme-text-soft flex items-center justify-between text-xs font-semibold mt-auto pt-4 border-t theme-divider">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 hover:text-brand-neon-blue transition-colors">
            <Star className="w-4 h-4" />
            <span>{repo.stargazers_count}</span>
          </div>
          <div className="flex items-center gap-1 hover:text-brand-neon-purple transition-colors">
            <GitFork className="w-4 h-4" />
            <span>{repo.forks_count}</span>
          </div>
        </div>
        
        {repo.language && (
          <div className="theme-panel-solid theme-text-soft flex items-center gap-1.5 px-2 py-1 rounded-md border">
            <Circle className={`w-2.5 h-2.5 fill-current ${getLanguageColor(repo.language).replace('bg-', 'text-')}`} />
            <span>{repo.language}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const RepoGrid = ({
  repos,
  title = 'Repositories',
  badgeText,
  emptyMessage = "This user hasn't created any public repositories yet.",
  bookmarkedRepos = [],
  onToggleBookmark,
}) => {
  const [sortBy, setSortBy] = useState('stars');
  const [filterLang, setFilterLang] = useState('All');

  const languages = useMemo(() => {
    if (!repos) return ['All'];
    const langs = new Set(repos.map(r => r.language).filter(Boolean));
    return ['All', ...Array.from(langs)];
  }, [repos]);

  const filteredAndSortedRepos = useMemo(() => {
    if (!repos) return [];
    
    let result = [...repos];
    
    if (filterLang !== 'All') {
      result = result.filter(r => r.language === filterLang);
    }
    
    result.sort((a, b) => {
      if (sortBy === 'stars') return b.stargazers_count - a.stargazers_count;
      if (sortBy === 'forks') return b.forks_count - a.forks_count;
      return 0;
    });

    return result;
  }, [repos, sortBy, filterLang]);

  if (!repos) return null;

  if (repos.length === 0) {
    return (
      <div className="glass-panel theme-text-muted w-full h-64 flex flex-col items-center justify-center text-center p-8 minecraft-corners border-dashed border-2 theme-card-border">
        <div className="w-16 h-16 mb-4 opacity-20 bg-slate-500 rounded-lg minecraft-corners rotate-12"></div>
        <h3 className="theme-text-primary text-xl font-bold mb-2">No Repositories Found</h3>
        <p>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="w-full relative z-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <h2 className="theme-text-primary text-2xl font-bold flex items-center gap-2">
            <span className="w-3 h-3 bg-brand-neon-blue rounded-sm block shadow-[0_0_8px_rgba(14,165,233,0.8)]"></span>
            {title}
          </h2>
          <span className="theme-badge text-xs px-2 py-1 rounded-md font-mono">
            {badgeText || `${repos.length} Public`}
          </span>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative glass-panel rounded-lg flex items-center px-2 py-1">
            <Filter className="theme-text-muted w-4 h-4 mr-2" />
            <select 
              value={filterLang}
              onChange={(e) => setFilterLang(e.target.value)}
              className="theme-select bg-transparent text-sm focus:outline-none appearance-none pr-4 cursor-pointer"
            >
              {languages.map(lang => <option key={lang} value={lang}>{lang}</option>)}
            </select>
          </div>
          
          <div className="glass-panel rounded-lg flex overflow-hidden">
            <button 
              onClick={() => setSortBy('stars')}
              className={`px-3 py-1.5 text-sm font-medium transition-colors ${sortBy === 'stars' ? 'bg-brand-neon-blue/20 text-brand-neon-blue border-b-2 border-brand-neon-blue' : 'theme-text-muted hover:bg-[var(--theme-card)]'}`}
            >
              Stars
            </button>
            <button 
              onClick={() => setSortBy('forks')}
              className={`px-3 py-1.5 text-sm font-medium transition-colors ${sortBy === 'forks' ? 'bg-brand-neon-purple/20 text-brand-neon-purple border-b-2 border-brand-neon-purple' : 'theme-text-muted hover:bg-[var(--theme-card)]'}`}
            >
              Forks
            </button>
          </div>
        </div>
      </div>
      
      {filteredAndSortedRepos.length === 0 ? (
        <div className="theme-text-muted w-full py-16 text-center border border-dashed theme-card-border rounded-xl">
          No repositories match the selected language.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 text-left gap-6">
          {filteredAndSortedRepos.map((repo, i) => (
            <RepoCard
              key={repo.id}
              repo={repo}
              index={i}
              isBookmarked={bookmarkedRepos.some((savedRepo) => savedRepo.id === repo.id)}
              onToggleBookmark={onToggleBookmark}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RepoGrid;
