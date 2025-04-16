import React from 'react';

const QuestionCard = ({ question, options, onSelectOption, selectedOption, isDarkMode }) => {
  return (
    <div style={{
      backgroundColor: isDarkMode ? '#1f2937' : 'white',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      padding: '1.5rem',
      animation: 'fadeIn 0.5s ease-in-out',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h2 style={{ 
        fontSize: '1.5rem',
        fontWeight: '600',
        marginBottom: '1.5rem',
        color: isDarkMode ? 'white' : '#1f2937',
        textAlign: 'center'
      }}>
        {question}
      </h2>
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
        marginTop: '1.5rem'
      }}>
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelectOption(option)}
            style={{
              padding: '1rem',
              backgroundColor: selectedOption === option 
                ? (isDarkMode ? '#3B82F6' : '#2563EB') 
                : (isDarkMode ? '#374151' : '#F3F4F6'),
              color: selectedOption === option 
                ? 'white' 
                : (isDarkMode ? '#E5E7EB' : '#1F2937'),
              borderRadius: '0.375rem',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '500',
              textAlign: 'left',
              transition: 'all 0.2s',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <span style={{ 
              display: 'inline-block',
              width: '24px',
              height: '24px',
              lineHeight: '24px',
              textAlign: 'center',
              backgroundColor: selectedOption === option 
                ? 'rgba(255, 255, 255, 0.2)' 
                : (isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'),
              borderRadius: '50%',
              marginRight: '0.75rem'
            }}>
              {String.fromCharCode(65 + index)}
            </span>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;