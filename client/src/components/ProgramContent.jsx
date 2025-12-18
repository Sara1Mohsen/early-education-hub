import React, { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, Image, Loader, X, Clock, Award, CheckCircle, XCircle } from 'lucide-react';


// ✅ Import الأسئلة
import {
  BEGINNER_QUIZ,
  INTERMEDIATE_QUIZ,
  ADVANCED_QUIZ,
} from '../data/quizQuestionsByLevel.js';

// ✅ Import محتوى كل البرامج من ملف JavaScript
import { PROGRAM_CONTENT } from '../data/programContent.js';

const ALL_PROGRAMS_CONTENT = PROGRAM_CONTENT;

// دوال مساعدة
const getLevelInEnglish = (arabicLevel) => {
  const levelMap = {
    'مبتدئ': 'beginner',
    'متوسط': 'intermediate',
    'متقدم': 'advanced'
  };
  return levelMap[arabicLevel] || 'beginner';
};

const getQuizByLevel = (level) => {
  const levelInEnglish = getLevelInEnglish(level);
  
  switch (levelInEnglish) {
    case 'beginner':
      return BEGINNER_QUIZ;
    case 'intermediate':
      return INTERMEDIATE_QUIZ;
    case 'advanced':
      return ADVANCED_QUIZ;
    default:
      return BEGINNER_QUIZ;
  }
};


// Quiz Modal Component
function QuizModal({ level, onClose }) {
  const questions = getQuizByLevel(level);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(questions[0]?.timeLimit || 30);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!showResult && !showFeedback && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showFeedback) {
      handleSubmit();
    }
  }, [timeLeft, showFeedback, showResult]);

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setShowFeedback(true);

    const isCorrect = selectedOption?.isCorrect || false;
    if (isCorrect) {
      setScore(score + 1);
    }

    await new Promise(resolve => setTimeout(resolve, 1500));

    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
      setSelectedOption(null);
      setShowFeedback(false);
      setIsSubmitting(false);
      setTimeLeft(questions[nextIndex].timeLimit || 30);
    } else {
      setShowResult(true);
      setIsSubmitting(false);
    }
  };

  if (showResult) {
    const percentage = (score / questions.length) * 100;
    const passed = percentage >= 70;

    return (
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-8">
          <div className="text-center">
            <div className="mb-6">
              {passed ? (
                <Award className="w-24 h-24 mx-auto text-yellow-500" />
              ) : (
                <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-4xl">📚</span>
                </div>
              )}
            </div>
            
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {passed ? '🎉 مبروك! نجحت' : '💪 حاول مرة أخرى'}
            </h2>
            
            <div className="mb-6">
              <div className="text-6xl font-bold text-blue-600 mb-2">
                {score}/{questions.length}
              </div>
              <p className="text-xl text-gray-600">
                نسبة النجاح: {percentage.toFixed(0)}%
              </p>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-lg transition-all"
            >
              إغلاق
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-t-3xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 left-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-all"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            اختبار نهاية البرنامج - {level}
          </h2>
          
          <div className="flex justify-between items-center text-white">
            <span>السؤال {currentIndex + 1} من {questions.length}</span>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <Clock className="w-5 h-5" />
              <span className="text-xl font-bold">{timeLeft}s</span>
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-200 h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">
            {currentQuestion.question}
          </h3>

          <div className="space-y-4">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedOption === option;
              const showCorrect = showFeedback && option.isCorrect;
              const showWrong = showFeedback && isSelected && !option.isCorrect;

              return (
                <button
                  key={idx}
                  onClick={() => !selectedOption && setSelectedOption(option)}
                  disabled={selectedOption !== null}
                  className={`w-full p-5 rounded-xl text-right font-semibold transition-all flex items-center justify-between ${
                    showCorrect
                      ? 'bg-green-100 border-2 border-green-500 text-green-700'
                      : showWrong
                      ? 'bg-red-100 border-2 border-red-500 text-red-700'
                      : isSelected
                      ? 'bg-blue-100 border-2 border-blue-500 text-blue-700'
                      : 'bg-gray-50 border-2 border-gray-200 hover:border-blue-300 hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <span>{option.text}</span>
                  {showCorrect && <CheckCircle className="w-6 h-6" />}
                  {showWrong && <XCircle className="w-6 h-6" />}
                </button>
              );
            })}
          </div>

          {selectedOption && !showFeedback && (
            <button
              onClick={handleSubmit}
              className="mt-8 w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>تأكيد الإجابة</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// Main Component
export default function ProgramContent({ program, onBack }) {
  const [showQuiz, setShowQuiz] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔍 Mapping أسماء البرامج
  const programNameMapping = {
    "برنامج Blender": "Blender",
    "Blender": "Blender",
    " Adobe Aero": " Adobe Aero",
    "Adobe Aero": "برنامج Adobe Aero",
    "برنامج المبتدئين": "برنامج المبتدئين",
    "برنامج المتوسطين": "برنامج المتوسطين",
    "برنامج المتقدمين": "برنامج المتقدمين"
  };

  const mappedName = programNameMapping[program.title] || program.title;
  const programContent = ALL_PROGRAMS_CONTENT[mappedName];

  useEffect(() => {
    if (!programContent) {
      setError(`المحتوى غير متوفر للبرنامج: ${program.title}`);
    }
    setLoading(false);
  }, [program.title, programContent]);

  // Loading State
  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #000, #1a0b2e)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        direction: 'rtl'
      }}>
        <div style={{ textAlign: 'center' }}>
          <Loader style={{ width: '48px', height: '48px', color: '#a855f7', animation: 'spin 1s linear infinite' }} />
          <p style={{ fontSize: '1.5rem', color: '#d1d5db', marginTop: '1rem' }}>جاري تحميل المحتوى...</p>
        </div>
      </div>
    );
  }

  // Error State
  if (error || !programContent) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #000, #1a0b2e)',
        padding: '2rem',
        direction: 'rtl'
      }}>
        <button
          onClick={onBack}
          style={{
            marginBottom: '2rem',
            background: '#fff',
            padding: '0.75rem 1.5rem',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1rem',
            fontWeight: '900',
            cursor: 'pointer',
            // hover: '#1a0b2e' 
          }}
        >
          <ArrowRight size={16} />
          <span>رجوع للبرامج</span>
        </button>

        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          background: '#fef3c7',
          border: '2px solid #fbbf24',
          borderRadius: '24px',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '1rem' }}>⚠️</div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#92400e', marginBottom: '0.5rem' }}>
            المحتوى غير متوفر
          </h2>
          <p style={{ color: '#78350f', marginBottom: '1rem' }}>
            {error || `المحتوى التعليمي للبرنامج "${program.title}" غير متوفر حالياً`}
          </p>
          <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1.5rem' }}>
            تأكد من إضافة محتوى البرنامج في ملف programContent.js
          </p>
          <button
            onClick={onBack}
            style={{
              background: '#f59e0b',
              color: '#fff',
              padding: '0.75rem 1.5rem',
              borderRadius: '12px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            العودة للبرامج
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #000, #1a0b2e)',
      padding: '2rem',
      direction: 'rtl',
      position: 'relative'
    }}>
      {/* Back Button */}
      <button
        onClick={onBack}
        style={{
          background: '#fff',
          padding: '0.75rem 1.5rem',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '1rem',
          fontWeight: '600',
          cursor: 'pointer',
          marginBottom: '2rem'
        }}
      >
        <ArrowRight size={16} />
        <span>رجوع للبرامج</span>
      </button>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Program Header */}
        <div style={{
          background: '#fff',
          borderRadius: '24px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
          padding: '2rem',
          textAlign: 'center',
          marginBottom: '2rem',
          width: '100%'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1rem'
          }}>
            {program.title}
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#6b7280',
            marginBottom: '1.5rem'
          }}>
            {program.description}
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <span style={{
              background: '#dbeafe',
              color: '#2563eb',
              padding: '0.5rem 1rem',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: '600'
            }}>
              📚 {program.level}
            </span>
            <span style={{
              background: '#f0fdf4',
              color: '#059669',
              padding: '0.5rem 1rem',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: '600'
            }}>
              ⏱️ {program.duration}
            </span>
          </div>
        </div>

        {/* Content Sections */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {programContent.sections?.map((section, index) => (
            <div key={index} style={{
              background: '#fff',
              borderRadius: '24px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              padding: '2rem',
              width: '100%'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem'
              }}>
                <BookOpen style={{ width: '24px', height: '24px', color: '#4f46e5' }} />
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#1f2937'
                }}>
                  {section.title}
                </h2>
              </div>

              <div style={{
                fontSize: '1.1rem',
                color: '#374151',
                lineHeight: '1.8',
                textAlign: 'right'
              }}>
                {section.content}
              </div>

              {/* Centered Image */}
              {section.hasImage && section.imageUrl && (
                <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
                  <img
                    src={section.imageUrl}
                    alt={section.title}
                    style={{
                      borderRadius: '16px',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                      maxWidth: '100%',
                      height: 'auto'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}

              {/* Image Placeholder */}
              {section.hasImage && !section.imageUrl && (
                <div style={{
                  marginTop: '2rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    border: '2px dashed #d1d5db',
                    borderRadius: '16px',
                    padding: '2rem',
                    background: '#f9fafb',
                    maxWidth: '300px',
                    textAlign: 'center'
                  }}>
                    <Image style={{ width: '48px', height: '48px', color: '#9ca3af', marginBottom: '1rem' }} />
                    <p style={{ fontWeight: '600', color: '#4b5563', fontSize: '1.1rem' }}>
                      {section.imagePlaceholder}
                    </p>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                      الصورة غير متوفرة حالياً
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quiz Button */}
        {program.level && (
          <div style={{
            marginTop: '3rem',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <button
              onClick={() => setShowQuiz(true)}
              style={{
                background: 'linear-gradient(to right, #4f46e5, #7e22ce)',
                color: '#fff',
                padding: '1rem 2rem',
                borderRadius: '50px',
                border: 'none',
                fontSize: '1.125rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 0 30px rgba(79, 70, 229, 0.5)'
              }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              <span style={{ fontSize: '1.5rem' }}>🏁</span>
              <span>أبدأ اختبار نهاية البرنامج</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}