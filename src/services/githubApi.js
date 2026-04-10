const API_BASE = 'https://api.github.com';

export const searchUsers = async (query, page = 1) => {
  if (!query) return { items: [], total: 0 };
  const response = await fetch(`${API_BASE}/search/users?q=${encodeURIComponent(query)}&per_page=30&page=${page}`);
  if (!response.ok) {
    if (response.status === 403) throw new Error("API rate limit exceeded. Please wait a moment.");
    throw new Error('Failed to fetch users');
  }
  const data = await response.json();
  return { items: data.items || [], total: data.total_count || 0 };
};

export const getUserDetails = async (username) => {
  const response = await fetch(`${API_BASE}/users/${encodeURIComponent(username)}`);
  if (!response.ok) {
    if (response.status === 404) throw new Error("User not found");
    if (response.status === 403) throw new Error("API rate limit exceeded.");
    throw new Error('Failed to fetch user details');
  }
  return response.json();
};

export const getUserRepos = async (username) => {
  const response = await fetch(`${API_BASE}/users/${encodeURIComponent(username)}/repos?per_page=100&sort=updated`);
  if (!response.ok) {
    if (response.status === 403) throw new Error("API rate limit exceeded.");
    throw new Error('Failed to fetch repositories');
  }
  return response.json();
};
