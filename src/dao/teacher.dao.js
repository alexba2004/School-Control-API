// DAO (Data Access Object)
const Teacher = require("../models/teacher.model");
const teacherDAO = {};
teacherDAO.getAll = async () => {
    const teachers = Teacher.find();
    return teachers;
};

teacherDAO.getOne = async (employeedni) => {
    const teacher = Teacher.findOne({ employeedni: employeedni });
    return teacher;
};

teacherDAO.insertOne = async (teacher) => {
    const teacherSaved = new Teacher(teacher);
    await teacherSaved.save();
    return "Teacher Saved";
};

teacherDAO.updateOne = async (employeedni, teacher) => {
    await Teacher.updateOne({ employeedni: employeedni }, teacher);
    return "Teacher Updated";
};

teacherDAO.deleteOne = async (employeedni) => {
    await Teacher.deleteOne({ employeedni: employeedni });
    return "Teacher Delete";
};

module.exports = teacherDAO;
