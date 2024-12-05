import Statistics from "./Statistics";
import { FaTrophy, FaRegClipboard, FaCheckSquare } from "react-icons/fa";

const QuestionAnalysis = ({
  rank,
  percentile,
  current_score,
  totalQuestions,
}) => (
  <div className="border border-gray-100 rounded-xl p-5 space-y-5">
    <h3 className="font-bold">Question Analysis</h3>
    <div className="grid stats stats-vertical lg:stats-horizontal bg-transparent">
      <div className="stat">
        <Statistics
          icon={<FaTrophy className="text-yellow-600 text-xl" />}
          result={rank}
          description={"Your rank"}
        />
      </div>
      <div className="stat">
        <Statistics
          icon={<FaRegClipboard className="text-yellow-500 text-xl" />}
          result={`${percentile}%`}
          description={"Percentile"}
        />
      </div>
      <div className="stat">
        <Statistics
          icon={<FaCheckSquare className="text-green-600 text-xl" />}
          result={`${current_score} / ${totalQuestions}`}
          description={"Correct answers"}
        />
      </div>
    </div>
  </div>
);

export default QuestionAnalysis;
