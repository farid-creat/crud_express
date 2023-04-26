const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
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
    }
});

const Course = mongoose.model('Course',CourseSchema);

module.exports = Course;