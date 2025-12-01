const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("../Backend/db/db");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const adminRoute = require("./routes/admin.route");
const studentRoute = require("./routes/student.route");
const attendanceRoute = require("./routes/attendance.route");

app.use("/admin", adminRoute);
app.use("/student", studentRoute);
app.use("/attendance", attendanceRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
