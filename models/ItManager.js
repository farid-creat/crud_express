const mongoose = require('mongoose')

const ItManagerSchema = new mongoose.Schema({
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
    }
});

const ItManager = mongoose.model('ItManager',ItManagerSchema);

module.exports = ItManager;
/*
{
  "username":"alli",
  "name": "ali",
  "id": "0050522815",
  "password": "12345678",
  "email": "ali@gmail.com",
  "phonenumber": "09354368739"
}
*/