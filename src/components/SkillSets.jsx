const SkillSets = ({ heading, value, color }) => {
  return (
    <div className="space-y-3">
      <h4>{heading}</h4>
      <div className="flex items-center gap-5 sm:gap-10 font-bold">
        <progress
          className={`progress rounded-xl ${color} `}
          value={value}
          max="100"
        ></progress>
        <span className={`${color}`}>{value}%</span>
      </div>
    </div>
  );
};

export default SkillSets;
