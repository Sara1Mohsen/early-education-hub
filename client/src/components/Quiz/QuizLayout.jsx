import React from 'react';
import '../index.css';
export function QuizLayout({ children }) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}