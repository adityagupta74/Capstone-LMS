import React, { useState } from "react";
import StudentSidebar from "../components/StudentSidebar";
import { MdPaid } from "react-icons/md";

const Fees = () => {
  const [fees] = useState([
    {
      _id: 1,
      class: "TY B.Sc IT",
      totalAmount: 30000,
      paidAmount: 20000,
      dueAmount: 10000,
      payments: [
        { date: "2025-06-01", amount: 10000 },
        { date: "2025-08-15", amount: 10000 },
      ],
    },
  ]);

  const totalFees = fees[0].totalAmount;
  const paidFees = fees[0].paidAmount;
  const dueFees = fees[0].dueAmount;
  const payments = fees[0].payments;

  return (
    <div className="flex">
      <StudentSidebar />

      <div className="w-[80%] p-8">
        {/* TOP Boxes */}
        <div className="flex gap-6 mb-8">
          <div className="bg-gray-200 rounded-lg shadow p-6 w-[250px] flex items-center gap-4">
            <MdPaid className="text-4xl" />
            <div>
              <p className="text-lg font-semibold">Total Fees</p>
              <p className="text-xl">₹ {totalFees}</p>
            </div>
          </div>

          <div className="bg-green-200 rounded-lg shadow p-6 w-[250px] flex items-center gap-4">
            <MdPaid className="text-4xl" />
            <div>
              <p className="text-lg font-semibold">Paid Fees</p>
              <p className="text-xl">₹ {paidFees}</p>
            </div>
          </div>

          <div className="bg-red-200 rounded-lg shadow p-6 w-[250px] flex items-center gap-4">
            <MdPaid className="text-4xl" />
            <div>
              <p className="text-lg font-semibold">Due Fees</p>
              <p className="text-xl">₹ {dueFees}</p>
            </div>
          </div>
        </div>

        {/* Payment History Table */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Payment History</h2>

          <table className="w-full text-left border">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((pay, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{pay.date}</td>
                  <td className="px-4 py-2 border">₹ {pay.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Fees;
