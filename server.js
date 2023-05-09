const express = require('express');
const {validate,validateManager} = require('./middleware/validateToken');
require('./db')
const ItManagerRoutes = require('./routes/ItManager')
const loginRoutes = require('./routes/login')

const PORT = process.env.PORT || 3030;

const app = express();

app.use(express.json());
app.use('/admin',validate,validateManager,ItManagerRoutes);
app.use('/login',loginRoutes)
app.listen(PORT, () =>{
    console.log(`server started on port ${PORT}`)
});