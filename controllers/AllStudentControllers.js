const Student = require("../models/studentModels")

/**
 * 
 *  @desc get all student data
 *  @name getAllStudent
 *  @access public
 * 
 */
const getAllStudent = async (req, res) =>{
    let students = await Student.find()
    res.render(`index`, {students})
}

/**
 * 
 *  @desc view student form
 *  @name viewStudent
 *  @access public
 * 
 */
const viewStudentForm = (req, res) =>{
    res.render(`create`)
}
/**
 * 
 *  @desc create student data
 *  @name createStudent
 *  @access public
 * 
 */
const createStudent = (req, res) =>{

    Student.create({
        ...req.body,
        photo : req.file.filename
    })
    res.redirect(`/`);
}
/**
 * 
 *  @desc show student data
 *  @name showStudent
 *  @access public
 * 
 */
const showStudent = async (req, res) =>{
    let id = req.params.id
    let student = await Student.findById(id)
    res.render(`show`, {student})
}

/**
 * 
 *  @desc edit student data
 *  @name editStudent
 *  @access public
 * 
 */
const editStudent = async (req, res) =>{

    let filename = req.body.old_photo

    if (req.file.filename) {
        filename = req.file.filename
    }

    let id = req.params.id
    let student = await Student.findByIdAndUpdate(id, {
        ...req.body,
        photo : filename
    },{
        new : true
    })

    res.redirect(`/`)
}
/**
 * 
 *  @desc show edit student data
 *  @name editViewStudent
 *  @access public
 * 
 */
const editViewStudent = async (req, res) =>{

    let id = req.params.id
    let student = await Student.findById(id)
    res.render(`edit`, {student})
}
/**
 * 
 *  @desc show student data
 *  @name showStudent
 *  @access public
 * 
 */
const deleteStudent = async (req, res) =>{
    let id = req.params.id
    await Student.findByIdAndDelete(id)

    res.redirect(`/`)

}

module.exports = {getAllStudent, editViewStudent, viewStudentForm, showStudent, editStudent, createStudent, deleteStudent};
