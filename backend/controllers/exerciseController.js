const asyncHandler = require('express-async-handler')

const Exercise = require('../model/exerciseModel')

const getExercises = asyncHandler(async (req, res) => {
    const exercises = await Exercise.find()
    res.status(200).json(exercises)
})

const setExercise = asyncHandler(async (req, res) => {

    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const exercise = await Exercise.create({
        text: req.body.text

    })
    
    res.status(200).json(exercise)
})

const updateExercise = asyncHandler( async (req, res) => {
    const exercise = await Exercise.findById(req.params.id)

    if(!exercise) {
        res.status(400)
        throw new Error('Exercise not found')
    }

    const updatedExercise = await Exercise.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    } )

    res.status(200).json(updatedExercise)
})

const deleteExercise = asyncHandler(async (req, res) => {
    const exercise = await Exercise.findById(req.params.id)

    if(!exercise) {
        res.status(400)
        throw new Error('Exercise not found')
    }

    await exercise.remove()

    res.status(200).json({ id: req.params.id})
})

module.exports = {
    getExercises,
    setExercise,
    updateExercise,
    deleteExercise,
}