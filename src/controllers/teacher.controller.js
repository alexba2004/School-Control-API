const teacherDAO = require("../dao/teacher.dao");
const teacherController = {};

teacherController.getAll = async (req, res) => {
    teacherDAO
        .getAll()
        .then((teachers) => {
            res.render("../src/views/teachersIndex", { teachers });
        })
        .catch((err) => {
            res.json({
                status: "Query failed",
            });
        });
};

teacherController.getOne = async (req, res) => {
    teacherDAO
        .getOne(req.params.employeedni)
        .then((teacher) => {
            if (teacher != null) {
                res.render("../src/views/teachersEdit", { teacher });
            } else {
                res.json({
                    status: "Teacher not found",
                });
            }
        })
        .catch((err) =>
            res.json({
                status: "Request failed",
            })
        );
};

teacherController.insertOne = async (req, res) => {
    teacherDAO
        .insertOne(req.body)
        .then((result) => {
            res.redirect("/api/teachers/getAll");
        })
        .catch((err) => {
            res.json({
                status: "Request failed",
            });
        });
};

teacherController.updateOne = async (req, res) => {
    teacherDAO
        .updateOne(req.params.employeedni, req.body)
        .then((result) => {
            res.redirect("/api/teachers/getAll");
        })
        .catch((err) => {
            res.json({
                status: "Request failed",
            });
        });
};

teacherController.deleteOne = async (req, res) => {
    teacherDAO
        .deleteOne(req.params.employeedni)
        .then((result) => {
            res.redirect("/api/teachers/getAll");
        })
        .catch((err) => {
            res.json({
                status: "Request failed",
            });
        });
};

module.exports = teacherController;
