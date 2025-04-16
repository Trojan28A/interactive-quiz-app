import React from 'react';
import QuizCard from './QuizCard';

const QuizList = ({ quizzes, onStartQuiz, isDarkMode }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '1.5rem'
    }}>
      {quizzes.map(quiz => (
        <QuizCard key={quiz.id} quiz={quiz} onStartQuiz={onStartQuiz} isDarkMode={isDarkMode} />
      ))}
    </div>
  );
};

export default QuizList;