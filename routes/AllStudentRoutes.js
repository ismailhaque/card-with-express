// express init
const express = require(`express`);
const{ getAllStudent, createStudent, showStudent, editStudent,  viewStudentForm, deleteStudent, editViewStudent, } = require("../controllers/AllStudentControllers");
const StudentRouter = express.Router()
// path
const path = require(`path`)
// multer init
const multer = require(`multer`)

// storage setup 
const storage = multer.diskStorage({
	destination : (req, file, cb) => {
        cb(null, path.join(__dirname, `../assets/upload/images`))
	},
	filename : (req, file, cb) => {
        cb(null, Date.now() +`_`+ file.originalname)
	}
});

// load multer
const studentMulter = multer({
    storage : storage
}).single(`photo`)

// student route
StudentRouter.get(`/`, getAllStudent)
StudentRouter.post(`/api/student`, studentMulter, createStudent)
StudentRouter.get(`/create`, viewStudentForm)
StudentRouter.get(`/view/:id`, showStudent)
StudentRouter.get(`/edit/:id`, editViewStudent)
StudentRouter.get(`/delete/:id`, deleteStudent)
StudentRouter.post(`/api/student/:id`, studentMulter, editStudent)

// export router
module.exports = StudentRouter;