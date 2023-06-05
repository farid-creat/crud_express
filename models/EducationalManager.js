const mongoose = require('mongoose')

const EducationalManagerSchema = new mongoose.Schema({
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
    college:{
        type:String
    }
});

const EducationalManager = mongoose.model('EducationalManager',EducationalManagerSchema);

module.exports = EducationalManager;


/*
{
  "username":"akbar",
  "name": "ali",
  "id": "0050522815",
  "password": "12345678",
  "email": "ali@gmail.com",
  "phonenumber": "09354368739",
  "college": "CE",
}
*/