// QuizQuestion.jsx
import React from 'react';
import { Send, Loader2 } from 'lucide-react';
import { QuizOption } from './QuizOption';

export function QuizQuestion({
  question,
  currentIndex,
  totalQuestions,
  selectedOption,
  onSelectOption,
  onSubmit,
  isSubmitting,
  showFeedback
}) {
  const isAnswerSelected = selectedOption !== null;
  
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #000, #1a0b2e)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      direction: 'rtl',
      padding: '2rem'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '800px',
        textAlign: 'right'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(8px)',
            borderRadius: '16px',
            padding: '0.75rem 1.5rem',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <div style={{ fontSize: '0.875rem', color: '#d1d5db', marginBottom: '0.25rem' }}>
              السؤال
            </div>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#fbbf24'
            }}>
              {currentIndex + 1} / {totalQuestions}
            </div>
          </div>
        </div>

        {/* Question Type Badge */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <span style={{
            background: 'rgba(168, 85, 247, 0.3)',
            color: '#a855f7',
            padding: '0.5rem 1rem',
            borderRadius: '12px',
            fontSize: '0.9rem',
            fontWeight: '600'
          }}>
            {question.type === 'true-false' ? '✓ صح أو خطأ' : ' اختيار من متعدد'}
          </span>
        </div>

        {/* Question */}
        <h1 style={{
          fontSize: '1.75rem',
          fontWeight: 'bold',
          color: '#fff',
          marginBottom: '2rem',
          lineHeight: '1.5',
          textAlign: 'center'
        }}>
          {question.question}
        </h1>

        {/* Options */}
        <div style={{
          display: 'grid',
          gap: '1rem',
          justifyContent: 'center',
          gridTemplateColumns: question.type === 'true-false'
            ? '1fr'
            : 'repeat(auto-fit, minmax(150px, 1fr))'
        }}>
          {question.options.map((option, index) => (
            <QuizOption
              key={index}
              option={option}
              index={index}
              isSelected={selectedOption === option}
              isDisabled={selectedOption !== null}
              onClick={onSelectOption}
              showFeedback={showFeedback}
            />
          ))}
        </div>

        {/* Submit Button */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button
            onClick={onSubmit}
            disabled={!isAnswerSelected || isSubmitting}
            style={{
              background: isAnswerSelected && !isSubmitting
                ? 'linear-gradient(to right, #fbbf24, #f59e0b)'
                : 'rgba(150, 150, 150, 0.5)',
              color: '#1f2937',
              padding: '0.75rem 2rem',
              borderRadius: '50px',
              border: 'none',
              fontSize: '1.125rem',
              fontWeight: 'bold',
              cursor: isAnswerSelected && !isSubmitting ? 'pointer' : 'not-allowed',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              boxShadow: isAnswerSelected && !isSubmitting
                ? '0 0 30px rgba(251, 191, 36, 0.5)'
                : 'none',
              transition: 'transform 0.2s ease'
            }}
            onMouseOver={(e) => {
              if (isAnswerSelected && !isSubmitting) {
                e.target.style.transform = 'scale(1.05)';
              }
            }}
            onMouseOut={(e) => {
              if (isAnswerSelected && !isSubmitting) {
                e.target.style.transform = 'scale(1)';
              }
            }}
          >
            {isSubmitting ? (
              <>
                <Loader2 style={{ width: '20px', height: '20px', animation: 'spin 1s linear infinite' }} />
                <span>جاري الإرسال...</span>
              </>
            ) : (
              <>
                <span>إرسال الإجابة</span>
                <Send style={{ width: '20px', height: '20px' }} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}