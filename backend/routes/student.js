const express = require('express');
const studentSchema = require('../models/student');

const router = express.Router();

// create student
router.post('/', (req, res) => {
    const student = studentSchema(req.body);
    student
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// get all students
router.get('/getAll', (req, res) => {
    studentSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

// get a student
router.get('/:id', (req, res) => {
    const { id } = req.params;
    studentSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// update a student
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    studentSchema
        .updateOne({_id: id}, { $set: {name, email, password} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// disable student
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { active } = req.body;
    studentSchema
        .updateOne({_id: id}, { $set: {active} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// delete a student
router.delete('/:id', (req, res) =>{
    const { id } = req.params;
    studentSchema
        .remove({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;