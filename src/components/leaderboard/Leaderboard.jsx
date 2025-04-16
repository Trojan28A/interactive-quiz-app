import React from 'react';

const Leaderboard = ({ leaderboardData }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Leaderboard</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">Rank</th>
              <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">Username</th>
              <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">Quiz</th>
              <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">Score</th>
              <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">Time</th>
              <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">Date</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((entry, index) => (
              <tr key={entry.id} className={index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700'}>
                <td className="px-4 py-2 text-gray-800 dark:text-gray-200">{index + 1}</td>
                <td className="px-4 py-2 text-gray-800 dark:text-gray-200">{entry.username}</td>
                <td className="px-4 py-2 text-gray-800 dark:text-gray-200">{entry.quizCompleted}</td>
                <td className="px-4 py-2 text-gray-800 dark:text-gray-200">{entry.score}</td>
                <td className="px-4 py-2 text-gray-800 dark:text-gray-200">{entry.timeSpent}</td>
                <td className="px-4 py-2 text-gray-800 dark:text-gray-200">{entry.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;