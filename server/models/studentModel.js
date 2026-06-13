const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  RegNo:{
   type: String,
   required: true,
   unique: true  
  },
  name: String,
  age: Number,
  classes: Number,
  dateOfBirth: Number,
  phoneNumber: Number,
  grade: String,
  father_name: String,
  father_job: String,

});
const student = mongoose.model("student", studentSchema);
module.exports = student;
