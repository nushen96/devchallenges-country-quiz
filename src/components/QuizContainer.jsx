import { useState, useEffect } from "react";
import cardImage from "../resources/images/undraw_adventure_4hum 1.svg";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";

const QuizAnswer = ({ letter, text, status, disabled, checkAnswer }) => {
  let answerBaseStyles = "flex items-center px-3 py-2 rounded-lg ";
  if (disabled) {
    answerBaseStyles += "pointer-events-none ";
  }
  let endIcon = null;
  if (status === "wrong") {
    answerBaseStyles += "bg-red border-transparent text-white";
    endIcon = <FaRegTimesCircle />;
  } else if (status === "correct") {
    answerBaseStyles += "bg-green border-transparent text-white";
    endIcon = <FaRegCheckCircle />;
  } else {
    answerBaseStyles +=
      "border border-primary-light text-primary-light cursor-pointer hover:border-transparent hover:bg-orange hover:text-white";
  }
  return (
    <div className={answerBaseStyles} onClick={() => checkAnswer(letter)}>
      <h3>{letter}</h3>
      <p className="flex-1 pl-5">{text}</p>
      {endIcon}
    </div>
  );
};

const QuizContainer = ({
  question: { _id, label, flag, answers, correctAnswer },
  score,
  setScore,
  getNextQuestion,
}) => {
  const [isAnswered, setIsAnswered] = useState(false);
  const [corrections, setCorrections] = useState({});

  const checkAnswer = (selectedAnswer) => {
    setIsAnswered(true);
    setCorrections((c) => ({ ...c, [correctAnswer]: "correct" }));
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    } else {
      setCorrections((c) => ({ ...c, [selectedAnswer]: "wrong" }));
      console.log({ selectedAnswer, correctAnswer });
    }
  };

  const nextQuestion = () => {
    setIsAnswered(false);
    setCorrections({});
    getNextQuestion();
  };

  return (
    <div className="bg-white pb-14 rounded-xl">
      <div className="relative bottom-16 ml-full flex justify-end">
        <img
          src={cardImage}
          className="h-32 w-32 text-right"
          alt="Card header"
        />
      </div>
      <div className="-mt-16 px-10">
        {flag && (
          <div className="mb-3">
            <img
              className="w-20 h-20"
              src={flag}
              alt={`Question ${_id} flag`}
            />
          </div>
        )}
        <h2 className="text-xl font-bold mb-4 text-primary-dark">{label}</h2>
        <div className="space-y-3">
          {answers.map((answer) => (
            <QuizAnswer
              key={answer.letter}
              letter={answer.letter}
              text={answer.text}
              status={corrections[answer.letter] || null}
              disabled={isAnswered}
              checkAnswer={checkAnswer}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-end mt-10 px-10">
        <button
          className="bg-orange text-white py-2 px-3 rounded-lg text-lg font-bold hover:-translate-y-1 transform"
          onClick={() => nextQuestion()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default QuizContainer;
