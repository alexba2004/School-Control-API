const teacherController = require("../controllers/teacher.controller");
const { Router } = require("express");
const router = Router();
console.log("---------------------------------------------");
router.get("/getAll", teacherController.getAll);
router.get("/getOne/:employeedni", teacherController.getOne);
router.post("/insertOne", teacherController.insertOne);
router.post("/updateOne/:employeedni", teacherController.updateOne);
router.get("/deleteOne/:employeedni", teacherController.deleteOne);

module.exports = router;
