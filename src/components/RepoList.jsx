import RepoCard from './RepoCard'

function RepoList({ repos, bookmarks, onToggleBookmark }) {
  return (
    <div className="repo-list">
      {repos.map((repo) => (
        <RepoCard
          key={repo.id}
          repo={repo}
          isBookmarked={bookmarks.some((item) => item.id === repo.id)}
          onToggleBookmark={onToggleBookmark}
        />
      ))}
    </div>
  )
}

export default RepoList
