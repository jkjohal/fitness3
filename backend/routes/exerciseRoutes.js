const express = require('express')
const router = express.Router()
const {getExercises, setExercise, updateExercise, deleteExercise } = require('../controllers/exerciseController')


router.route('/').get(getExercises).post(setExercise)
router.route('/:id').delete(deleteExercise).put(updateExercise)



module.exports = router