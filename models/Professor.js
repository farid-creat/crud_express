const mongoose = require('mongoose')

const ProfessorSchema = new mongoose.Schema({
    username:{
        type:String
    },
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



/*
{
  "username":"alli",
  "name": "ali",
  "id": "0050522815",
  "password": "12345678",
  "email": "ali@gmail.com",
  "phonenumber": "09354368739",
  "college": "CE",
  "field": "CS",
  "order": "professor"
}
*/