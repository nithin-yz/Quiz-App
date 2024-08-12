import React from 'react';
import bg from "./../assets/mystery-box-collage.jpg"

export default function StartGame({ onStartQuiz }) {
  return (
    <div style={{ backgroundImage: `url(${bg})`,backgroundPosition:"center",backgroundSize:"cover" }} CD className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Quiz App</h1>
        <p className="text-lg mb-8 text-gray-600">
          Test your knowledge with our exciting quiz!
        </p>
        <button 
          onClick={onStartQuiz}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}
