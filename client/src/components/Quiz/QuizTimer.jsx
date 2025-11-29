import React from 'react';
import { Clock } from 'lucide-react';

export function QuizTimer({ timeLeft, totalTime }) {
  const percentage = (timeLeft / totalTime) * 100;
  const isUrgent = timeLeft <= 5;

  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <Clock className={`w-6 h-6 ${isUrgent ? 'text-red-400 animate-pulse' : 'text-yellow-400'}`} />
      </div>
      
      <div className="flex-1 min-w-[100px]">
        <div className="flex items-center justify-between mb-1">
          <span className={`text-2xl font-mono font-bold ${isUrgent ? 'text-red-400' : 'text-yellow-400'}`}>
            {String(timeLeft).padStart(2, '0')}
          </span>
          <span className="text-xs text-gray-400">ثانية</span>
        </div>
        
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-1000 ${
              isUrgent ? 'bg-red-500' : 'bg-yellow-400'
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}