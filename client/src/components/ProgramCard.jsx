// src/components/ProgramCard.jsx
import React from 'react';

export default function ProgramCard({ program, onClick }) {
  const handleClick = () => {
    if (onClick) onClick(program);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        cursor: 'pointer',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(12px)',
        borderRadius: '24px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        transform: 'scale(1)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'right'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.03)';
        e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
      }}
    >
      {/* Image Section */}
      <div style={{
        height: '200px',
        width: '100%',
        background: 'linear-gradient(to bottom, #1a0b2e, #0f0719)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}>
        {program.image ? (
          <img
            src={program.image}
            alt={program.name}
            style={{
              width: '100%',
              height: '100%',
              // objectFit: 'contain',
              borderRadius: '12px'
            }}
          />
        ) : (
          <div style={{ fontSize: '48px', color: '#9ca3af' }}>🎨</div>
        )}
      </div>

      {/* Content Section */}
      <div style={{
        padding: '1.5rem',
        width: '100%',
        textAlign: 'right'
      }}>
        {/* Chapter Badge */}
        <div style={{
          backgroundColor: program.accentColor + '30',
          color: program.accentColor,
          fontSize: '0.875rem',
          fontWeight: '600',
          padding: '0.3rem 0.75rem',
          borderRadius: '12px',
          marginBottom: '0.75rem',
          display: 'inline-block'
        }}>
          {program.chapter}
        </div>

        {/* Title */}
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 'bold',
          color: '#fff',
          marginBottom: '0.5rem',
          lineHeight: '1.3'
        }}>
          {program.name}
        </h3>

        {/* Description */}
        <p style={{
          fontSize: '0.9rem',
          color: '#d1d5db',
          marginBottom: '1rem',
          lineHeight: '1.5'
        }}>
          {program.description}
        </p>

        {/* Footer: Level & Duration */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.875rem'
        }}>
          {/* Level Badge */}
          <span style={{
            background: program.accentColor + '20',
            color: program.accentColor,
            padding: '0.25rem 0.75rem',
            borderRadius: '12px',
            fontWeight: '600'
          }}>
            📚 {program.level}
          </span>

          {/* Duration */}
          <span style={{
            color: '#9ca3af',
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '0.25rem 0.75rem',
            borderRadius: '12px',
            fontSize: '0.875rem'
          }}>
            ⏱️ {program.duration}
          </span>
        </div>

        {/* Quiz Button */}
        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick?.(program);
            }}
            style={{
              background: 'linear-gradient(to right, #4f46e5, #7e22ce)',
              color: '#fff',
              padding: '0.75rem 1.5rem',
              borderRadius: '50px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 0 30px rgba(79, 70, 229, 0.5)',
              transition: 'transform 0.2s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            {/* <span style={{ fontSize: '1.2rem' }}>🎯</span> */}
            <span>ابدأ <pr>   </pr> البرنامج</span>
          </button>
        </div>
      </div>
    </div>
  );
}