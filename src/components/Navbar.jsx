"use client";
// React icons
import { RiBarChartFill } from "react-icons/ri";
import { RiAwardFill } from "react-icons/ri";
import { FaRegFile } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mavLinks = [
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <RiBarChartFill className="text-2xl" />,
    path: "/dashboard",
  },
  {
    segment: "skill-test",
    title: "Skill Test",
    icon: <RiAwardFill className="text-2xl" />,
    path: "/dashboard/skill-test",
  },
  {
    segment: "internship",
    title: "Internship",
    icon: <FaRegFile className="text-2xl" />,
    path: "/dashboard/internship",
  },
];
const Navbar = () => {
  const pathName = usePathname();
  return (
    <div>
      <nav>
        {mavLinks?.map((item) => (
          <Link
            key={item.segment}
            href={item.path}
            className={`flex items-center gap-5 p-3 border font-bold rounded-full m-3 ${pathName === item.path && "bg-gray-100 text-blue-500"}`}
          >
            {item.icon}
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
