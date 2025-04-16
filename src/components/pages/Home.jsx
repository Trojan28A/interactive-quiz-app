import React from 'react';
import quizData from '../../data/quizData';

const Home = ({ navigateTo, isDarkMode }) => {
  const handleStartQuiz = (quizId) => {
    navigateTo('quiz', { quizId });
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      <section style={{ 
        textAlign: 'center', 
        marginBottom: '3rem',
        padding: '3rem 1rem',
        backgroundColor: isDarkMode ? '#1f2937' : 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        backgroundImage: `linear-gradient(to bottom, ${isDarkMode ? 'rgba(31, 41, 55, 0.9)' : 'rgba(255, 255, 255, 0.9)'}, ${isDarkMode ? 'rgba(31, 41, 55, 0.9)' : 'rgba(255, 255, 255, 0.9)'}), url('https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <h1 style={{ 
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: isDarkMode ? '#60a5fa' : '#2563eb',
          marginBottom: '1rem'
        }}>
          Welcome to QuizzySpark!
        </h1>
        <p style={{ 
          fontSize: '1.25rem',
          color: isDarkMode ? '#d1d5db' : '#4b5563',
          maxWidth: '800px',
          margin: '0 auto 2rem'
        }}>
          Challenge yourself with our fun and interactive quizzes. Test your knowledge, beat the clock, and climb the leaderboard!
        </p>
        <button 
          onClick={() => navigateTo('quiz', { quizId: 1 })}
          style={{
            backgroundColor: '#2563eb',
            color: 'white',
            fontWeight: '600',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.375rem',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.125rem',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#1d4ed8';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#2563eb';
          }}
        >
          Start Quiz Now
        </button>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ 
          fontSize: '1.875rem',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          color: isDarkMode ? 'white' : '#1f2937',
          textAlign: 'center'
        }}>
          Featured Quizzes
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {quizData.map(quiz => (
            <div key={quiz.id} style={{
              backgroundColor: isDarkMode ? '#1f2937' : 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              overflow: 'hidden',
              transition: 'all 0.2s',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
            }}
            >
              <div style={{ height: '160px', overflow: 'hidden' }}>
                <img 
                  src={quiz.imageUrl} 
                  alt={quiz.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ 
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: isDarkMode ? 'white' : '#1f2937'
                }}>
                  {quiz.title}
                </h3>
                <p style={{ 
                  color: isDarkMode ? '#d1d5db' : '#4b5563',
                  marginBottom: '1rem'
                }}>
                  {quiz.description}
                </p>
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <span style={{
                    padding: '0.25rem 0.5rem',
                    backgroundColor: isDarkMode ? 'rgba(37, 99, 235, 0.2)' : '#dbeafe',
                    color: isDarkMode ? '#93c5fd' : '#1e40af',
                    borderRadius: '9999px',
                    fontSize: '0.75rem'
                  }}>
                    {quiz.category}
                  </span>
                  <span style={{
                    padding: '0.25rem 0.5rem',
                    backgroundColor: isDarkMode ? 'rgba(55, 65, 81, 0.5)' : '#f3f4f6',
                    color: isDarkMode ? '#e5e7eb' : '#1f2937',
                    borderRadius: '9999px',
                    fontSize: '0.75rem'
                  }}>
                    {quiz.difficulty}
                  </span>
                </div>
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{ 
                    fontSize: '0.875rem',
                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                  }}>
                    {quiz.questions.length} questions
                  </span>
                  <button 
                    style={{
                      backgroundColor: '#2563eb',
                      color: 'white',
                      fontWeight: '500',
                      padding: '0.5rem 1rem',
                      borderRadius: '0.375rem',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#1d4ed8';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = '#2563eb';
                    }}
                    onClick={() => handleStartQuiz(quiz.id)}
                  >
                    Start Quiz
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;