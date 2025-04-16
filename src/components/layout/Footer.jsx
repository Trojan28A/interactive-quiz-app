import React from 'react';

const Footer = ({ isDarkMode }) => {
  return (
    <footer style={{ 
      backgroundColor: isDarkMode ? '#1f2937' : 'white',
      boxShadow: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.1)',
      marginTop: '3rem',
      padding: '1.5rem 0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        textAlign: 'center',
        color: isDarkMode ? '#d1d5db' : '#4b5563'
      }}>
        <p>© 2023 QuizzySpark. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;