import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentSidebar from "../components/StudentSidebar";

const StudentDashboard = () => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:3000/student/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setStudent(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Section */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-5">
          Welcome, {student?.firstname}
        </h1>

        <div className="grid grid-cols-3 gap-4">
          <div className="p-5 bg-white shadow rounded">
            📘 Class: {student?.class}
          </div>
          <div className="p-5 bg-white shadow rounded">
            🎯 Roll No: {student?.rollno}
          </div>
          <div className="p-5 bg-white shadow rounded">
            📧 Email: {student?.email}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
