const mongoose = require("mongoose");

const teachersSchema = mongoose.Schema({
  teacherName: { type: String, require: true },
  email: { type: String, require: true },
  contact: { type: Number, require: true },
  department: { type: String, require: true },
});

module.exports = mongoose.model("teacher", teachersSchema);
