const Course = require("../models/Course");
const EducationalManager = require("../models/EducationalManager");
const Professor = require("../models/Professor");
const Student = require("../models/Student");
const TermCourse = require("../models/TermCourse");




const getStudentById =async (req, res) => {
    try {
        result = await Student.find({username:req.params.id});
        res.status(201).send({result})
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

const updateStudentByusername =async (req, res) => {
    try {
        result = await Student.findOneAndUpdate({username:req.params.id}, req.body,{new:true});
        res.status(201).send({result})
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}





module.exports = {
    getStudentById,
    updateStudentByusername
}

