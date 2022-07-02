
/**
 * 
 *  @desc get all student data
 *  @name getAllStudent
 *  @access public
 * 
 */
const getAllStudent = (req, res) =>{
    res.render(`index`)
}

/**
 * 
 *  @desc create student data
 *  @name createStudent
 *  @access public
 * 
 */
const createStudent = (req, res) =>{
    res.render(`create`)
}

module.exports = {getAllStudent, createStudent};
