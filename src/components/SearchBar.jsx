function SearchBar({ query, setQuery }) {
  return (
    <label className="search-bar" htmlFor="user-search">
      <span className="search-label">Search GitHub users</span>
      <div className="search-input-wrap">
        <span className="search-icon" aria-hidden="true">
          ⌕
        </span>
        <input
          id="user-search"
          type="text"
          value={query}
          placeholder="Try abhishek, torvalds, gaearon..."
          onChange={(event) => setQuery(event.target.value)}
        />
        {query ? (
          <button
            type="button"
            className="clear-search-button"
            onClick={() => setQuery('')}
            aria-label="Clear search"
          >
            Clear
          </button>
        ) : null}
      </div>
    </label>
  )
}

export default SearchBar
