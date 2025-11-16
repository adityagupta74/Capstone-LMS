import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentSidebar from "../components/StudentSidebar";

const Fees = () => {
  const [fees, setFees] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:3000/student/fees", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setFees(res.data.fees))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex">
      <StudentSidebar />

      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-5">Fees Details</h1>

        {fees.map((f) => (
          <div key={f._id} className="bg-white shadow p-4 rounded mb-3">
            <p>Class: {f.class}</p>
            <p>Total Amount: ₹{f.totalAmount}</p>
            <p>Paid: ₹{f.paidAmount}</p>
            <p>Due: ₹{f.dueAmount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fees;
