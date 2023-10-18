// DAO (Data Access Object)
const Student = require("../models/student.model");
const studentDAO = {};
studentDAO.getAll = async () => {
    const students = Student.find();
    return students;
};

studentDAO.getOne = async (dni) => {
    const student = Student.findOne({ dni: dni });
    return student;
};

studentDAO.insertOne = async (student) => {
    const studentSaved = new Student(student);
    await studentSaved.save();
    return "Student Saved";
};

studentDAO.updateOne = async (dni, student) => {
    await Student.updateOne({ dni: dni }, student);
    return "Student Updated";
};

studentDAO.deleteOne = async (dni) => {
    await Student.deleteOne({ dni: dni });
    return "Student Delete";
};

module.exports = studentDAO;
