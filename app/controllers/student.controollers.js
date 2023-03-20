const db = require('../models')
const Student = db.students

exports.findAll = (req,res) => {
    res.send('findAll')
}

exports.findOne = (req,res) => {
    
}

exports.create = (req,res) => {
    if(!req.body.code) {
        res.status(400).json({message:"connect can not to empty"})
        return;
    }

    const student = new Student(
        {
            code: req.body.code,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email
        }
    );

        student.save(student).then(data => {
            res.json(data)
        })
        .catch(err =>{
            res.status(500).json({message: err.message || "error!! i sus you"})
        })

}

exports.update = (req,res) => {
    
}

exports.delete = (req,res) => {
    
}