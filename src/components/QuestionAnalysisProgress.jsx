import Image from "next/image";
import qap from "../assets/qap.png";
import { PieChart, Pie, Cell } from "recharts";

const QuestionAnalysisProgress = ({ totalQuestions, correctAnswers }) => {
  const value = (correctAnswers / totalQuestions) * 100;

  const data = [{ value: value }, { value: 100 - value }];

  const COLORS = ["#0088FE", "#e0e0e0"];

  return (
    <div className="border border-gray-100 rounded-xl p-5 space-y-5">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
        <h3 className="text-xl font-bold">Question Analysis</h3>
        <h3 className="text-xl font-bold text-blue-500">{`${correctAnswers}/${totalQuestions}`}</h3>
      </div>
      <p>
        <span className="font-extrabold">
          You scored {correctAnswers} question(s) correct out of{" "}
          {totalQuestions}.
        </span>{" "}
        However, it still needs some improvements.
      </p>
      <div className="flex justify-center py-5">
        <div className="relative">
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              startAngle={0}
              endAngle={360}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image src={qap} alt="Question Analysis" width={60} height={60} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnalysisProgress;
