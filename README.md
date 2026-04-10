# GitHub Explorer

GitHub Explorer is a React + Vite application for searching GitHub users, opening a user profile, and browsing public repositories in a polished dashboard UI.

## Features

- Debounced GitHub user search
- Paginated user loading with automatic infinite-style loading
- User profile view with public details
- Repository listing with sorting and language filtering
- Light theme and dark theme toggle
- Back button to return from profile view to search results
- Responsive UI built with React, Vite, Tailwind CSS, Framer Motion, and Lucide icons

## Tech Stack

- React 19
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Open the local URL shown by Vite, usually:

```bash
http://localhost:5173
```

### 3. Create a production build

```bash
npm run build
```

### 4. Preview the production build

```bash
npm run preview
```

## How It Works

### Search

- User input is debounced before API requests are sent
- Search uses the GitHub users search endpoint
- Additional user pages are loaded as you continue through the results

### Profile View

- Clicking a user opens their profile
- The app fetches both user details and repositories
- A back button returns you to the previous search context

### Repository View

- Repositories are fetched from the selected user
- Repositories can be sorted by stars or forks
- Repositories can be filtered by language

### Theme

- Theme switching is available from the navbar
- Selected theme is saved in `localStorage`

## API Endpoints Used

- `GET https://api.github.com/search/users?q=<query>&per_page=30&page=<page>`
- `GET https://api.github.com/users/<username>`
- `GET https://api.github.com/users/<username>/repos?per_page=100&sort=updated`

## Project Structure

```text
src/
  components/
  hooks/
  services/
  App.jsx
  main.jsx
  index.css
```

## Notes

- GitHub search has a practical limit of 1,000 accessible results per query
- Unauthenticated GitHub API requests are rate-limited
- If rate limits are exceeded, the app shows an error message

## Scripts

- `npm run dev` - start the development server
- `npm run build` - create a production build
- `npm run preview` - preview the production build
- `npm run lint` - run ESLint
