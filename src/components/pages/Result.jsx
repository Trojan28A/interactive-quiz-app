import React, { useState } from 'react';
import quizData from '../../data/quizData';
import leaderboardData from '../../data/leaderboardData';

const Result = ({ navigateTo, params, isDarkMode }) => {
  const { quizId, score, timeTaken, answers } = params;
  const quiz = quizData.find(q => q.id === quizId) || quizData[0];
  
  const [playerName, setPlayerName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const correctAnswers = answers.filter(answer => answer.isCorrect).length;
  const accuracy = Math.round((correctAnswers / answers.length) * 100);
  
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  
  // In the handleSubmitScore function
  const handleSubmitScore = () => {
    if (!playerName.trim()) return;
    
    // Create a new leaderboard entry
    const newEntry = {
      id: Date.now(), // Use timestamp as unique ID
      name: playerName,
      score,
      quizTitle: quiz.title,
      timeTaken: formatTime(timeTaken),
      date: new Date().toISOString().split('T')[0]
    };
    
    // Get existing leaderboard from localStorage or use default
    const storedLeaderboard = localStorage.getItem('quizzySparkLeaderboard');
    const leaderboardEntries = storedLeaderboard 
      ? JSON.parse(storedLeaderboard) 
      : leaderboardData;
    
    // Add the new entry
    leaderboardEntries.push(newEntry);
    
    // Save back to localStorage
    localStorage.setItem('quizzySparkLeaderboard', JSON.stringify(leaderboardEntries));
    
    // Set submitted flag to show success message
    setIsSubmitted(true);
    
    // Navigate to leaderboard after a delay with the user's info
    setTimeout(() => {
      navigateTo('leaderboard', { 
        recentSubmission: {
          playerName,
          score,
          quizTitle: quiz.title
        }
      });
    }, 2000);
  };
  
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
      <div style={{
        backgroundColor: isDarkMode ? '#1f2937' : 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        padding: '2rem',
        marginBottom: '2rem'
      }}>
        <h1 style={{ 
          fontSize: '2rem',
          fontWeight: 'bold',
          color: isDarkMode ? 'white' : '#1f2937',
          textAlign: 'center',
          marginBottom: '1.5rem'
        }}>
          Quiz Results
        </h1>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '2rem',
          position: 'relative'
        }}>
          <div style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#2563eb',
            color: 'white',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            position: 'relative',
            zIndex: 1
          }}>
            {score}
          </div>
          <div style={{
            position: 'absolute',
            top: '-20px',
            width: '60px',
            height: '60px',
            zIndex: 2
          }}>
            <span style={{ fontSize: '3rem' }}>🏆</span>
          </div>
          
          <h2 style={{ 
            fontSize: '1.5rem',
            fontWeight: '600',
            color: isDarkMode ? 'white' : '#1f2937'
          }}>
            {quiz.title}
          </h2>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            backgroundColor: isDarkMode ? '#374151' : '#f3f4f6',
            padding: '1rem',
            borderRadius: '0.375rem',
            textAlign: 'center'
          }}>
            <p style={{ 
              color: isDarkMode ? '#d1d5db' : '#4b5563',
              marginBottom: '0.5rem'
            }}>
              Time Taken
            </p>
            <p style={{ 
              fontSize: '1.25rem',
              fontWeight: '600',
              color: isDarkMode ? 'white' : '#1f2937'
            }}>
              {formatTime(timeTaken)}
            </p>
          </div>
          
          <div style={{
            backgroundColor: isDarkMode ? '#374151' : '#f3f4f6',
            padding: '1rem',
            borderRadius: '0.375rem',
            textAlign: 'center'
          }}>
            <p style={{ 
              color: isDarkMode ? '#d1d5db' : '#4b5563',
              marginBottom: '0.5rem'
            }}>
              Accuracy
            </p>
            <p style={{ 
              fontSize: '1.25rem',
              fontWeight: '600',
              color: isDarkMode ? 'white' : '#1f2937'
            }}>
              {accuracy}%
            </p>
          </div>
          
          <div style={{
            backgroundColor: isDarkMode ? '#374151' : '#f3f4f6',
            padding: '1rem',
            borderRadius: '0.375rem',
            textAlign: 'center'
          }}>
            <p style={{ 
              color: isDarkMode ? '#d1d5db' : '#4b5563',
              marginBottom: '0.5rem'
            }}>
              Correct Answers
            </p>
            <p style={{ 
              fontSize: '1.25rem',
              fontWeight: '600',
              color: isDarkMode ? 'white' : '#1f2937'
            }}>
              {correctAnswers}/{answers.length}
            </p>
          </div>
          
          <div style={{
            backgroundColor: isDarkMode ? '#374151' : '#f3f4f6',
            padding: '1rem',
            borderRadius: '0.375rem',
            textAlign: 'center'
          }}>
            <p style={{ 
              color: isDarkMode ? '#d1d5db' : '#4b5563',
              marginBottom: '0.5rem'
            }}>
              Total Score
            </p>
            <p style={{ 
              fontSize: '1.25rem',
              fontWeight: '600',
              color: isDarkMode ? 'white' : '#1f2937'
            }}>
              {score}
            </p>
          </div>
        </div>
        
        {!isSubmitted ? (
          <div style={{ marginBottom: '1.5rem' }}>
            <label 
              htmlFor="playerName"
              style={{ 
                display: 'block',
                marginBottom: '0.5rem',
                color: isDarkMode ? '#d1d5db' : '#4b5563',
                fontWeight: '500'
              }}
            >
              Enter your name to save your score:
            </label>
            <input
              id="playerName"
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder="Your name"
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '0.375rem',
                border: `1px solid ${isDarkMode ? '#4b5563' : '#d1d5db'}`,
                backgroundColor: isDarkMode ? '#374151' : 'white',
                color: isDarkMode ? 'white' : '#1f2937',
                marginBottom: '1rem'
              }}
            />
            <button
              onClick={handleSubmitScore}
              disabled={!playerName.trim()}
              style={{
                width: '100%',
                backgroundColor: playerName.trim() ? '#2563eb' : '#93c5fd',
                color: 'white',
                fontWeight: '600',
                padding: '0.75rem',
                borderRadius: '0.375rem',
                border: 'none',
                cursor: playerName.trim() ? 'pointer' : 'not-allowed'
              }}
            >
              Save Score
            </button>
          </div>
        ) : (
          <div style={{
            backgroundColor: '#10B981',
            color: 'white',
            padding: '1rem',
            borderRadius: '0.375rem',
            textAlign: 'center',
            marginBottom: '1.5rem'
          }}>
            Score saved successfully! Redirecting to leaderboard...
          </div>
        )}
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          <button
            onClick={() => navigateTo('home')}
            style={{
              flex: '1',
              backgroundColor: isDarkMode ? '#374151' : '#f3f4f6',
              color: isDarkMode ? '#e5e7eb' : '#1f2937',
              fontWeight: '600',
              padding: '0.75rem',
              borderRadius: '0.375rem',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Back to Home
          </button>
          <button
            onClick={() => navigateTo('quiz', { quizId })}
            style={{
              flex: '1',
              backgroundColor: '#2563eb',
              color: 'white',
              fontWeight: '600',
              padding: '0.75rem',
              borderRadius: '0.375rem',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Try Again
          </button>
        </div>
      </div>
      
      <div style={{
        backgroundColor: isDarkMode ? '#1f2937' : 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        padding: '2rem'
      }}>
        <h2 style={{ 
          fontSize: '1.5rem',
          fontWeight: '600',
          color: isDarkMode ? 'white' : '#1f2937',
          marginBottom: '1.5rem'
        }}>
          Answer Review
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {answers.map((answer, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: isDarkMode ? '#374151' : '#f3f4f6',
                padding: '1rem',
                borderRadius: '0.375rem',
                borderLeft: `4px solid ${answer.isCorrect ? '#10B981' : '#EF4444'}`
              }}
            >
              <p style={{ 
                fontWeight: '600',
                color: isDarkMode ? 'white' : '#1f2937',
                marginBottom: '0.5rem'
              }}>
                {index + 1}. {answer.question}
              </p>
              <p style={{ 
                color: answer.isCorrect ? '#10B981' : '#EF4444',
                marginBottom: '0.25rem'
              }}>
                Your answer: {answer.selectedOption}
              </p>
              {!answer.isCorrect && (
                <p style={{ color: '#10B981' }}>
                  Correct answer: {answer.correctAnswer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Result;