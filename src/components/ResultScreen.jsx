import React from 'react';

function ResultScreen({ correct, correctAnswer }) {
  return (
    <div className="text-center">
      <h2 className={`text-2xl font-bold mb-4 ${correct ? 'text-green-500' : 'text-red-500'}`}>
        {correct ? 'Correct!' : 'Wrong!'}
      </h2>
      {!correct && (
        <p className="text-lg">The correct answer was: {correctAnswer}</p>
      )}
    </div>
  );
}

export default ResultScreen;