import cardImage from "../resources/images/undraw_adventure_4hum 1.svg";

const QuizAnswer = ({ letter, text }) => {
  return (
    <div className="flex px-3 py-2 rounded-lg border border-primary-light text-primary-light cursor-pointer hover:border-transparent hover:bg-orange hover:text-white">
      <h3>{letter}</h3>
      <p className="flex-1 pl-5">{text}</p>
    </div>
  );
};

const QuizContainer = () => {
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
        <h2 className="text-xl font-bold mb-4 text-primary-dark">Question</h2>
        <div className="space-y-3">
          <QuizAnswer letter="A" text="answer A" />
          <QuizAnswer letter="B" text="answer B" />
          <QuizAnswer letter="C" text="answer C" />
          <QuizAnswer letter="D" text="answer D" />
        </div>
      </div>
      <div className="flex justify-end mt-10 px-10">
          <button className="bg-orange text-white py-2 px-3 rounded-lg text-lg font-bold hover:-translate-y-1 transform">Next</button>
      </div>
    </div>
  );
};

export default QuizContainer;
