import React from 'react';

function QuizQuestion({ question, options, onAnswer }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      <div className="grid grid-cols-1 gap-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuizQuestion;