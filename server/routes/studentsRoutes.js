const express = require("express");
const router = express.Router();

const {
  addStudent,
  getStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");
const auth = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");

router.post("/",auth, addStudent);

router.get("/",auth, getStudent);

router.put("/:id",auth, updateStudent);

router.delete("/:id",auth, deleteStudent);

module.exports = router;
