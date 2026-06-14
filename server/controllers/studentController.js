
const student = require("../models/studentModel");

const addStudent = async (req, res,) => {
  const studentData = new student({
    RegNo: Date.now(),
    name: req.body.name,
    age: req.body.age,
    classes: req.body.classes,
    dateOfBirth: req.body.dateOfBirth,
    phoneNumber: req.body.phoneNumber,
    grade: req.body.grade,
    father_name: req.body.father_name,
    father_job: req.body.father_job,
  });
  await studentData.save();
  res.send("Student added successfully");
};

const getStudent = async (req, res) => {
  const studentData = await student.find();
  res.json(studentData);
};

const updateStudent = async (req, res) => {
  await student.findByIdAndUpdate(req.params.id, req.body);
  res.send("Updated");
};

const deleteStudent = async (req, res) => {
  await student.findByIdAndDelete(req.params.id);
  res.send("deleted");
};
module.exports = { addStudent, getStudent, updateStudent, deleteStudent };
