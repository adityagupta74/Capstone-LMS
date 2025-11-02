const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female"], required: true },
  dob: { type: Date, required: true },
  class: { type: String, required: true },
  rollno: { type: Number, required: true, unique: true },
  profileImage: { type: String },

  fatherName: { type: String },
  motherName: { type: String } ,
  fatherContact: { type: String },
  motherContact: { type: String },
  fatherOccupation: { type: String },
  annualIncome: { type: String },

  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: {
    area: { type: String },
    location: { type: String },
    district: { type: String },
    pincode: { type: String },
    state: { type: String },
  },
});

module.exports = mongoose.model("Student", studentSchema);
