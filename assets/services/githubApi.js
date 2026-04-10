export const searchUsers = async (query) => {
  const res = await fetch(`https://api.github.com/search/users?q=${query}`);
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
};