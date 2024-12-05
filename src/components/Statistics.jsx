const Statistics = ({ icon, result, description }) => {
  return (
    <div className="flex gap-3 items-center">
      <span className="bg-gray-100 rounded-full flex items-center justify-center p-5">
        {icon}
      </span>
      <div className="space-y-2">
        <h3 className="text-xl font-bold">{result}</h3>
        <p className="uppercase text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Statistics;
