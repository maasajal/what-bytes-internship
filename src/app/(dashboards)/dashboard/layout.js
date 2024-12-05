"use client";
import { useState } from "react";
import PropTypes from "prop-types";
// import { AppProvider } from "@toolpad/core/AppProvider";
import { AppProvider } from "@toolpad/core/nextjs";
import { DashboardLayout, ThemeSwitcher } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import { Box, Modal, TextField, Tooltip, Typography } from "@mui/material";
import Image from "next/image";

import Stack from "@mui/material/Stack";
// React icons
import { RiBarChartFill } from "react-icons/ri";
import { RiAwardFill } from "react-icons/ri";
import { FaRegFile, FaArrowRight } from "react-icons/fa";
import { RiMenuUnfold3Fill } from "react-icons/ri";

// Images for the project
import logo from "../../../assets/logo.png";
import user from "../../../assets/user.png";
import html5 from "../../../assets/html5.png";
import SkillSets from "../../../components/SkillSets";
import QuestionAnalysis from "../../../components/QuestionAnalysis";
import QuestionAnalysisProgress from "../../../components/QuestionAnalysisProgress";
import ComparisonGraph from "../../../components/ComparisonGraph";
import { useForm } from "react-hook-form";
import Navbar from "@/components/Navbar";

const NAVIGATION = [
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <RiBarChartFill className="text-2xl" />,
  },
  {
    segment: "skill-test",
    title: "Skill Test",
    icon: <RiAwardFill className="text-2xl" />,
  },
  {
    segment: "internship",
    title: "Internship",
    icon: <FaRegFile className="text-2xl" />,
  },
];

// Modal style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 2 / 3,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  RoundedCorner: 10,
};

function DashboardContent({ pathname }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // set state with default values
  const totalQuestions = 15;
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [current_score, setCurrentScore] = useState(10);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setRank(data.rank);
    setPercentile(data.percentile);
    setCurrentScore(data.current_score);
    reset();
    handleClose();
  };
  return (
    <>
      <div className="py-10 px-5 md:px-10 space-y-5">
        <Typography className="capitalize mb-5">
          {pathname.replace("/", "")}
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-3 space-y-5">
            {/* Skill test topic section */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border border-gray-100 rounded-xl p-4">
              <Image src={html5} alt="html5" width={50} height={50} />
              <div className="space-y-2">
                <h3 className="font-semibold capitalize">
                  Hyper text markup language
                </h3>
                <p className="text-sm">
                  Questions: 08 | Duration: 15 mins | Submited on 5 June 2024
                </p>
              </div>
              <button
                onClick={handleOpen}
                className="btn bg-blue-900 font-extrabold px-5 rounded-lg text-white"
              >
                Update
              </button>
              {/* MUI Modal component */}
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
              >
                <Box sx={style}>
                  <div className="flex items-center justify-between gap-10">
                    <h3 className="text-2xl font-extrabold">Update scores</h3>
                    <Image src={html5} alt="html 5" width={50} height={50} />
                  </div>

                  {/* Form inside the modal */}
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="my-10 space-y-8"
                  >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                      <div className="flex items-center gap-5">
                        <p className="bg-blue-900 px-2 rounded-full text-white font-bold">
                          1
                        </p>
                        <h3 className="">
                          Update your <span className="font-bold">Rank</span>
                        </h3>
                      </div>
                      <TextField
                        id="rank"
                        type="number"
                        {...register("rank", {
                          required: "required | should be number",
                        })}
                        label="Rank"
                        variant="outlined"
                        placeholder="Rank"
                        size="small"
                        error={!!errors.rank}
                        helperText={errors.rank?.message}
                      />
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                      <div className="flex items-center gap-5">
                        <p className="bg-blue-900 px-2 rounded-full text-white font-bold">
                          2
                        </p>
                        <h3 className="">
                          Update your{" "}
                          <span className="font-bold">Percentile</span>
                        </h3>
                      </div>
                      <TextField
                        id="percentile"
                        type="number"
                        {...register("percentile", {
                          required: "required | percentile 0-100",
                        })}
                        label="Percentile"
                        variant="outlined"
                        placeholder="Percentile"
                        size="small"
                        error={!!errors.percentile}
                        helperText={errors.percentile?.message}
                      />
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                      <div className="flex items-center gap-5">
                        <p className="bg-blue-900 px-2 rounded-full text-white font-bold">
                          3
                        </p>
                        <h3 className="">
                          Update your{" "}
                          <span className="font-bold">
                            Current Score (out of 15)
                          </span>
                        </h3>
                      </div>
                      <TextField
                        id="current_score"
                        type="number"
                        {...register("current_score", {
                          required: "required | current score 0-15",
                          min: { value: 0, message: "Score must be positive" },
                          max: {
                            value: 15,
                            message: "Max score cannot be more than 15",
                          },
                        })}
                        label="Current Score"
                        variant="outlined"
                        placeholder="Current Score"
                        size="small"
                        error={!!errors.current_score}
                        helperText={errors.current_score?.message}
                      />
                    </div>

                    <div className="text-end space-x-5">
                      <button
                        type="submit"
                        onClick={handleClose}
                        className="btn btn-outline font-bold px-5 py-2 rounded-lg"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        onClick={handleOpen}
                        className="btn bg-blue-900 font-bold px-5 py-2 rounded-lg text-white"
                      >
                        Save <FaArrowRight />
                      </button>
                    </div>
                  </form>
                </Box>
              </Modal>
            </div>

            {/* Quick Statistics section */}
            <QuestionAnalysis
              rank={rank}
              percentile={percentile}
              current_score={current_score}
              totalQuestions={totalQuestions}
            />

            {/* Comparison Graph section */}
            <ComparisonGraph score={percentile} average={72} />
          </div>
          {/* Right side section */}
          <div className="col-span-1 md:col-span-2 space-y-5">
            {/* Syllabus Wise Analysis section */}
            <div className="border border-gray-100 rounded-xl p-5 space-y-8">
              <h3 className="text-xl font-semibold capitalize">
                Syllabus Wise Analysis
              </h3>
              <SkillSets
                heading={"HTML Tools, Forms, History"}
                value={80}
                color="progress-info"
              />
              <SkillSets
                heading={"Tags & References in HTML"}
                value={60}
                color="progress-warning"
              />
              <SkillSets
                heading={"Tables & References in HTML"}
                value={24}
                color="progress-error"
              />
              <SkillSets
                heading={"Tables & CSS Bascis"}
                value={96}
                color="progress-success"
              />
            </div>

            {/* Syllabus Wise Analysis section */}
            <QuestionAnalysisProgress
              totalQuestions={totalQuestions}
              correctAnswers={current_score}
            />
          </div>
        </div>
      </div>
    </>
  );
}

DashboardContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

const DashboardLayoutBasic = ({ children }) => {
  const router = useDemoRouter("/dashboard");

  const UserAccount = () => {
    return (
      <Stack direction="row" className="flex items-center gap-2">
        <ThemeSwitcher />
        <Tooltip title="User Account" enterDelay={1000}>
          <div className="flex gap-2 items-center border p-2 rounded-lg">
            <Image
              src={user}
              alt="User Account"
              width={30}
              height={30}
              className="rounded-full"
            />
            <h4 className="font-extrabold">Rahil Siddique</h4>
          </div>
        </Tooltip>
      </Stack>
    );
  };
  return (
    // preview-start
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      branding={{
        logo: (
          <Image src={logo} alt="What Bytes logo" width={150} height={500} />
        ),
        title: "",
      }}
    >
      <DashboardLayout
        hideNavigation
        slots={{
          toolbarActions: UserAccount,
        }}
      >
        <div className="drawer lg:drawer-open">
          <input id="bytes-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="bytes-drawer"
              className="btn btn-outline drawer-button lg:hidden fixed top-20 left-2 z-50"
            >
              <RiMenuUnfold3Fill />
            </label>
            <div>{children}</div>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="bytes-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="menu bg-base-200 text-base-content lg:bg-transparent min-h-full w-80 p-4 pt-32 lg:pt-5 border-r">
              <Navbar />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
};

export default DashboardLayoutBasic;
