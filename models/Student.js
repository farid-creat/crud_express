const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    username:{
        type:String
    },
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

/*
{
  "username":"kiger",
  "name": "ali",
  "id": "0050522815",
  "password": "12345678",
  "email": "ali@gmail.com",
  "phonenumber": "09354368739",
  "grade":"PHD",
  "enteredyear":1380,
  "enteredterm":1,
  "gpa":19.20,
  "college":"CE",
  "field":"CE"
}
*/