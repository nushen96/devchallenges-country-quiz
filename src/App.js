import QuizContainer from "./components/QuizContainer";
import {questions} from "./utilities/questions"

function App() {
  return (
    <div className="h-screen bg-purple-pattern bg-cover bg-center flex items-center justify-center font-poppins">
      <div className="h-auto w-3/12">
        <h1 className="uppercase text-white font-bold text-2xl mb-2">
          Country quiz
        </h1>
        <QuizContainer question={questions[1]}/>
      </div>
    </div>
  );
}

export default App;
