const Course = require("../models/Course");
const Professor = require("../models/Professor");
const Student = require("../models/Student");

const TermCourse = require("../models/TermCourse");




const createCourse = (req, res) => {
    const body = req.body;
    const termCourse = new TermCourse(req.body);
    const course = new Course(req.body);;
    if (!termCourse.professorname) {
        Course.find({ name: course.name }).then(result => {
            if (result.length != 0) {
                res.status(400).send("name is already used!");
                return;
            }
            else {
                course.save().then(() => { res.status(201).send(course) }).catch((err) => { res.status(400).send(err) });
            }
        });

    }
    else {

        TermCourse.find({ name: termCourse.name }).then(result => {
            if (result.length != 0) {
                res.status(400).send("name is already used!");
                return;
            }
            else {
                termCourse.save().then(() => { res.status(201).send(termCourse) }).catch((err) => { res.status(400).send(err) });
            }
        });

    }




}


const updateCourse = (req, res) => {
    const termCourse = new TermCourse(req.body);
    const course = new Course(req.body);;
    if (!termCourse.professorname) {
        Course.find({ name: req.params.id }).then(result => {
            if (result.length == 0) {
                res.status(400).send("username is not valid!");
                return;
            }
            else {
                Course.findOneAndUpdate({ name: req.params.id }, req.body, { new: true }).then(result => res.status(201).send(result)).catch(err => console.log(err));
            }
        });

    }
    else {

        TermCourse.find({ name: req.params.id }).then(result => {
            if (result.length == 0) {
                res.status(400).send("username is not valid!");
                return;
            }
            else {
                TermCourse.findOneAndUpdate({ name: req.params.id }, req.body, { new: true }).then(result => res.status(201).send(result)).catch(err => console.log(err));
            }
        });

    }




}


const deleteCourse = (req, res) => {
    const name = req.params.id;
    console.log(name)
    TermCourse.find({name:name}).then(result =>{
        if(result.length==0){
            Course.find({name:name}).then(resultC =>{
                if(resultC.length ==0){
                    res.status(401).send("username is already not valid!");
                }
                else{
                    Course.findOneAndDelete({name:name}).then(result => res.send(result)).catch(err => console.log(err));
                }
            })
        }
        else{
            TermCourse.find({name:name}).then(resultC =>{
                if(resultC.length ==0){
                    res.status(401).send("username is already not valid!");
                }
                else{
                    TermCourse.findOneAndDelete({name:name}).then(result => res.send(result)).catch(err => console.log(err));
                }
            })
        }
    })
}


const getCourseById =async (req, res) => {
    try {
        let user = req.user;
        const termCourse=await TermCourse.find({name:req.params.id});;
        const course=await Course.find({name:req.params.id});;
        const colege = await Student.find({username:user.username});
        const colegep = await Professor.find({username:user.username});
        if(user.role =="Student"){
            if (colege.length > 0) {
                const classes = await TermCourse.find({ college: colege[0].college,name:req.params.id })
                if(classes.length==0){
                    res.status(200).send("there is no class")
                }
                else{
                    res.status(201).send(classes)
                }
            } else {
                res.status(400).send("not found any!")
            }
        }
        if(user.role == "EducationalManager"){
            res.status(201).send({termCourse,course})
        }
        if(user.role =="Professor"){
            if (colegep.length > 0) {
                const classes = await TermCourse.find({ college: colegep[0].college,name:req.params.id })
                if(classes.length==0){
                    res.status(200).send("there is no class")
                }
                else{
                    res.status(201).send(classes)
                }
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
    createCourse,
    updateCourse,
    deleteCourse,
    getCourseById
}

