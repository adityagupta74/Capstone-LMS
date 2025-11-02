const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  records: [
    {
      studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true,
      },
      rollno: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        enum: ["Present", "Absent"],
        default: "Absent",
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Attendance", attendanceSchema);
