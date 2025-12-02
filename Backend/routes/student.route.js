const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const Student = require("../models/student.model");
const AssignmentModel = require("../models/assignment.model");
const verifystudent = require("../middleware/auth.middleware");
const JWT_SECRET = "Aditya";
const SubmissionModel = require("../models/submission.model");

const multer = require("multer");
const path = require("path");

router.post("/login", async function (req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  try {
    const student = await Student.findOne({ username });
    if (!student) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign({ id: student._id, role: "student" }, JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      message: "Login successful",
      token,
      student: {
        id: student._id,
        firstname: student.firstname,
        lastname: student.lastname,
        classstd: student.class,
        rollno: student.rollno,
        email: student.email,
        username: student.username,
        profileImage: student.profileImage,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/assignments", verifystudent, async function (req, res) {
  const assignments = await AssignmentModel.find();
  res.json(assignments);
});

router.get("/profile", verifystudent, async function (req, res) {
  const studentId = req.student.id;
  const studentProfile = await Student.findById(studentId).select("-password");
  if (!studentProfile) {
    return res.status(404).json({ message: "Student not found" });
  }
  res.json(studentProfile);
});

const FeesModel = require("../models/fees.model");
// student.route.js
router.get("/fees", verifystudent, async (req, res) => {
  try {
    const studentId = req.student.id; // YEH USE KARO (Token se)
    //const studentId = req.query.studentId; // ya JWT se req.student._id

    if (!studentId) {
      return res.status(400).json({ message: "StudentId required" });
    }

    const fees = await FeesModel.find({ student: studentId });

    if (!fees || fees.length === 0) {
      return res.status(404).json({ message: "No fees record found" });
    }

    res.status(200).json({ fees });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post(
  "/submit-assignment/:id",
  verifystudent,
  upload.single("file"),
  async (req, res) => {
    try {
      const { id } = req.params; // assignment id
      const studentId = req.student.id;

      if (!req.file) {
        return res.status(400).json({ message: "File is required" });
      }

      // Correct fields according to schema
      const submission = new SubmissionModel({
        student: studentId,
        assignment: id,
        file: req.file.filename,
      });

      await submission.save();
      res.json({ message: "Assignment Submitted Successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server Error" });
    }
  }
);

module.exports = router;
