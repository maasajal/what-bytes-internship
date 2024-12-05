"use client";
// import { AppProvider } from "@toolpad/core/AppProvider";
import { AppProvider } from "@toolpad/core/nextjs";
import { DashboardLayout, ThemeSwitcher } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import { Tooltip } from "@mui/material";
import Navbar from "@/components/Navbar";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import { usePathname } from "next/navigation";
// React icons
import { RiBarChartFill } from "react-icons/ri";
import { RiAwardFill } from "react-icons/ri";
import { FaRegFile } from "react-icons/fa";
import { RiMenuUnfold3Fill } from "react-icons/ri";
// Images for the project
import logo from "../../../assets/logo.png";
import user from "../../../assets/user.png";
// This navigation is unused...
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

const DashboardLayoutBasic = ({ children }) => {
  const router = useDemoRouter("/dashboard");
  const pathName = usePathname();

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
            <div>
              {pathName === "/" && (
                <div className="space-y-5 py-10">
                  <h1 className="text-center text-3xl font-bold">
                    Welcome to the What Bytes
                  </h1>
                  <Navbar />
                  <iframe
                    src="https://www.whatbytes.com"
                    title="What Bytes Official Webpage"
                    width="100%"
                    height="500"
                  ></iframe>
                </div>
              )}
            </div>
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
