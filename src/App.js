import {useState} from "react"
import QuizContainer from "./components/QuizContainer";
import {questions} from "./utilities/questions"

function App() {
  const [currentQuestion,setCurrentQuestion] = useState(questions[0])
  const [score, setScore] = useState(0)
  
  // const checkAnswer = (givenAnswer) => {
  //   console.log("YAAAAAAAAAA !!!")
  //   currentQuestion.isAnswered = true
  //   const correctAnswerIndex = currentQuestion.answers.findIndex(answer => answer.letter===currentQuestion.correctAnswer)
  //   const givenAnswerIndex = currentQuestion.answers.findIndex(answer => answer.letter===givenAnswer)
  //   if(givenAnswer ===  currentQuestion.correctAnswer) {
  //     setScore(score+1)
  //   } else {
  //     currentQuestion.answers[givenAnswerIndex].status = "wrong"
  //   }
  //   currentQuestion.answers[correctAnswerIndex].status = "correct"
  // }

  return (
    <div className="h-screen bg-purple-pattern bg-cover bg-center flex items-center justify-center font-poppins">
      <div className="h-auto w-3/12">
        <h1 className="uppercase text-white font-bold text-2xl mb-2">
          Country quiz
        </h1>
        <QuizContainer question={currentQuestion} score={score} setScore={setScore}/>
      </div>
    </div>
  );
}

export default App;
