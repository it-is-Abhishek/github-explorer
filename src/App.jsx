import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SearchSection from './components/SearchSection';
import UserProfile from './components/UserProfile';
import RepoGrid from './components/RepoGrid';
import UserGrid from './components/UserGrid';
import { UserSkeleton, RepoSkeletonGrid } from './components/LoadingSkeleton';
import useDebounce from './hooks/useDebounce';
import { searchUsers, getUserDetails, getUserRepos } from './services/githubApi';

const GITHUB_SEARCH_LIMIT = 1000;

function App() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);

  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [searchError, setSearchError] = useState(null);

  const [isProfileLoading, setIsProfileLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [repoData, setRepoData] = useState(null);
  
  const [hasSearched, setHasSearched] = useState(false);

  // Effect for debounced search
  useEffect(() => {
    const fetchUsers = async () => {
      if (!debouncedQuery.trim()) {
        setSearchResults([]);
        setTotalUsers(0);
        setIsSearching(false);
        return;
      }

      setIsSearching(true);
      setSearchError(null);
      setHasSearched(true); // Hides Hero section
      setPage(1);

      try {
        const { items, total } = await searchUsers(debouncedQuery, 1);
        setSearchResults(items);
        setTotalUsers(total);
      } catch (err) {
        setSearchError(err.message || 'Failed to search users.');
      } finally {
        setIsSearching(false);
      }
    };

    fetchUsers();
  }, [debouncedQuery]);

  const loadMoreUsers = async () => {
    if (isLoadingMore || searchResults.length >= totalUsers) return;
    
    setIsLoadingMore(true);
    const nextPage = page + 1;
    try {
      const { items } = await searchUsers(debouncedQuery, nextPage);
      // Filter out possible duplicates due to rapid updates in github's index between requests
      const newItems = items.filter(val => !searchResults.some(existing => existing.id === val.id));
      setSearchResults(prev => [...prev, ...newItems]);
      setPage(nextPage);
    } catch (err) {
      setSearchError(err.message || 'Failed to load more users.');
    } finally {
      setIsLoadingMore(false);
    }
  };

  const handleSelectUser = async (userSummary) => {
    // Clear search dropdown by resetting query to their login or closing
    setQuery(userSummary.login);
    setSearchResults([]); 
    setIsProfileLoading(true);
    setUserData(null);
    setRepoData(null);
    setSearchError(null);

    try {
      const [userProfile, repos] = await Promise.all([
        getUserDetails(userSummary.login),
        getUserRepos(userSummary.login)
      ]);
      setUserData(userProfile);
      setRepoData(repos);
    } catch (err) {
      setSearchError(err.message || 'Error fetching user profile.');
    } finally {
      setIsProfileLoading(false);
    }
  };

  const accessibleTotalUsers = Math.min(totalUsers, GITHUB_SEARCH_LIMIT);
  const hasMoreUsers = searchResults.length < accessibleTotalUsers;

  return (
    <div className="min-h-screen mb-20 relative">
      <Navbar />
      
      {!hasSearched && !userData && !isProfileLoading ? (
        <HeroSection />
      ) : (
        <div className="pt-32 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-float mb-8 hidden"></div> {/* Ensures Tailwind parses keyframes */}
        </div>
      )}

      <div className={!hasSearched && !userData && !isProfileLoading ? "relative -mt-10" : "mt-0"}>
        <SearchSection 
          query={query}
          setQuery={setQuery}
          isSearching={isSearching}
          searchResults={searchResults}
          onSelectUser={handleSelectUser}
          error={searchError}
        />
      </div>

      {searchError && !userData && !isProfileLoading && (
        <div className="max-w-3xl mx-auto px-4 mt-8 relative z-10">
           <div className="glass-panel p-4 text-center text-red-400 font-medium minecraft-corners">
             {searchError}
           </div>
        </div>
      )}

      {!userData && !isProfileLoading && searchResults.length > 0 && (
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-10 transition-all duration-500">
           <UserGrid 
             users={searchResults} 
             totalUsers={accessibleTotalUsers}
             onSelectUser={handleSelectUser} 
             hasMore={hasMoreUsers}
             onLoadMore={loadMoreUsers}
             isLoadingMore={isLoadingMore}
           />
         </div>
      )}

      {(userData || isProfileLoading) && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-10 transition-all duration-500">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar / User Profile */}
            <div className="w-full lg:w-1/3 xl:w-1/4 flex flex-col items-center lg:items-start shrink-0">
              {isProfileLoading ? <UserSkeleton /> : <UserProfile user={userData} />}
            </div>
            
            {/* Main Content / Repositories */}
            <div className="w-full lg:w-2/3 xl:w-3/4">
              {isProfileLoading ? <RepoSkeletonGrid /> : <RepoGrid repos={repoData} />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
