const EducationalManager = require("../models/EducationalManager");
const Professor = require("../models/Professor");
const Student = require("../models/Student");


const getAllProfessor = (req ,res)=>{
    Professor.find({}).then(result => res.send(result)).catch(err => console.log(err));
}

const getAllProfessorById = async (req ,res)=>{
    const prof = await Professor.find({username:req.params.id})
    if(prof.length==0){
        res.status(401).send("invalid username!")
        return;
    }
    res.status(200).send(prof)
}

const updateProfessor = (req ,res)=>{
    Professor.findOneAndUpdate({username:req.params.id}, req.body,{new:true}).then(result => res.send(result)).catch(err => console.log(err));
}

const deleteProfessor =async (req ,res)=>{
    const findprofessor =await Professor.find({username:req.params.id});
    if(!findprofessor){
        res.status(401).send("invalid username!")
        return ;
    }
    const del = await Professor.findOneAndDelete({username:req.params.id});
    res.status(201).send(del);
}

const  addProfessor = (req ,res)=>{
    console.log(req.body)
    const body = req.body;
    const professor = new Professor(req.body);
    if(!professor.username){
        res.status(400).send("please enter username!");
        return;
    }
    else if(!professor.password){
        res.status(400).send("please enter password!");
        return;
    }
    Professor.find({username:professor.username}).then(result => {
        if(result.length!=0){
            res.status(400).send("username is already used!");
            return;
        }
        else{
            professor.save().then(()=>{res.status(201).send(professor)}).catch((err)=>{res.status(400).send(err)});
        }
    });
}





const getAllStudent = (req ,res)=>{
    Student.find({}).then(result => res.send(result)).catch(err => console.log(err));
}

const getAllStudentById = async(req ,res)=>{
    const stu = await Student.find({username:req.params.id})
    if(stu.length==0){
        res.status(401).send("invalid username!")
        return;
    }
    res.status(200).send(stu)

}

const updateStudent = (req ,res)=>{
    Student.find({username:req.params.id}).then(result =>{
        if(result.length==0){
            res.status(400).send("invalid username!")
            return;
        }
        else{
            Student.findOneAndUpdate({username:req.params.id}, req.body,{new:true}).then(resultfind => res.status(200).send(resultfind)).catch(err => console.log(err));
        }
    })
   
}

const deleteStudent = (req ,res)=>{
    Student.find({username:req.params.id}).then(result =>{
        if(result.length==0){
            res.status(400).send("invalid username!")
            return;
        }
        else{
            Student.findOneAndDelete({username:req.params.id}).then(resultdel => res.status(200).send(resultdel)).catch(err => console.log(err));
        }
    })
   


 
}


const addStudent = (req ,res)=>{
    const body = req.body;
    const student = new Student(req.body);
    if(!student.username){
        res.status(400).send("please enter username!");
        return;
    }
    else if(!student.password){
        res.status(400).send("please enter password!");
        return;
    }
    Student.find({username:student.username}).then(result => {
        if(result.length!=0){
            res.status(400).send("username is already used!");
            return;
        }
        else{
            student.save().then(()=>{res.status(200).send(student)}).catch((err)=>{console.log(err)});
        }
    });
}















const getAllmanager = (req ,res)=>{
    EducationalManager.find({}).then(result => res.send(result)).catch(err => console.log(err));
}

const getAllManagerById = (req ,res)=>{
    EducationalManager.find({id:req.params.id}).then(result => res.send(result)).catch(err => console.log(err));
}

const updateManager = (req ,res)=>{
    EducationalManager.find({username:req.params.id}).then(result =>{
        if(result.length==0){
            res.status(400).send("invalid username!")
            return;
        }
        else{
            EducationalManager.findOneAndUpdate({username:req.params.id}, req.body,{new:true}).then(resultfind => res.status(200).send(resultfind)).catch(err => console.log(err));
        }
    })
}

const deleteManager = (req ,res)=>{

    EducationalManager.findOneAndDelete({id:req.params.id}).then(result => res.send(result)).catch(err => console.log(err));
}


const addmanager = (req ,res)=>{
    const body = req.body;
    const educationalManager = new EducationalManager(req.body);
    if(!educationalManager.username){
        res.status(400).send("please enter username!");
        return;
    }
    else if(!educationalManager.password){
        res.status(400).send("please enter password!");
        return;
    }
    EducationalManager.find({username:educationalManager.username}).then(result => {
        if(result.length!=0){
            res.status(400).send("username is already used!");
            return;
        }
        else{
            educationalManager.save().then(()=>{res.status(200).send(educationalManager)}).catch((err)=>{console.log(err)});
        }
    });
}








module.exports = {
    addmanager,
    deleteManager,
    updateManager,
    getAllManagerById,
    getAllmanager,
    getAllProfessor,
    addProfessor,
    getAllProfessorById,
    updateProfessor,
    deleteProfessor,
    getAllStudent,
    addStudent,
    getAllStudentById,
    updateStudent,
    deleteStudent
}

