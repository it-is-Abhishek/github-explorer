import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-16 mb-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="footer-shell glass-panel">
          <div className="text-center sm:text-left">
            <p className="theme-text-primary text-sm font-semibold">GitBlock</p>
            <p className="theme-text-muted text-sm footer-copy">
              Search GitHub users, inspect profiles, and explore repositories in one dashboard.
            </p>
          </div>

          <div className="footer-links">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
            <a
              href="https://docs.github.com/en/rest"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              API Docs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
