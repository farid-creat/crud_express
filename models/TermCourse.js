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
    },
    college:{
        type:String
    },
});

const TermCourse = mongoose.model('TermCourse',TermCourseSchema);

module.exports = TermCourse;

/*
{
    "name":"AlGO",
    "prerequisite":["DB"],
    "need":"AP",
    "unit":3,
    "classtime":"2012-04-23T18:25:43.511Z",
    "examtime":"2012-04-23T18:25:43.511Z",
    "place":"CE",
    "professorname":"ali",
    "capacity":10,
    "term":2,
    "college":"CE"
}
*/