const mongoose = require('mongoose')

const EducationalManagerSchema = new mongoose.Schema({
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