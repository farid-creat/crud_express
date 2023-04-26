const Professor = require("../models/Professor")


const getAllProfessor = (req ,res)=>{
    Professor.find({}).then(result => res.send(result)).catch(err => console.log(err));
}

const addProfessor = (req ,res)=>{
    const body = req.body;
    const professor = new Professor(req.body);
    professor.save().then(()=>{res.send(professor)}).catch((err)=>{console.log(err)});
}

module.exports = {
    getAllProfessor,
    addProfessor
}

