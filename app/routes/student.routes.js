module.exports = (app) => {
    const students = require('../controllers/student.controollers')

    var router = require('express').Router()

    router.get('/',students.findAll)

    //router.get('/edit-student/:id',students.findOne)

    router.post('/create-student',students.create)

    //router.put('/update-student/:id',students.update)

    //router.delete('/delete-student/:id',students.delete)

    app.use('/students',router)

}