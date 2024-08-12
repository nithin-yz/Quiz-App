import React, { useState } from 'react';
import StartGame from './components/StartGame';
import QuizQuestion from './components/QuizQuestion';
import ResultScreen from './components/ResultScreen';
import Timer from './components/Timer';
import bg from "./assets/mystery-box-collage.jpg"


const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars"
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Mark Twain", "Charles Dickens", "William Shakespeare", "Jane Austen"],
    correctAnswer: "William Shakespeare"
  },
  {
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    correctAnswer: "2"
  }
];

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleStartQuiz = () => {
    setGameStarted(true);
  };

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setShowResult(true);
    setTimeout(() => {
      setShowResult(false);
      setSelectedAnswer(null);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizEnded(true);
      }
    }, 5000);
  };

  const handleTimeout = () => {
    setShowResult(true);
    setTimeout(() => {
      setShowResult(false);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizEnded(true);
      }
    }, 5000);
  };

  const restartQuiz = () => {
    setGameStarted(false);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setQuizEnded(false);
  };

  if (!gameStarted) {
    return <StartGame onStartQuiz={handleStartQuiz} />;
  }

  return (
    <div   style={{ backgroundImage: `url(${bg})`,backgroundPosition:"center",backgroundSize:"cover" }}  className="min-h-screen  flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        {!quizEnded ? (
          <>
            <h1 className="text-3xl font-bold text-center mb-6">Quiz App</h1>
            {showResult ? (
              <ResultScreen 
                correct={selectedAnswer === questions[currentQuestion].correctAnswer}
                correctAnswer={questions[currentQuestion].correctAnswer}
              />
            ) : (
              <>
                <QuizQuestion
                  question={questions[currentQuestion].question}
                  options={questions[currentQuestion].options}
                  onAnswer={handleAnswer}
                />
                <Timer onTimeout={handleTimeout} />
              </>
            )}
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
            <p className="text-xl mb-4">Your score: {score} out of {questions.length}</p>
            <button 
              onClick={restartQuiz}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;