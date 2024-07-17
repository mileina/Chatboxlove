import React, { useState } from 'react';

const Question = ({ question, onAnswer }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAnswer(question.id, input);
      setInput('');
    }
  };

  return (
    <div>
      <p>{question.text}</p>
      {question.options ? (
        <div>
          {question.options.map((option, index) => (
            <button key={index} onClick={() => onAnswer(question.id, option)}>
              {option}
            </button>
          ))}
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Question;
