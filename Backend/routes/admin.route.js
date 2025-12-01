const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const StudentModel = require("../models/student.model");
const AssignmentModel = require("../models/assignment.model");
const NoticeModel = require("../models/notice.model");

router.post("/admin-login",function(req,res){
    const {username,password}=req.body;
})


router.post("/add-student", async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      gender,
      dob,
      classstd,
      rollno,
      profileImage,
      fathername,
      mothername,
      fatherContact,
      motherContact,
      fatherOccupation,
      annualIncome,
      username,
      password,
      phone,
      email,
      address = {},
    } = req.body;

    const { area, location, district, pincode, state } = address;

    const hashedpassword = await bcrypt.hash(password, 10);

    const newStudent = new StudentModel({
      firstname,
      lastname,
      gender,
      dob,
      class: classstd, // match schema
      rollno,
      profileImage,
      fatherName: fathername,
      motherName: mothername,
      fatherContact,
      motherContact,
      fatherOccupation,
      annualIncome,
      username,
      password: hashedpassword,
      phone,
      email,
      address: { area, location, district, pincode, state },
    });

    await newStudent.save();
    res.status(201).json({ message: "Student added successfully" });
  } catch (error) {
    console.error("Error adding student:", error);
    res
      .status(500)
      .json({ message: "Error adding student", error: error.message });
  }
});
router.get("/assignments", async function (req, res) {
  const assignments = await AssignmentModel.find();
  res.json(assignments);
});
router.delete("/delete-assignment", function (req, res) {});
router.post("/add-assignment", async function (req, res) {
  const { title, description, classstd, duedate } = req.body;
  if (!title || !description || !classstd || !duedate) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newAssignment = new AssignmentModel({
    title,
    description,
    class: classstd,
    duedate,
  });

  await newAssignment.save();

  res.status(201).json({
    message: "Assignment created successfully",
    assignment: newAssignment,
  });
});
router.get("/notices", async function (req, res) {
  const notice = await NoticeModel.find();
  res.json(notice);
});
router.post("/add-notice", function (req, res) {
  const { title, content, description, date } = req.body;
  if (!title || !content || !description || !date) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const newNotice = new NoticeModel({
    title,
    content,
    description,
    date,
  });
  newNotice.save();
  res
    .status(201)
    .json({ message: "Notice created successfully", notice: newNotice });
});
const FeesModel = require("../models/fees.model");
router.post("/fees", async (req, res) => {
  try {
    const { studentId, classstd, totalAmount } = req.body;

    if (!studentId || !classstd || !totalAmount) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newFees = new FeesModel({
      student: studentId,
      class: classstd,
      totalAmount,
      dueAmount: totalAmount,
    });

    await newFees.save();
    res.status(201).json({ message: "Fees record created", fees: newFees });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});
router.put("/fees/:id/pay", async (req, res) => {
  try {
    const { id } = req.params;
    const { amount } = req.body;

    const fees = await FeesModel.findById(id);
    if (!fees)
      return res.status(404).json({ message: "Fees record not found" });

    fees.paidAmount += amount;
    fees.dueAmount = fees.totalAmount - fees.paidAmount;
    fees.lastPaymentDate = new Date();

    await fees.save();
    res.status(200).json({ message: "Payment updated", fees });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});
router.delete("/fees/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await FeesModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Fees record deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
