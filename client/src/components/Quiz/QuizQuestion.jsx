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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white p-4 sm:p-8 flex items-center justify-center">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gray-800/50 backdrop-blur-md rounded-2xl px-6 py-3">
            <div className="text-sm text-gray-400 mb-1">السؤال</div>
            <div className="text-2xl font-bold text-yellow-400">
              {currentIndex + 1} / {totalQuestions}
            </div>
          </div>
        </div>

        {/* Question Type Badge */}
        <div className="mb-6 text-center">
          <span className="bg-purple-500/30 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold">
            {question.type === 'true-false' ? '✓ صح أو خطأ' : ' اختيار من متعدد'}
          </span>
        </div>

        {/* Question */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 leading-relaxed">
          {question.question}
        </h1>

        {/* Options */}
      <div className={`grid gap-3 sm:gap-6 justify-items-center ${
        question.type === 'true-false' 
          ? 'grid-cols-1 mx-auto w-full' 
          : 'grid-cols-2 md:grid-cols-4'
        }`}>
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
        <div className="text-center">
          <button
            onClick={onSubmit}
            disabled={!isAnswerSelected || isSubmitting}
            className={`
              inline-flex items-center justify-center gap-4
              font-bold text-lg py-4 px-12 rounded-full 
              transition-all duration-300 transform 
              shadow-2xl min-w-[200px]
              ${isAnswerSelected && !isSubmitting
                ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:scale-105 hover:shadow-yellow-400/50'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }
            `}
          >
            {isSubmitting ? (
              <>
                <Loader2 className=" animate-spin" />
                <span>جاري الإرسال...</span>
              </>
            ) : (
              <>
                <span>إرسال الإجابة</span>
                <Send className="" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}