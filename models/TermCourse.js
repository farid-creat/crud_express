const mongoose = require('mongoose')

const TermCourseSchema = new mongoose.Schema({
    name:{
        type : String
    },
    prerequisite:{
        type:[String]
    },
    need:{
        type:String
    },
    unit:{
        type:Number
    },
    classtime:{
        type:Date
    },
    examtime:{
        type:Date
    },
    place:{
        type:String
    },
    professorname:{
        type:String
    },
    capacity:{
        type:Number
    },
    term:{
        type:Number
    }
});

const TermCourse = mongoose.model('TermCourse',TermCourseSchema);

module.exports = TermCourse;