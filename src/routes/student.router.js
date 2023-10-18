const studentController = require("../controllers/student.controller");
const { Router } = require("express");
const router = Router();
console.log("---------------------------------------------");
router.get("/getAll", studentController.getAll);
router.get("/getOne/:dni", studentController.getOne);
router.post("/insertOne", studentController.insertOne);
router.post("/updateOne/:dni", studentController.updateOne);
router.get("/deleteOne/:dni", studentController.deleteOne);

module.exports = router;
