const Course = require("../models/Course");

const TermCourse = require("../models/TermCourse");




const createCourse = (req, res) => {
    const body = req.body;
    const termCourse = new TermCourse(req.body);
    const course = null;
    if (!termCourse.professorname) {
        course = new Course(req.body);
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
    const course = null;
    if (!termCourse.professorname) {
        course = new Course(req.body);
        Course.find({ name: course.name }).then(result => {
            if (result.length == 0) {
                res.status(400).send("username is already not valid!");
                return;
            }
            else {
                Course.findOneAndUpdate({ name: course.name }, req.body, { new: true }).then(result => res.status(201).send(result)).catch(err => console.log(err));
            }
        });

    }
    else {

        TermCourse.find({ name: termCourse.name }).then(result => {
            if (result.length == 0) {
                res.status(400).send("username is not valid!");
                return;
            }
            else {
                TermCourse.findOneAndUpdate({ name: termCourse.name }, req.body, { new: true }).then(result => res.status(201).send(result)).catch(err => console.log(err));
            }
        });

    }




}


const deleteCourse = (req, res) => {
    const name = req.params.id;
    TermCourse.find({name:id}).then(result =>{
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
        const result=null;
        const result1=null;
        if(user.role =="Student"){
            result = await TermCourse.find({})
            res.status(201).send(result).catch(err => console.log(err));


            colege = await Student.find({username:user.username}).college;
            classes = await TermCourse.find({college:colege , })
            res.status(201).send(classes).catch(err => console.log(err));

        }
        if(user.role == "EducationalManager"){
            result = await TermCourse.find({name:req.body.name});
            result1 = await Course.find({name:req.body.name});
            res.status(201).send({result,result1}).catch(err.status(500).send(console.log(err)))
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

