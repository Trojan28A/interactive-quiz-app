import React from 'react';

const QuizCard = ({ quiz, onStartQuiz, isDarkMode }) => {
  return (
    <div style={{
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
          src={quiz.imageUrl || `https://source.unsplash.com/random/300x200/?${quiz.category.toLowerCase()}`} 
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
            {quiz.totalQuestions} questions
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
            onClick={() => onStartQuiz(quiz.id)}
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;