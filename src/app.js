// Imports
const express = require("express");
const morgan = require("morgan");
const studentRouter = require("./routes/student.router");
const teacherRouter = require("./routes/teacher.router");

// Instance
const app = express();

// Settings
app.set("PORT", process.env.PORT || 3000);
app.set("view engine", "ejs");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use("/api/students", studentRouter);
app.use("/api/teachers", teacherRouter);

module.exports = app;
