import React, { useEffect, useState } from "react";
import StudentSidebar from "./StudentSidebar";
import axios from "axios";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/assignments")
      .then((res) => {
        setAssignments(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load assignments");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-bold">
        Loading Assignments...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-600 font-bold">
        {error}
      </div>
    );
  }

  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-6">Assignments</h1>

        {assignments.length === 0 ? (
          <p className="text-gray-500">No assignments available</p>
        ) : (
          assignments.map((a) => {
            const classValue = a.class || a.className || "N/A";
            return (
              <div
                className="bg-white p-5 rounded-lg shadow-md mb-4 border hover:shadow-lg transition"
                key={a._id}
              >
                <h3 className="text-2xl font-semibold mb-2">{a.title}</h3>
                <p className="text-gray-700 mb-2">{a.description}</p>
                <p className="text-sm text-gray-500">
                  Class: <b>{classValue}</b>
                </p>

                {/* Submit Assignment Button */}
                <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                  Submit Assignment
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Assignments;
