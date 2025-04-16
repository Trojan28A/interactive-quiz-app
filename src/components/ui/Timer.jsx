import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime, onTimeUp, isDarkMode }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  
  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }
    
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [timeLeft, onTimeUp]);
  
  // Reset timer when initialTime changes (new question)
  useEffect(() => {
    setTimeLeft(initialTime);
  }, [initialTime]);
  
  // Calculate percentage for progress bar
  const percentage = (timeLeft / initialTime) * 100;
  
  // Determine color based on time left
  let color = '#10B981'; // Green
  if (percentage < 30) {
    color = '#EF4444'; // Red
  } else if (percentage < 60) {
    color = '#F59E0B'; // Yellow
  }
  
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '0.5rem'
      }}>
        <span style={{ 
          color: isDarkMode ? '#d1d5db' : '#4b5563',
          fontWeight: '500'
        }}>
          Time Left:
        </span>
        <span style={{ 
          color: color,
          fontWeight: '600'
        }}>
          {timeLeft} seconds
        </span>
      </div>
      <div style={{ 
        width: '100%', 
        height: '8px', 
        backgroundColor: isDarkMode ? '#374151' : '#e5e7eb',
        borderRadius: '9999px',
        overflow: 'hidden'
      }}>
        <div style={{ 
          width: `${percentage}%`, 
          height: '100%', 
          backgroundColor: color,
          borderRadius: '9999px',
          transition: 'width 1s linear'
        }} />
      </div>
    </div>
  );
};

export default Timer;