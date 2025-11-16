import React from "react";
import { Link } from "react-router-dom";

const StudentSidebar = () => {
  return (
    <div className="w-64 bg-blue-700 text-white h-screen p-5 flex flex-col gap-4 sticky top-0">
      <h2 className="text-2xl font-bold mb-6">Student Panel</h2>

      <Link to="/dashboard" className="hover:bg-blue-600 p-2 rounded">
        Dashboard
      </Link>
      <Link to="/profile" className="hover:bg-blue-600 p-2 rounded">
        Profile
      </Link>
      <Link to="/fees" className="hover:bg-blue-600 p-2 rounded">
        Fees
      </Link>
      <Link to="/assignments" className="hover:bg-blue-600 p-2 rounded">
        Assignments
      </Link>
      <Link to="/notice" className="hover:bg-blue-600 p-2 rounded">
        Notices
      </Link>
    </div>
  );
};

export default StudentSidebar;
