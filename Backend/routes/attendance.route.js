const express = require("express");
const router = express.Router();
const Attendance = require("../models/attendance.model");
const Student = require("../models/student.model");

router.post("/", async (req, res) => {
  try {
    const { date, className, records } = req.body;
    if (!date || !className || !records) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    const existing = await Attendance.findOne({ date, class: className });
    if (existing) {
      return res
        .status(400)
        .json({ message: "Attendance already marked for this date & class" });
    }
    const newAttendance = new Attendance({
      date,
      class: className,
      records,
    });
    await newAttendance.save();
    res.status(201).json({ message: "Attendance marked successfully", newAttendance });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const { date, className } = req.query;

    let filter = {};
    if (date) filter.date = new Date(date);
    if (className) filter.class = className;

    const attendance = await Attendance.find(filter).populate("records.studentId", "firstname lastname rollno");
    res.json(attendance);
  } catch (error) {
    res.status(500).json({ message: "Error fetching attendance", error: error.message });
  }
});

router.put("/:attendanceId/:studentId", async (req, res) => {
  try {
    const { attendanceId, studentId } = req.params;
    const { status } = req.body;

    const attendance = await Attendance.findById(attendanceId);
    if (!attendance) {
      return res.status(404).json({ message: "Attendance record not found" });
    }

    const studentRecord = attendance.records.find(
      (r) => r.studentId.toString() === studentId
    );

    if (!studentRecord) {
      return res.status(404).json({ message: "Student not found in attendance record" });
    }

    studentRecord.status = status;
    await attendance.save();

    res.json({ message: "Attendance updated successfully", attendance });
  } catch (error) {
    res.status(500).json({ message: "Error updating attendance", error: error.message });
  }
});




module.exports = router;
