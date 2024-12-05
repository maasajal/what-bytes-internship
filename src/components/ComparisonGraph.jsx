import { LuFileChartLine } from "react-icons/lu";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { percentile: 0, numberOfStudent: 0 },
  { percentile: 10, numberOfStudent: 3 },
  { percentile: 20, numberOfStudent: 8 },
  { percentile: 30, numberOfStudent: 15 },
  { percentile: 40, numberOfStudent: 20 },
  { percentile: 50, numberOfStudent: 25 },
  { percentile: 60, numberOfStudent: 30 },
  { percentile: 70, numberOfStudent: 22 },
  { percentile: 80, numberOfStudent: 15 },
  { percentile: 90, numberOfStudent: 4 },
  { percentile: 100, numberOfStudent: 0 },
];

const ComparisonGraph = ({ score, average }) => {
  return (
    <div className="border border-gray-100 rounded-xl p-5">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-5 space-y-5">
        <div className="space-y-5">
          <h3 className="text-xl font-bold">Comparison Graph</h3>
          <p>
            <span className="font-extrabold">
              You scored {score}% percentile
            </span>{" "}
            which is lower than the average percentile {average}% of all the
            engineers who took this assessment
          </p>
        </div>
        <span className="bg-gray-100 rounded-full flex items-center justify-center p-4 border">
          <LuFileChartLine className="text-2xl" />
        </span>
      </div>
      <div className="overflow-scroll py-10">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="percentile" tickLine={false} />
            <YAxis tickLine={false} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="numberOfStudent"
              stroke="#8884d8"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
            <Line
              type="linear"
              dataKey="percentile"
              stroke="#ff7300"
              dot={{
                r: 5,
                stroke: "#ff7300",
                strokeWidth: 2,
                fill: "#ff7300",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ComparisonGraph;
