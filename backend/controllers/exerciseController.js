const asyncHandler = require('express-async-handler')

const Exercise = require('../model/exerciseModel')
const userModel = require('../model/userModel')
const User = require('../model/userModel')

const getExercises = asyncHandler(async (req, res) => {
    const exercises = await Exercise.find( { user: req.user.id })
    res.status(200).json(exercises)
})

const setExercise = asyncHandler(async (req, res) => {

    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const exercise = await Exercise.create({
        text: req.body.text,
        user: req.user.id

    })
    
    res.status(200).json(exercise)
})

const updateExercise = asyncHandler( async (req, res) => {
    const exercise = await Exercise.findById(req.params.id)

    if(!exercise) {
        res.status(400)
        throw new Error('Exercise not found')
    }

    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    if(exercise.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
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

    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    if(exercise.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
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