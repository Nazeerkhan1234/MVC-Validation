//express Route()
const express = require("express");
const adminRoute = express.Router();
const { studentValidator } = require("../../validators/student");
const { adminController } = require("../../controllers/admin/adminController");
adminRoute.get("/admin/save_student", studentValidator, adminController);
module.exports = { adminRoute };
