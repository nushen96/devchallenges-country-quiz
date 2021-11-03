import ResultsImage from "../resources/images/undraw_winners_ao2o 2.svg"

const ResultsContainer = ({score, restart}) => {
    return (<div className="bg-white py-8 rounded-xl flex flex-col items-center space-y-7 text-primary-darker">
        <img className="h-48 w-48" src={ResultsImage} alt="Results illustration" />
        <div className="space-y-3 text-center">
            <h1 className="font-bold text-2xl">Results</h1>
            <p>You got <span className="text-green">{score}</span> correct answer{score>0 ? "s":""}</p>
        </div>
        <button className="border-2 border-primary-darker py-3 px-10 rounded-lg font-semibold text-sm hover:bg-gray-100" onClick={() => restart()}>Try again</button>
    </div>)
}

export default ResultsContainer;