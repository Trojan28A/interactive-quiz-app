import React from 'react';

const Header = ({ toggleTheme, isDarkMode }) => {
  return (
    <header style={{ 
      backgroundColor: isDarkMode ? '#1f2937' : 'white',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      padding: '1.5rem 0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <h1 style={{ 
            fontSize: '1.875rem',
            fontWeight: 'bold',
            color: isDarkMode ? '#60a5fa' : '#2563eb',
            margin: '0'
          }}>QuizRush</h1>
          <p style={{ 
            color: isDarkMode ? '#d1d5db' : '#4b5563',
            margin: '0.5rem 0 0 0'
          }}>Test your knowledge with fun quizzes!</p>
        </div>
        <button 
          onClick={toggleTheme}
          style={{
            padding: '0.5rem',
            borderRadius: '9999px',
            backgroundColor: isDarkMode ? '#374151' : '#e5e7eb',
            color: isDarkMode ? '#e5e7eb' : '#1f2937',
            border: 'none',
            cursor: 'pointer'
          }}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;