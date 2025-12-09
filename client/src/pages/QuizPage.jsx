import React, { useState, useEffect, useCallback } from 'react';
import { QuizStart } from '../components/Quiz/QuizStart';
import { QuizQuestion } from '../components/Quiz/QuizQuestion';
import { QuizResult } from '../components/Quiz/QuizResult';

// ✅ استيراد صحيح من الملفات التي تحتوي عليها
import { QUIZ_QUESTIONS as LEVEL_ASSESSMENT_QUESTIONS } from '../data/quizQuestions.js'; // ← هنا
import {
  BEGINNER_QUIZ,
  INTERMEDIATE_QUIZ,
  ADVANCED_QUIZ,
  QUIZ_LEVELS
} from '../data/quizQuestionsByLevel.js'; 

export default function QuizPage({ type = 'assessment', level = 'beginner' }) {
  let quizQuestions;
  let quizTitle = '';

  if (type === 'assessment') {
    quizQuestions = LEVEL_ASSESSMENT_QUESTIONS;
    quizTitle = 'اختبار تحديد المستوى';
  } else {
    // نوع الكويز: end-of-program
    switch (level) {
      case 'beginner':
        quizQuestions = BEGINNER_QUIZ;
        quizTitle = 'اختبار نهاية البرنامج - مبتدئ';
        break;
      case 'intermediate':
        quizQuestions = INTERMEDIATE_QUIZ;
        quizTitle = 'اختبار نهاية البرنامج - متوسط';
        break;
      case 'advanced':
        quizQuestions = ADVANCED_QUIZ;
        quizTitle = 'اختبار نهاية البرنامج - متقدم';
        break;
      default:
        quizQuestions = BEGINNER_QUIZ;
        quizTitle = 'اختبار نهاية البرنامج';
    }
  }

  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeLeft, setTimeLeft] = useState(quizQuestions[0]?.timeLimit || 30);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    if (quizStarted && currentQuestionIndex < quizQuestions.length && timerRunning && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && timerRunning) {
      handleSubmitAnswer();
    }
  }, [timeLeft, timerRunning, quizStarted, currentQuestionIndex]);

  const startQuiz = useCallback(() => {
    setQuizStarted(true);
    setTimerRunning(true);
    setTimeLeft(quizQuestions[0].timeLimit);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
  }, []);

  const handleSelectOption = (option) => {
    if (!selectedOption && !isSubmitting) {
      setSelectedOption(option);
    }
  };

  const handleSubmitAnswer = useCallback(async () => {
    if (!selectedOption && timeLeft > 0) return;

    setTimerRunning(false);
    setIsSubmitting(true);
    setShowFeedback(true);

    const isCorrect = selectedOption?.isCorrect || false;
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }

    await new Promise(resolve => setTimeout(resolve, 1500));

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < quizQuestions.length) {
      setCurrentQuestionIndex(nextIndex);
      setSelectedOption(null);
      setIsSubmitting(false);
      setShowFeedback(false);
      setTimeLeft(quizQuestions[nextIndex].timeLimit);
      setTimerRunning(true);
    } else {
      setShowResult(true);
      setIsSubmitting(false);
    }
  }, [selectedOption, currentQuestionIndex, timeLeft]);

  if (!quizStarted) {
    return (
      <QuizStart
        onStart={startQuiz}
        title={quizTitle}
        totalQuestions={quizQuestions.length}
      />
    );
  }

  if (showResult) {
    const finalScore = score;
    const total = quizQuestions.length;
    const percentage = (finalScore / total) * 100;
    let levelStatus;
    if (percentage >= 70) levelStatus = 'advanced';
    else if (percentage >= 50) levelStatus = 'intermediate';
    else levelStatus = 'beginner';

    return (
      <QuizResult
        score={finalScore}
        totalQuestions={total}
        level={levelStatus}
        onRestart={startQuiz}
        isAssessment={type === 'assessment'}
      />
    );
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <QuizQuestion
      question={currentQuestion}
      currentIndex={currentQuestionIndex}
      totalQuestions={quizQuestions.length}
      selectedOption={selectedOption}
      onSelectOption={handleSelectOption}
      onSubmit={handleSubmitAnswer}
      isSubmitting={isSubmitting}
      showFeedback={showFeedback}
      timeLeft={timeLeft}
    />
  );
}