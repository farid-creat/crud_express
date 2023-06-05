
const Professor = require("../models/Professor");


const updateProfessorByusername =async (req, res) => {
    try {
        result = await Professor.findOneAndUpdate({username:req.params.id}, req.body,{new:true});
        res.status(201).send({result})
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}



const getProfessorById =async (req, res) => {
    try {
        result = await Professor.find({username:req.params.id});
        res.status(201).send({result}).catch(err.status(500).send(console.log(err)))
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


module.exports = {
    getProfessorById,
    updateProfessorByusername
}

