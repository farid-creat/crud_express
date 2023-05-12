const jwt = require("jsonwebtoken")





const validate = (req, res, next) => {
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
}



const validateManager = (req, res, next) => {
    let user = req.user;
    if(user.role !="ItManager"){
        res.status(500).send("acces denied")
        return;
    }
    next()
}




const validateEducatedManager = (req, res, next) => {
    let user = req.user;
    if(user.role !="EducationalManager"){
        res.status(500).send("acces denied")
        return;
    }
    next()
}


const validateStudent = (req, res, next) => {
    let user = req.user;
    if(user.role !="Student"){
        res.status(500).send("acces denied")
        return;
    }
    next()
}




module.exports = {
    validate,
    validateManager,
    validateStudent,
    validateEducatedManager
}
