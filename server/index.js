require("dotenv").config();
console.log(process.env.MONGO_URI)
const express = require("express");

const connection = require("./config/db");

const usersRoutes = require("./routes/usersRoutes");

const auth = require("./middleware/authMiddleware");

const studentsRoutes = require("./routes/studentsRoutes");

const adminOnly = require("./middleware/adminMiddleware");

const cors = require("cors");

const app = express(); 

connection();



app.use(cors({
  origin: "https://student-management-gamma-red.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use("/students", studentsRoutes);
app.use("/users", usersRoutes);

app.get("/profile", auth, (req, res) => {
  res.send(`Welcome User ${req.user.name}`);
});

// ADMIN ROUTE
app.get("/admin", auth, adminOnly, (req, res) => {
  res.send("Welcome Admin");
});

app.listen(3000, () => console.log("server has started"));
