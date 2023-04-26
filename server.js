const express = require('express');
require('./db')
const ItManagerRoutes = require('./routes/ItManager')

const PORT = process.env.PORT || 3030;

const app = express();

app.use(express.json());

app.use('/admin',ItManagerRoutes);
app.listen(PORT, () =>{
    console.log(`server started on port ${PORT}`)
});