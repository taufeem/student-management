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

router.post("/", addStudent);

router.get("/", getStudent);

router.put("/:id",auth,adminOnly, updateStudent);

router.delete("/:id",auth,adminOnly, deleteStudent);

module.exports = router;
