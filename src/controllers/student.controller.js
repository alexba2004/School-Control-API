const studentDAO = require("../dao/student.dao");
const studentModel = require("../models/student.model");
const studentController = {};

studentController.getAll = async (req, res) => {
    studentDAO
        .getAll()
        .then((students) => {
            res.render("../src/views/studentsIndex", { students });
        })
        .catch((err) => {
            res.json({
                status: "Query failed",
            });
        });
};

studentController.getOne = async (req, res) => {
    studentDAO
        .getOne(req.params.dni)
        .then((student) => {
            if (student != null) {
                res.render("../src/views/studentsEdit", { student });
            } else {
                res.json({
                    status: "Student not found",
                });
            }
        })
        .catch((err) =>
            res.json({
                status: "Request failed",
            })
        );
};

studentController.insertOne = async (req, res) => {
    studentDAO
        .insertOne(req.body)
        .then((result) => {
            res.redirect("/api/students/getAll");
        })
        .catch((err) => {
            res.json({
                status: "Request failed",
            });
        });
};

studentController.updateOne = async (req, res) => {
    studentDAO
        .updateOne(req.params.dni, req.body)
        .then((result) => {
            res.redirect("/api/students/getAll");
        })
        .catch((err) => {
            res.json({
                status: "Request failed",
            });
        });
};

studentController.deleteOne = async (req, res) => {
    studentDAO
        .deleteOne(req.params.dni)
        .then((result) => {
            res.redirect("/api/students/getAll");
        })
        .catch((err) => {
            res.json({
                status: "Request failed",
            });
        });
};

module.exports = studentController;
