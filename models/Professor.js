const mongoose = require('mongoose')

const ProfessorSchema = new mongoose.Schema({
    name:{
        type : String
    },
    id:{
        type:String
    },
    password:{
        type:String
    },
    email:{
        type:String
    },
    phonenumber:{
        type:String
    },
    college:{
        type:String
    },
    field:{
        type:String
    },
    order:{
        type:String
    }
});

const Professor = mongoose.model('Professor',ProfessorSchema);

module.exports = Professor;