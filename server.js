const express = require('express');
const {validate,validateManager} = require('./middleware/validateToken');
require('./db')
const ItManagerRoutes = require('./routes/ItManager');
const loginRoutes = require('./routes/login');
const coursApiRoutes = require('./routes/courseApi');
const coursesApi = require("./routes/coursesApi");
const StidentsApi = require("./routes/studentsApi");
const StudentApi = require("./routes/studentApi");
const ProfessorsApi = require("./routes/professorsApi")
const professorApi = require("./routes/professorApi");
const PORT = process.env.PORT || 3030;


const app = express();


app.use(express.json());


app.use('/admin',validate,validateManager,ItManagerRoutes);
app.use('/login',loginRoutes);


app.use("/course",validate,coursApiRoutes);

app.use("/courses",validate,coursesApi);

app.use("/students",validate,StidentsApi)

app.use("/student",validate,StudentApi)

app.use("/Professors",validate,ProfessorsApi)

app.use("/Professor",validate,professorApi)

app.listen(PORT, () =>{
    console.log(`server started on port ${PORT}`)
});

