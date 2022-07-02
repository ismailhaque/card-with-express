// express init
const express = require(`express`);
const{ getAllStudent, createStudent, } = require("../controllers/AllStudentControllers");
const StudentRouter = express.Router()

// student route
StudentRouter.get(`/`, getAllStudent)
StudentRouter.get(`/create`, createStudent)

// export router
module.exports = StudentRouter;