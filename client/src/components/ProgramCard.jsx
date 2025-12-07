// src/components/ProgramCard.jsx
import React from 'react';

export default function ProgramCard({ program, onClick }) {
  const handleClick = () => {
    if (onClick) onClick(program);
  };

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:bg-white/20 hover:shadow-xl hover:shadow-purple-900/30"
    >
      {/* Image Section */}
      <div className="h-48 w-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-4">
        {program.image ? (
          <img
            src={program.image}
            alt={program.name}
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="text-5xl text-gray-500">🎨</div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5 sm:p-6 text-right">
        {/* Chapter Badge */}
        <div
          style={{ backgroundColor: program.accentColor + '30', color: program.accentColor }}
          className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
        >
          {program.chapter}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
          {program.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-300 mb-4 line-clamp-2">
          {program.description}
        </p>

        {/* Footer: Level & Duration */}
        <div className="flex justify-between items-center">
          {/* Level Badge */}
          <span
            style={{ backgroundColor: program.accentColor + '20', color: program.accentColor }}
            className="text-xs font-bold px-3 py-1 rounded-full"
          >
            {program.level}
          </span>

          {/* Duration */}
          <span className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full">
            ⏱️ {program.duration}
          </span>
        </div>
      </div>
    </div>
  );
}