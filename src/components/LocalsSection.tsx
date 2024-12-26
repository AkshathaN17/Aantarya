import React, { useState } from 'react';
import { quizQuestions, type QuizQuestion } from '../data/quizData';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react';

const LocalsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showFact, setShowFact] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const categories = Array.from(new Set(quizQuestions.map((q) => q.category)));
  const filteredQuestions = quizQuestions.filter((q) => q.category === selectedCategory);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowFact(false);
    setQuizComplete(false);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(answerIndex);
    if (answerIndex === filteredQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    setShowFact(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowFact(false);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setSelectedCategory(null);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowFact(false);
    setQuizComplete(false);
  };

  const getFeedbackMessage = () => {
    const percentage = (score / filteredQuestions.length) * 100;
    if (percentage === 100) return "ಅದ್ಭುತ! (Wonderful!) Perfect score!";
    if (percentage >= 80) return "ಬಹಳ ಒಳ್ಳೆಯದು! (Very good!) Great knowledge!";
    if (percentage >= 60) return "ಒಳ್ಳೆಯದು! (Good!) You know your stuff!";
    return "ಪರವಾಗಿಲ್ಲ! (Not bad!) Keep learning!";
  };

  if (!selectedCategory) {
    return (
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-earth mb-8">Embark on a Quiz Journey</h2>
        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 shadow-sm">
          <ul className="space-y-4">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => handleCategorySelect(category)}
                  className="w-full px-4 py-2 bg-sage text-cream rounded-md hover:bg-sage/90 transition-colors"
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (quizComplete) {
    return (
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-earth mb-8">Quiz Complete!</h2>
        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 shadow-sm text-center">
          <h3 className="text-2xl font-bold text-earth mb-4">
            Your Score: {score}/{filteredQuestions.length}
          </h3>
          <p className="text-xl text-earth/80 mb-6">{getFeedbackMessage()}</p>
          <button
            onClick={resetQuiz}
            className="inline-flex items-center px-4 py-2 bg-sage text-cream rounded-md hover:bg-sage/90 transition-colors"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Choose Another Category
          </button>
        </div>
      </div>
    );
  }

  const question = filteredQuestions[currentQuestionIndex];

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold text-earth mb-8">{selectedCategory} Quiz</h2>
      <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 shadow-sm">
        <div className="mb-8">
          <span className="text-sm font-medium text-earth/60">
            Question {currentQuestionIndex + 1} of {filteredQuestions.length}
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
              {currentQuestionIndex === filteredQuestions.length - 1 ? 'Finish' : 'Next'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocalsSection;
