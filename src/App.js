import React, { useState } from 'react';
import './App.css';
import Navbar from './components/ui/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Quiz from './components/pages/Quiz';
import Result from './components/pages/Result';
import Leaderboard from './components/pages/Leaderboard';
import quizData from './data/quizData';
import leaderboardData from './data/leaderboardData';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('quizzes'); // 'quizzes' or 'leaderboard'
  const [currentPage, setCurrentPage] = useState('home');
  const [params, setParams] = useState({});

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Toggle dark class on document element
    document.documentElement.classList.toggle('dark');
  };

  const navigateTo = (page, pageParams = {}) => {
    setCurrentPage(page);
    setParams(pageParams);
    window.scrollTo(0, 0);
  };

  // In the renderPage function
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home navigateTo={navigateTo} isDarkMode={isDarkMode} />;
      case 'quiz':
        return <Quiz navigateTo={navigateTo} params={params} isDarkMode={isDarkMode} />;
      case 'result':
        return <Result navigateTo={navigateTo} params={params} isDarkMode={isDarkMode} />;
      case 'leaderboard':
        return <Leaderboard navigateTo={navigateTo} params={params} isDarkMode={isDarkMode} />;
      default:
        return <Home navigateTo={navigateTo} isDarkMode={isDarkMode} />;
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Navbar 
        toggleTheme={toggleTheme} 
        isDarkMode={isDarkMode} 
        navigateTo={navigateTo}
        currentPage={currentPage}
      />
      
      <main style={{ flex: 1 }}>
        {renderPage()}
      </main>
      
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
