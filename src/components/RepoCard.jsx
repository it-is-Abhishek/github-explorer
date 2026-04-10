function RepoCard({ repo, isBookmarked, onToggleBookmark }) {
  return (
    <article className="repo-card">
      <div className="repo-card-top">
        <div>
          <div className="repo-title-row">
            <h3>{repo.name}</h3>
            {repo.private ? <span className="repo-privacy">Private</span> : null}
          </div>
          <p>{repo.description || 'No description available.'}</p>
        </div>
        <div className="repo-actions">
          <a
            className="repo-link"
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
          >
            Open
          </a>
          <button
            type="button"
            className={`bookmark-button ${isBookmarked ? 'saved' : ''}`}
            onClick={() => onToggleBookmark(repo)}
          >
            {isBookmarked ? 'Saved' : 'Bookmark'}
          </button>
        </div>
      </div>

      <div className="repo-meta">
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
        <span>{repo.language || 'Unknown'}</span>
        <span>{repo.visibility || 'public'}</span>
      </div>
    </article>
  )
}

export default RepoCard
