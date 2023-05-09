const jwt = require('jsonwebtoken');
const ItManager = require("../models/ItManager");
const Professor = require("../models/Professor");
const Student = require("../models/Student");
require("dotenv").config();
const itManager = ItManager({
    "username":"alli",
    "name": "ali",
    "id": "0050522815",
    "password": "12345678",
    "email": "ali@gmail.com",
    "phonenumber": "09354368739"
  });
  itManager.save();



const login = (req ,res)=>{
    const{username, password} = req.body;
    if(!username || !password){
        res.status(400).send("all fiels are mandatory")
        return;
    }

    ItManager.find({username:username}).then(result => {
        if(result.length==0){
            res.status(401).send("username is not valid!");
            return;
        }
        else{
            if(result[0].password !=password){
                res.status(401).send("paassword is in correct!")
                return;
            }
            console.log(process.env.ACCES_TOKEN_SECERET)
            var accestoken = jwt.sign({
                user:{
                    username:result[0].username,
                    role:"admin"
                },
            },process.env.ACCES_TOKEN_SECERET,
            {expiresIn:"30m"}
            );
            res.status(200).send(accestoken);
        }
    });


}

"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYWxsaSIsInJvbGUiOiJhZG1pbiJ9LCJpYXQiOjE2ODM2NDc5MTUsImV4cCI6MTY4MzY0OTcxNX0.XxcvqWP5UjebqwN9Z_CfbSSHmwWu8F6HmBAc01EYTvg"




module.exports = {
    login
}

