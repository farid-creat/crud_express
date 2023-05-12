
const Professor = require("../models/Professor");





const getProfessorById =async (req, res) => {
    try {
        result = await Professor.find({id:req.params.id});
        res.status(201).send({result}).catch(err.status(500).send(console.log(err)))
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


module.exports = {
    getProfessorById
}

