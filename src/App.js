import { useState, useEffect } from "react";
import QuizContainer from "./components/QuizContainer";
import ResultsContainer from "./components/ResultsContainer";
import { questionsData } from "./utilities/questions";

function App() {
  const [questions, setQuestions] = useState([ ...questionsData]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [hasQuizFinished, setHasQuizFinished] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (currentQuestionIndex < questions.length) {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  const getNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setHasQuizFinished(true);
    }
  };

  const restart = () => {
    setHasQuizFinished(false);
    setScore(0);
    setQuestions([ ...questionsData ]);
    console.log(questions)
    setCurrentQuestionIndex(0);
  };

  return (
    <div className="h-screen bg-purple-pattern bg-cover bg-center flex items-center justify-center font-poppins">
      <div className="h-auto w-3/12">
        <h1 className="uppercase text-white font-bold text-2xl mb-2">
          Country quiz
        </h1>
        {hasQuizFinished ? (
          <ResultsContainer score={score} restart={restart} />
        ) : (
          <QuizContainer
            question={currentQuestion}
            score={score}
            setScore={setScore}
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
            getNextQuestion={getNextQuestion}
          />
        )}
      </div>
    </div>
  );
}

export default App;
