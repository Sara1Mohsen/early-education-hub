import React, { useState, useEffect, useCallback } from 'react';
import { QuizStart } from '../components/Quiz/QuizStart';
import { QuizQuestion } from '../components/Quiz/QuizQuestion';
import { QuizResult } from '../components/Quiz/QuizResult';
import { QUIZ_QUESTIONS } from '../data/quizQuestions';

export default function QuizPage() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeLeft, setTimeLeft] = useState(QUIZ_QUESTIONS[0].timeLimit);
  const [timerRunning, setTimerRunning] = useState(false);

  // Timer Logic
  useEffect(() => {
    if (quizStarted && currentQuestionIndex < QUIZ_QUESTIONS.length && timerRunning && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && timerRunning) {
    //   handleSubmitAnswer();
    }
  }, [timeLeft, timerRunning, quizStarted, currentQuestionIndex]);

  const startQuiz = useCallback(() => {
    setQuizStarted(true);
    setTimerRunning(true);
    setTimeLeft(QUIZ_QUESTIONS[0].timeLimit);
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

    // Show feedback for 1.5 seconds
    await new Promise(resolve => setTimeout(resolve, 1500));

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < QUIZ_QUESTIONS.length) {
      setCurrentQuestionIndex(nextIndex);
      setSelectedOption(null);
      setIsSubmitting(false);
      setShowFeedback(false);
      setTimeLeft(QUIZ_QUESTIONS[nextIndex].timeLimit);
      setTimerRunning(true);
    } else {
      setShowResult(true);
      setIsSubmitting(false);
    }
  }, [selectedOption, currentQuestionIndex, timeLeft]);

  if (!quizStarted) {
    return <QuizStart onStart={startQuiz} />;
  }

  if (showResult) {
    const finalScore = selectedOption?.isCorrect ? score : score;
    const level = finalScore >= QUIZ_QUESTIONS.length * 0.7 ? 'advanced' : 
        finalScore >= QUIZ_QUESTIONS.length * 0.5 ? 'intermediate' : 'beginner';
    
    return (
      <QuizResult
        score={finalScore}
        totalQuestions={QUIZ_QUESTIONS.length}
        level={level}
        onRestart={startQuiz}
      />
    );
  }

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];

  return (
    <QuizQuestion
      question={currentQuestion}
      currentIndex={currentQuestionIndex}
      totalQuestions={QUIZ_QUESTIONS.length}
      selectedOption={selectedOption}
      onSelectOption={handleSelectOption}
      onSubmit={handleSubmitAnswer}
      isSubmitting={isSubmitting}
      showFeedback={showFeedback}
      timeLeft={timeLeft}
    />
  );
}