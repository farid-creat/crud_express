const Course = require("../models/Course");
const EducationalManager = require("../models/EducationalManager");
const Professor = require("../models/Professor");
const Student = require("../models/Student");
const TermCourse = require("../models/TermCourse");




const getCourses = async (req, res) => {
    try {
        let user = req.user;
        const termCourse = await TermCourse.find({});;
        const course = await Course.find({});
        
        const colege = await Student.find({ username: user.username });
        const colegeP = await Professor.find({ username: user.username });
        if (user.role == "Student") {
            if (colege.length > 0) {
                const classes = await TermCourse.find({ college: colege[0].college })
                res.status(201).send(classes)
            } else {
                res.status(400).send("not found any!")
            }
        }
        if (user.role == "EducationalManager") {
            res.status(201).send({ termCourse, course })
        }
        if (user.role == "Professor") {
            if (colegeP.length > 0) {
                const classes = await TermCourse.find({ college: colegeP[0].college })
                res.status(201).send(classes)
            } else {
                res.status(400).send("not found any!")
            }
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}



module.exports = {
    getCourses
}

