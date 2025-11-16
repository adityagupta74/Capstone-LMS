import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentSidebar from "../components/StudentSidebar";

const Notice = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/notices")
      .then((res) => setNotices(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex">
      <StudentSidebar />

      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-5">Notices</h1>

        {notices.map((n) => (
          <div className="bg-white shadow p-4 rounded mb-3" key={n._id}>
            <h2 className="text-xl font-bold">{n.title}</h2>
            <p>{n.content}</p>
            <small>{n.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notice;
