const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DB_CONNECTION_URL).then(() =>{
    console.log("connected to the database successfully")
}).catch( err =>{
    console.log(`error while connecting to the database \n error : ${err}`)
})