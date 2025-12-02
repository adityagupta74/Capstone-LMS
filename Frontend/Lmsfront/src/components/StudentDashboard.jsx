import React from "react";
import StudentSidebar from "../components/StudentSidebar";
import AttendanceChart from "../components/AttendanceChart";
import { jwtDecode } from "jwt-decode";

const StudentDashboard = () => {
  const student = jwt.decode(localStorage.getItem("token"));
  console.log(student)
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.toLocaleString("default", { month: "long" });
  const currentYear = today.getFullYear();

  // Generate days of current month
  const daysInMonth = new Date(currentYear, today.getMonth() + 1, 0).getDate();
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <StudentSidebar />

      {/* MAIN DASHBOARD */}
      <div className="flex-1 p-6">
        {/* Top Navbar */}
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search"
            className="w-1/3 px-4 py-2 rounded-lg bg-white shadow"
          />
          <div className="flex items-center gap-4">
            <span className="w-8 h-8 bg-gray-300 rounded-full"></span>
            <span className="w-8 h-8 bg-gray-300 rounded-full"></span>
          </div>
        </div>

        {/* Welcome + Attendance */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* Welcome */}
          <div className="col-span-2 bg-white shadow rounded-lg p-6 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Hey {student.name} 👋</h2>
              <p className="text-gray-600 mt-1">
                Welcome back! Keep progressing towards your learning goals 📚
              </p>
            </div>
            <div className="w-24 h-24 bg-gray-200 rounded-lg"></div>
          </div>

          {/* Attendance */}
          <div className="bg-white shadow rounded-lg p-5 flex justify-center items-center">
            <AttendanceChart />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 shadow rounded-lg">
            📢 Notice
            <p className="bg-gray-200 rounded-xl p-2">Picnic on 30/11/25 🎉</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            📌 Tasks
            <p className="bg-gray-200 rounded-xl p-2">Maths Assignment</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">🏆 Rewards</div>

          {/* Mini Calendar */}
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="font-semibold text-center mb-2">
              {currentMonth} {currentYear}
            </h3>
            <div className="grid grid-cols-7 gap-1 text-xs text-center">
              {/* Days Names */}
              {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
                <div className="font-bold" key={d}>
                  {d}
                </div>
              ))}

              {Array(new Date(currentYear, today.getMonth(), 1).getDay())
                .fill(null)
                .map((_, i) => (
                  <div key={"e" + i}></div>
                ))}

              {calendarDays.map((day) => (
                <div
                  key={day}
                  className={`p-1 rounded-md ${
                    day === currentDay
                      ? "bg-blue-600 text-white font-bold"
                      : "hover:bg-blue-200"
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Charts + Grades */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 shadow rounded-lg h-52">
            📈 Test Score Activity
          </div>
          <div className="bg-white p-4 shadow rounded-lg h-52">
            📚 Grade by Subject
          </div>
        </div>

        {/* Assignments + Messages */}
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 bg-white p-4 shadow rounded-lg h-64">
            📄 Assignments
          </div>
          <div className="bg-white p-4 shadow rounded-lg h-64">💬 Messages</div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
