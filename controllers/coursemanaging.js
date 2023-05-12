const Course = require("../models/Course");
const EducationalManager = require("../models/EducationalManager");
const Professor = require("../models/Professor");
const Student = require("../models/Student");
const TermCourse = require("../models/TermCourse");




const createCourse = (req ,res)=>{
    const body = req.body;
    const termCourse = new TermCourse(req.body);
    const course = null; 
    if(!termCourse.professorname){
        course = new Course(req.body);
        Course.find({name:course.name}).then(result => {
            if(result.length!=0){
                res.status(400).send("name is already used!");
                return;
            }
            else{
                course.save().then(()=>{res.status(201).send(course)}).catch((err)=>{res.status(400).send(err)});
            }
        });
        
    }
    else{

        TermCourse.find({name:termCourse.name}).then(result => {
            if(result.length!=0){
                res.status(400).send("name is already used!");
                return;
            }
            else{
                termCourse.save().then(()=>{res.status(201).send(termCourse)}).catch((err)=>{res.status(400).send(err)});
            }
        });

    }




}



const updateCourse = (req ,res)=>{
    const body = req.body;
    const termCourse = new TermCourse(req.body);
    const course = null; 
    if(!termCourse.professorname){
        course = new Course(req.body);
        Course.find({name:course.name}).then(result => {
            if(result.length!=0){
                res.status(400).send("username is already used!");
                return;
            }
            else{
                course.save().then(()=>{res.status(201).send(course)}).catch((err)=>{res.status(400).send(err)});
            }
        });
        
    }
    else{

        TermCourse.find({name:termCourse.name}).then(result => {
            if(result.length!=0){
                res.status(400).send("username is already used!");
                return;
            }
            else{
                termCourse.save().then(()=>{res.status(201).send(termCourse)}).catch((err)=>{res.status(400).send(err)});
            }
        });

    }




}








module.exports = {
    createCourse,
    updateCourse
}

