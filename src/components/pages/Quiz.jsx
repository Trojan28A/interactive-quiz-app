import React, { useState, useEffect } from 'react';
import QuestionCard from '../ui/QuestionCard';
import Timer from '../ui/Timer';
import quizData from '../../data/quizData';

const Quiz = ({ navigateTo, params, isDarkMode }) => {
  const { quizId } = params;
  const quiz = quizData.find(q => q.id === quizId) || quizData[0];
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [timePerQuestion] = useState(quiz.timePerQuestion || 15);
  const [startTime] = useState(Date.now());
  const [answers, setAnswers] = useState([]);
  
  const currentQuestion = quiz.questions[currentQuestionIndex];
  
  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };
  
  const handleNextQuestion = () => {
    // Calculate score based on correctness and time
    if (selectedOption === currentQuestion.correctAnswer) {
      // Add points for correct answer
      const basePoints = 100;
      setScore(prevScore => prevScore + basePoints);
    }
    
    // Save answer
    setAnswers(prev => [...prev, {
      questionId: currentQuestion.id,
      question: currentQuestion.question,
      selectedOption,
      correctAnswer: currentQuestion.correctAnswer,
      isCorrect: selectedOption === currentQuestion.correctAnswer
    }]);
    
    // Move to next question or finish quiz
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedOption(null);
    } else {
      // Quiz completed
      const timeTaken = Math.floor((Date.now() - startTime) / 1000);
      navigateTo('result', { 
        quizId, 
        score, 
        timeTaken,
        answers: [...answers, {
          questionId: currentQuestion.id,
          question: currentQuestion.question,
          selectedOption,
          correctAnswer: currentQuestion.correctAnswer,
          isCorrect: selectedOption === currentQuestion.correctAnswer
        }]
      });
    }
  };
  
  const handleTimeUp = () => {
    // If time is up and no option selected, move to next question
    if (!selectedOption) {
      handleNextQuestion();
    }
  };
  
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '2rem'
      }}>
        <h1 style={{ 
          fontSize: '1.875rem',
          fontWeight: 'bold',
          color: isDarkMode ? 'white' : '#1f2937'
        }}>
          {quiz.title}
        </h1>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1rem'
        }}>
          <span style={{ 
            color: isDarkMode ? '#d1d5db' : '#4b5563',
            fontWeight: '500'
          }}>
            Score: <span style={{ color: '#2563eb', fontWeight: '600' }}>{score}</span>
          </span>
          <span style={{ 
            color: isDarkMode ? '#d1d5db' : '#4b5563',
            fontWeight: '500'
          }}>
            Question: <span style={{ color: '#2563eb', fontWeight: '600' }}>{currentQuestionIndex + 1}/{quiz.questions.length}</span>
          </span>
        </div>
      </div>
      
      <Timer 
        initialTime={timePerQuestion} 
        onTimeUp={handleTimeUp} 
        isDarkMode={isDarkMode} 
      />
      
      <QuestionCard 
        question={currentQuestion.question}
        options={currentQuestion.options}
        onSelectOption={handleSelectOption}
        selectedOption={selectedOption}
        isDarkMode={isDarkMode}
      />
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginTop: '2rem'
      }}>
        <button 
          onClick={handleNextQuestion}
          disabled={!selectedOption}
          style={{
            backgroundColor: selectedOption ? '#2563eb' : '#93c5fd',
            color: 'white',
            fontWeight: '600',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.375rem',
            border: 'none',
            cursor: selectedOption ? 'pointer' : 'not-allowed',
            transition: 'background-color 0.2s'
          }}
        >
          {currentQuestionIndex < quiz.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
        </button>
      </div>
    </div>
  );
};

export default Quiz;