import React, { useState, useEffect } from 'react';
import leaderboardData from '../../data/leaderboardData';

const Leaderboard = ({ navigateTo, isDarkMode, params = {} }) => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [totalParticipants, setTotalParticipants] = useState(0);
  const [userRank, setUserRank] = useState(null);
  
  useEffect(() => {
    // Load leaderboard data from localStorage or use the default data
    const storedLeaderboard = localStorage.getItem('quizzySparkLeaderboard');
    let leaderboardEntries = storedLeaderboard ? JSON.parse(storedLeaderboard) : leaderboardData;
    
    // Sort leaderboard data by score (highest first)
    leaderboardEntries = [...leaderboardEntries].sort((a, b) => b.score - a.score);
    
    setLeaderboard(leaderboardEntries);
    setTotalParticipants(leaderboardEntries.length);
    
    // If we have a recently submitted score (from params), find the user's rank
    if (params.recentSubmission) {
      const { playerName } = params.recentSubmission;
      const rank = leaderboardEntries.findIndex(entry => entry.name === playerName) + 1;
      setUserRank(rank);
    }
  }, [params]);
  
  // Get only top 10 for display
  const topTenLeaderboard = leaderboard.slice(0, 10);
  
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 1rem' }}>
      <div style={{
        backgroundColor: isDarkMode ? '#1f2937' : 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        padding: '2rem',
        overflow: 'hidden'
      }}>
        <h1 style={{ 
          fontSize: '2rem',
          fontWeight: 'bold',
          color: isDarkMode ? 'white' : '#1f2937',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          Leaderboard
        </h1>
        
        <div style={{ overflowX: 'auto' }}>
          <table style={{ 
            width: '100%',
            borderCollapse: 'collapse'
          }}>
            <thead>
              <tr style={{ 
                backgroundColor: isDarkMode ? '#374151' : '#f3f4f6',
                borderBottom: `1px solid ${isDarkMode ? '#4b5563' : '#e5e7eb'}`
              }}>
                <th style={{ 
                  padding: '1rem',
                  textAlign: 'left',
                  color: isDarkMode ? 'white' : '#1f2937',
                  fontWeight: '600'
                }}>
                  Rank
                </th>
                <th style={{ 
                  padding: '1rem',
                  textAlign: 'left',
                  color: isDarkMode ? 'white' : '#1f2937',
                  fontWeight: '600'
                }}>
                  Name
                </th>
                <th style={{ 
                  padding: '1rem',
                  textAlign: 'left',
                  color: isDarkMode ? 'white' : '#1f2937',
                  fontWeight: '600'
                }}>
                  Quiz
                </th>
                <th style={{ 
                  padding: '1rem',
                  textAlign: 'left',
                  color: isDarkMode ? 'white' : '#1f2937',
                  fontWeight: '600'
                }}>
                  Score
                </th>
                <th style={{ 
                  padding: '1rem',
                  textAlign: 'left',
                  color: isDarkMode ? 'white' : '#1f2937',
                  fontWeight: '600'
                }}>
                  Time
                </th>
                <th style={{ 
                  padding: '1rem',
                  textAlign: 'left',
                  color: isDarkMode ? 'white' : '#1f2937',
                  fontWeight: '600'
                }}>
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {topTenLeaderboard.map((entry, index) => (
                <tr 
                  key={entry.id}
                  style={{ 
                    backgroundColor: index % 2 === 0 
                      ? (isDarkMode ? '#1f2937' : 'white')
                      : (isDarkMode ? '#374151' : '#f9fafb'),
                    borderBottom: `1px solid ${isDarkMode ? '#4b5563' : '#e5e7eb'}`,
                    // Highlight the user's row if it's in the top 10
                    ...(userRank && userRank === index + 1 ? {
                      backgroundColor: isDarkMode ? 'rgba(37, 99, 235, 0.2)' : 'rgba(219, 234, 254, 0.8)',
                      fontWeight: '600'
                    } : {})
                  }}
                >
                  <td style={{ 
                    padding: '1rem',
                    color: isDarkMode ? 'white' : '#1f2937',
                    fontWeight: index < 3 ? '600' : '400'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      {index === 0 && (
                        <span style={{ 
                          color: '#FCD34D',
                          fontSize: '1.25rem'
                        }}>
                          🏆
                        </span>
                      )}
                      {index === 1 && (
                        <span style={{ 
                          color: '#94A3B8',
                          fontSize: '1.25rem'
                        }}>
                          🥈
                        </span>
                      )}
                      {index === 2 && (
                        <span style={{ 
                          color: '#D97706',
                          fontSize: '1.25rem'
                        }}>
                          🥉
                        </span>
                      )}
                      {index + 1}
                    </div>
                  </td>
                  <td style={{ 
                    padding: '1rem',
                    color: isDarkMode ? 'white' : '#1f2937',
                    fontWeight: index < 3 ? '600' : '400'
                  }}>
                    {entry.name}
                  </td>
                  <td style={{ 
                    padding: '1rem',
                    color: isDarkMode ? '#d1d5db' : '#4b5563'
                  }}>
                    {entry.quizTitle}
                  </td>
                  <td style={{ 
                    padding: '1rem',
                    color: '#2563eb',
                    fontWeight: '600'
                  }}>
                    {entry.score}
                  </td>
                  <td style={{ 
                    padding: '1rem',
                    color: isDarkMode ? '#d1d5db' : '#4b5563'
                  }}>
                    {entry.timeTaken}
                  </td>
                  <td style={{ 
                    padding: '1rem',
                    color: isDarkMode ? '#d1d5db' : '#4b5563'
                  }}>
                    {entry.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Show user's rank if not in top 10 */}
        {userRank && userRank > 10 && (
          <div style={{
            backgroundColor: isDarkMode ? 'rgba(37, 99, 235, 0.2)' : 'rgba(219, 234, 254, 0.8)',
            padding: '1rem',
            borderRadius: '0.375rem',
            marginTop: '1.5rem',
            textAlign: 'center',
            color: isDarkMode ? 'white' : '#1f2937',
            fontWeight: '500'
          }}>
            <p>You're ranked #{userRank} out of {totalParticipants} participants.</p>
          </div>
        )}
        
        <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          marginTop: '2rem'
        }}>
          <button
            onClick={() => navigateTo('home')}
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              fontWeight: '600',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.375rem',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;