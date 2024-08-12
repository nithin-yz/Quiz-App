import React, { useState, useEffect } from 'react';

function Timer({ onTimeout }) {
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeout();
    }
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, onTimeout]);

  return (
    <div className="text-center mt-4">
      <p className="text-xl font-semibold">Time left: {timeLeft}s</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-linear" 
          style={{ width: `${(timeLeft / 5) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Timer;