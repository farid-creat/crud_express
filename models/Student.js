const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    name:{
        type : String
    },
    id:{
        type:Number
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
    grade:{
        type:String
    },
    enteredyear:{
        type:Number
    },
    enteredterm:{
        type:Number
    },
    gpa:{
        type:Number
    },
    college:{
        type:String
    },
    field:{
        type:String
    }
});

const Student = mongoose.model('Student',StudentSchema);

module.exports = Student;