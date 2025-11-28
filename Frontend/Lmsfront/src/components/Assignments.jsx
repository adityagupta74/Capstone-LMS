import React from "react";
import StudentSidebar from "./StudentSidebar";

const Assignments = () => {
  const assignments = [
    {
      _id: 1,
      title: "Math Assignment 1",
      description: "Complete the exercises on page 42-45.",
      class: "TY B.Sc IT",
    },
    {
      _id: 2,
      title: "Programming Assignment",
      description: "Create a CRUD app using MERN Stack.",
      class: "TY B.Sc IT",
    },
  ];

  return (
    <div className="flex">
      <StudentSidebar />

      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-5">Assignments</h1>

        {assignments.map((a) => (
          <div className="bg-white p-4 rounded shadow mb-3" key={a._id}>
            <h3 className="font-bold text-xl">{a.title}</h3>
            <p className="text-gray-700">{a.description}</p>
            <small className="text-sm text-gray-500">Class: {a.class}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
