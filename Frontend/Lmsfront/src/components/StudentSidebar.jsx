import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { MdAssignment } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { AiOutlineNotification } from "react-icons/ai";
import { FaMessage } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { CiSettings } from "react-icons/ci";

const StudentSidebar = () => {
  const location = useLocation(); // <-- Yeh add kiya
  const navigate = useNavigate(); // <-- add this 👌

  const linkClasses = (path) =>
    `p-2 rounded flex items-center gap-2 transition ${
      location.pathname === path
        ? "bg-white text-black"
        : "hover:bg-white hover:text-black"
    }`;

  return (
    <div className="w-50 bg-black rounded-3xl text-white h-screen p-5 mx-1 flex flex-col gap-4 sticky top-0">
      <h2 className="text-2xl font-bold mb-6">Student Panel</h2>

      <Link to="/dashboard" className={linkClasses("/dashboard")}>
        <IoIosHome className="text-xl" />
        <span>Dashboard</span>
      </Link>

      <Link to="/assignments" className={linkClasses("/assignments")}>
        <MdAssignment className="text-xl" />
        <span>Assignment</span>
      </Link>

      <Link to="/fees" className={linkClasses("/fees")}>
        <FaRupeeSign className="text-xl" />
        <span>Fees</span>
      </Link>

      <Link to="/notice" className={linkClasses("/notice")}>
        <AiOutlineNotification className="text-xl" />
        <span>Notice</span>
      </Link>

      <Link to="/message" className={linkClasses("/message")}>
        <FaMessage className="text-xl" />
        <span>Message</span>
      </Link>

      <Link to="/settings" className={linkClasses("/settings")}>
        <CiSettings className="text-xl" />
        <span>Setting</span>
      </Link>

      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
        className="hover:bg-red-500 hover:text-white p-2 rounded flex items-center gap-2 mt-auto"
      >
        <IoIosLogOut />
        Logout
      </button>
    </div>
  );
};

export default StudentSidebar;
