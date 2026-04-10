function UserCard({ user, onClick, isActive }) {
  return (
    <button
      type="button"
      className={`user-card ${isActive ? 'active' : ''}`}
      onClick={() => onClick(user.login)}
    >
      <img src={user.avatar_url} width="56" height="56" alt={user.login} />
      <div className="user-content">
        <div className="user-row">
          <p className="user-name">{user.login}</p>
          <span className="user-type">{user.type}</span>
        </div>
        <span className="user-link">Open repositories</span>
      </div>
      <span className="user-arrow" aria-hidden="true">
        ↗
      </span>
    </button>
  )
}

export default UserCard
