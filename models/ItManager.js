const mongoose = require('mongoose')

const ItManagerSchema = new mongoose.Schema({
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