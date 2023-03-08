const asyncHandler = require('express-async-handler')

const getExercises = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get exercises" })
})

const setExercise = asyncHandler(async (req, res) => {

    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    
    res.status(200).json({ message: "Post exercise" })
})

const updateExercise = asyncHandler( async (req, res) => {
    res.status(200).json({ message: `Update exercise ${req.params.id}` })
})

const deleteExercise = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete exercise ${req.params.id}` })
})

module.exports = {
    getExercises,
    setExercise,
    updateExercise,
    deleteExercise,
}