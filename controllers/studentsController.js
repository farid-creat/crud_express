const Course = require("../models/Course");
const EducationalManager = require("../models/EducationalManager");
const Professor = require("../models/Professor");
const Student = require("../models/Student");
const TermCourse = require("../models/TermCourse");




const getStudents =async (req, res) => {
    try {
        result = await Student.find({});
        res.status(201).send({result}).catch(err.status(500).send(console.log(err)))
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}



module.exports = {
    getStudents
}

