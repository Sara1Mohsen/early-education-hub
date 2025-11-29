import React from 'react';
import { Send, Loader2 } from 'lucide-react';
import { QuizOption } from './QuizOption';
import { QuizTimer } from './QuizTimer';

export function QuizQuestion({
  question,
  currentIndex,
  totalQuestions,
  selectedOption,
  onSelectOption,
  onSubmit,
  isSubmitting,
  showFeedback,
  timeLeft
}) {
  const isAnswerSelected = selectedOption !== null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white p-4 sm:p-8 flex flex-col">
      {/* Header */}
      <div className="text-center mx-auto">
        <div className="flex justify-between items-center bg-gray-800/50 backdrop-blur-md rounded-2xl p-4">
          <QuizTimer timeLeft={timeLeft} totalTime={question.timeLimit} />
          
          <div className="text-center ">
            <div className="text-sm text-gray-400 mb-1">السؤال</div>
            <div className="text-2xl font-bold text-yellow-400">
              {currentIndex + 1} / {totalQuestions}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-2 w-full max-w-5xl mx-auto flex flex-col justify-center">
        {/* Question Type Badge */}
        <div className="mb-6 flex justify-center">
          <span className="bg-purple-500/30 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold">
            {question.type === 'true-false' ? '✓ صح أو خطأ' : ' اختيار من متعدد'}
          </span>
        </div>

        {/* Question */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 leading-relaxed">
          {question.question}
        </h1>

        {/* Options */}
        <div className={`grid gap-4 sm:gap-6 mb-10 ${
          question.type === 'true-false' 
            ? 'grid-cols-1 max-w-2xl mx-auto' 
            : 'grid-cols-1 md:grid-cols-2'
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
        <div className="flex justify-center align-middle">
          <button
            onClick={onSubmit}
            disabled={!isAnswerSelected || isSubmitting}
            className={`
              flex items-center justify-center gap-3
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
                <Loader2 className="w-6 h-6 animate-spin" />
                <span>جاري الإرسال...</span>
              </>
            ) : (
              <>
                <span>إرسال الإجابة</span>
                <Send className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}