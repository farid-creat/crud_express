const jwt = require("jsonwebtoken")





const validate = (req, res, next) => {
    try {
        let token;
        let authHeader = req.headers.Authorization || req.headers.authorization;
        if (authHeader && authHeader.startsWith("Bearer")) {
            token = authHeader.split(" ")[1];
            jwt.verify(token, process.env.ACCES_TOKEN_SECERET, (err, decoded) => {
                if (err) {
                    res.status(401).send("user is not authorized!")
                }
                req.user = decoded.user;
                next();
            });
            return;
        }
        if (!token) {
            res.status(401).send("user is not authorized!")
            return;
        }
    } catch (error) {
        res.status(401).send("user is not authorized!")
        return;
    }

}



const validateManager = (req, res, next) => {
    let user = req.user;
    if(user.role !="ItManager"){
        res.status(400).send("acces denied")
        return;
    }
    next()
}




const validateEducatedManager = (req, res, next) => {
    console.log("aaaaaaa")
    let user = req.user;
    if(user.role !="EducationalManager"){
        res.status(403).send("access denied")
        return;
    }
    next()
}


const validateEducatedManagerorstudent = (req, res, next) => {
    let user = req.user;
    if(user.role !="EducationalManager" && user.role!="Student"){
        res.status(403).send("access denied")
        return;
    }
    next()
}

const validateEducatedManagerorstudentorProfessor = (req, res, next) => {
    let user = req.user;
    if(user.role !="EducationalManager" && user.role!="Student"&& user.role!="Professor"){
        res.status(403).send("access denied")
        return;
    }
    next()
}


const validateStudentId = (req, res, next) => {
    let user = req.user;
    if(user.username != req.params.id){
        res.status(400).send("this is not your username!")
        return;
    }
    next()
}


const validateStudent = (req, res, next) => {
    let user = req.user;
    if(user.role !="Student"){
        res.status(403).send("access denied")
        return;
    }
    next()
}


const validateProfessor = (req, res, next) => {
    let user = req.user;
    if(user.role !="Professor"){
        res.status(403).send("access denied")
        return;
    }
    next()
}

const validateProfessorId = (req, res, next) => {
    let user = req.user;
    if(user.username != req.params.id){
        res.status(400).send("this is not your username!")
        return;
    }
    next()
}



module.exports = {
    validate,
    validateManager,
    validateStudent,
    validateEducatedManager,
    validateEducatedManagerorstudent,
    validateStudentId,
    validateProfessor,
    validateProfessorId,
    validateEducatedManagerorstudentorProfessor
}
