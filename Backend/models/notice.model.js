const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  description: { type: String },
  date: { type: Date, default: Date.now },
});

const Notice = mongoose.model("Notice", noticeSchema);

module.exports = Notice;
