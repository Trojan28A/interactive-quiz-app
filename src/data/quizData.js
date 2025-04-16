const quizData = [
  {
    id: 1,
    title: "General Knowledge",
    description: "Test your knowledge on various topics.",
    category: "General",
    difficulty: "Medium",
    timePerQuestion: 15,
    questions: [
      {
        id: 1,
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: "Paris",
      },
      {
        id: 2,
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars",
      },
      {
        id: 3,
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean",
      },
      {
        id: 4,
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        correctAnswer: "Leonardo da Vinci",
      },
      {
        id: 5,
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        correctAnswer: "Au",
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    title: "Science Quiz",
    description: "Challenge yourself with science questions.",
    category: "Science",
    difficulty: "Hard",
    timePerQuestion: 15,
    questions: [
      {
        id: 1,
        question: "What is the chemical symbol for water?",
        options: ["WO", "H2O", "W", "HO"],
        correctAnswer: "H2O",
      },
      {
        id: 2,
        question: "What is the hardest natural substance on Earth?",
        options: ["Platinum", "Diamond", "Titanium", "Quartz"],
        correctAnswer: "Diamond",
      },
      {
        id: 3,
        question: "Which gas makes up the majority of Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Nitrogen",
      },
      {
        id: 4,
        question: "What is the smallest unit of matter?",
        options: ["Atom", "Electron", "Quark", "Molecule"],
        correctAnswer: "Quark",
      },
      {
        id: 5,
        question: "What is the speed of light in a vacuum?",
        options: ["300,000 km/s", "150,000 km/s", "199,792 km/s", "299,792 km/s"],
        correctAnswer: "299,792 km/s",
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    title: "History Trivia",
    description: "Explore historical events and figures.",
    category: "History",
    difficulty: "Easy",
    timePerQuestion: 15,
    questions: [
      {
        id: 1,
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
        correctAnswer: "George Washington",
      },
      {
        id: 2,
        question: "In which year did World War II end?",
        options: ["1943", "1944", "1945", "1946"],
        correctAnswer: "1945",
      },
      {
        id: 3,
        question: "Which ancient civilization built the pyramids?",
        options: ["Romans", "Greeks", "Egyptians", "Mayans"],
        correctAnswer: "Egyptians",
      },
      {
        id: 4,
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        correctAnswer: "William Shakespeare",
      },
      {
        id: 5,
        question: "What year did the Titanic sink?",
        options: ["1910", "1912", "1915", "1920"],
        correctAnswer: "1912",
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1461360228754-6e81c478b882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  }
];

export default quizData;