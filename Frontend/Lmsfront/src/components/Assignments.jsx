import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentSidebar from "./StudentSidebar";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get("http://localhost:4000/student/assignments", {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setAssignments(res.data))
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="flex">
      <StudentSidebar />

      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-5">Assignments</h1>

        {assignments.map(a => (
          <div className="bg-white p-4 rounded shadow mb-3" key={a._id}>
            <h3 className="font-bold text-xl">{a.title}</h3>
            <p>{a.description}</p>
            <small>Class: {a.class}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
