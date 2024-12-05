"use client";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <div className="text-center mx-auto my-20 space-y-5">
      <h2>Please wait | Data is Loading.....</h2>
      <CircularProgress size="3rem" />
    </div>
  );
};

export default Loading;
