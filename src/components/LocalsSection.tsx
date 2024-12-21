import React, { useState } from 'react';
import { quizQuestions, type QuizQuestion } from '../data/quizData';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react';

const LocalsSection: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showFact, setShowFact] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    if (answerIndex === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setShowFact(true);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFact(false);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowFact(false);
    setQuizComplete(false);
  };

  const getFeedbackMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage === 100) return "ಅದ್ಭುತ! (Wonderful!) Perfect score!";
    if (percentage >= 80) return "ಬಹಳ ಒಳ್ಳೆಯದು! (Very good!) Great knowledge of Bengaluru!";
    if (percentage >= 60) return "ಒಳ್ಳೆಯದು! (Good!) You know your city well!";
    return "ಪರವಾಗಿಲ್ಲ! (Not bad!) Keep exploring Bengaluru!";
  };

  if (quizComplete) {
    return (
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-earth mb-8">Quiz Complete!</h2>
        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 shadow-sm">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-earth mb-4">
              Your Score: {score}/{quizQuestions.length}
            </h3>
            <p className="text-xl text-earth/80 mb-6">{getFeedbackMessage()}</p>
            <button
              onClick={resetQuiz}
              className="inline-flex items-center px-4 py-2 bg-sage text-cream rounded-md hover:bg-sage/90 transition-colors"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold text-earth mb-8">Test Your Bengaluru Knowledge</h2>
      <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 shadow-sm">
        <div className="mb-8">
          <span className="text-sm font-medium text-earth/60">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </span>
          <h3 className="text-xl font-medium text-earth mt-2">{question.question}</h3>
        </div>

        <div className="space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={selectedAnswer !== null}
              className={`w-full text-left p-4 rounded-lg transition-all ${
                selectedAnswer === null
                  ? 'hover:bg-sage/10 bg-white/30'
                  : selectedAnswer === index
                  ? index === question.correctAnswer
                    ? 'bg-green-100 border-green-500'
                    : 'bg-red-100 border-red-500'
                  : index === question.correctAnswer
                  ? 'bg-green-100 border-green-500'
                  : 'bg-white/30'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {selectedAnswer !== null && (
                  index === question.correctAnswer ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : selectedAnswer === index ? (
                    <XCircle className="w-5 h-5 text-red-500" />
                  ) : null
                )}
              </div>
            </button>
          ))}
        </div>

        {showFact && (
          <div className="mt-6 p-4 bg-sage/10 rounded-lg">
            <p className="text-earth/80 text-sm">{question.fact}</p>
          </div>
        )}

        {selectedAnswer !== null && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleNext}
              className="inline-flex items-center px-4 py-2 bg-sage text-cream rounded-md hover:bg-sage/90 transition-colors"
            >
              {currentQuestion === quizQuestions.length - 1 ? 'Finish' : 'Next'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocalsSection;