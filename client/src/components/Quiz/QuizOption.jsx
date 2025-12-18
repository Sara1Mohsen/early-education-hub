// QuizOption.jsx
import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

export function QuizOption({ option, isSelected, isDisabled, onClick, showFeedback }) {
  let cardClasses = `
    p-5 md:p-2 rounded-xl transition-all duration-300 cursor-pointer
    text-lg font-medium text-center
    border-4
  `;

  if (showFeedback && isSelected) {
    if (option.isCorrect) {
      cardClasses += ' bg-green-100 border-green-500 text-green-900';
    } else {
      cardClasses += ' bg-red-100 border-red-500 text-red-900';
    }
  } else if (isSelected) {
    cardClasses += ' bg-yellow-100 border-yellow-400 text-gray-900';
  } else if (isDisabled) {
    cardClasses += ' bg-gray-100 border-gray-300 text-gray-500 opacity-50 cursor-not-allowed';
  } else {
    cardClasses += ' bg-white border-gray-200 text-gray-900 hover:border-purple-400 hover:shadow-xl hover:scale-[1.02]';
  }

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '320px',
        margin: '0 auto'
      }}
      className={cardClasses}
      onClick={() => !isDisabled && onClick(option)}
    >
      <p>{option.text}</p>
      
      {showFeedback && isSelected && (
        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
          {option.isCorrect ? (
            <CheckCircle style={{ width: '28px', height: '28px', color: '#16a34a' }} />
          ) : (
            <XCircle style={{ width: '28px', height: '28px', color: '#b91c1c' }} />
          )}
        </div>
      )}
    </div>
  );
}